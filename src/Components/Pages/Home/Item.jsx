import axios from "axios";
import PropTypes from "prop-types";
import { CgEditBlackPoint } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Item = ({ room, isShown, roomData, setRoomData }) => {
  const { _id, type, roomNo, pricePerNight, description, beds, available } =
    room;
  const navigate = useNavigate();

  const handleRoomDelete = () => {
    Swal.fire({
      title: `Are you sure to delete "Room ${roomNo}"`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/room/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your Room has been deleted.",
              icon: "success",
            });
            const newRoomData = roomData.filter((room) => room._id !== _id);
            setRoomData(newRoomData);
          }
        });
      }
    });
  };

  const handleEditRoom = () => {
    navigate(`/rooms/edit_room/${_id}`);
  };

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-slate-200 font-raleway">
      <div className="card-body">
        <h2 className="text-2xl font-semibold">Room No : {roomNo}</h2>
        <p className="font-semibold">
          <CgEditBlackPoint className="inline mr-1" />
          Room ID : {_id}
        </p>
        <div className="flex justify-between">
          <p className="font-semibold">
            <CgEditBlackPoint className="inline mr-1" />
            Type : {type}
          </p>
          <p className="font-semibold">
            <CgEditBlackPoint className="inline mr-1" />
            Beds : {beds}
          </p>
        </div>
        <p className="font-semibold">
          <CgEditBlackPoint className="inline mr-1" />
          Price Per Night : {pricePerNight} $
        </p>
        <p className="font-semibold">
          <CgEditBlackPoint className="inline mr-1" />
          Message : {description}
        </p>
        <p className="font-semibold">
          Availability :
          {available ? (
            <button className="btn btn-success text-white font-semibold ml-1.5">
              Available
            </button>
          ) : (
            <button className="btn bg-red-600 text-white font-semibold ml-1.5">
              Not Available
            </button>
          )}
        </p>
        {isShown ? (
          <div className="mt-2">
            <button
              onClick={handleEditRoom}
              className="w-full bg-amber-500 text-white font-semibold py-1.5 rounded-[18px] cursor-pointer active:scale-x-95"
            >
              EDIT
            </button>
            <button
              onClick={handleRoomDelete}
              className="w-full bg-red-500 text-white font-semibold py-1.5 mt-2 rounded-[18px] cursor-pointer active:scale-x-95"
            >
              DELETE
            </button>
            <button className="w-full bg-green-500 text-white font-semibold py-1.5 mt-2 rounded-[18px] cursor-pointer active:scale-x-95">
              BOOK
            </button>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

Item.propTypes = {
  room: PropTypes.object.isRequired,
};

export default Item;
