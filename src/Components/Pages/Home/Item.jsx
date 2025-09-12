import PropTypes from "prop-types";
import { CgEditBlackPoint } from "react-icons/cg";

const Item = ({ room, isShown }) => {
  const { _id, type, roomNo, pricePerNight, description, beds, available } =
    room;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border-2 border-slate-200 font-raleway">
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
          Price Per Night : {pricePerNight}
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
            <button className="w-full bg-amber-500 text-white font-semibold py-1.5 rounded-xl cursor-pointer active:scale-x-95">
              EDIT
            </button>
            <button className="w-full bg-red-500 text-white font-semibold py-1.5 mt-1.5 rounded-xl cursor-pointer active:scale-x-95">
              DELETE
            </button>
            <button className="w-full bg-green-500 text-white font-semibold py-1.5 mt-1.5 rounded-xl cursor-pointer active:scale-x-95">
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
