import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BookRoom = () => {
  const roomData = useLoaderData();
  const { _id, roomNo, available } = roomData;
  const navigate = useNavigate();

  const handleFormBook = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());
    const guestName = Data.guestName;
    const nights = parseInt(Data.totNights);
    const checkInData = Data.checkIn;
    const roomId = _id;
    const bookData = { roomId, guestName, nights, checkInData };

    if (!available) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Room ${roomNo} is already booked !`,
        confirmButtonColor: "#1E88E5",
      });
      return;
    }

    axios.post("http://localhost:3000/bookroom", bookData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: `Room ${roomNo} is Booked Now !`,
          text: "Click Ok to proceed",
          icon: "success",
          confirmButtonColor: "#1E88E5",
        });
        navigate("/rooms");
      }
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto mt-5 font-raleway">
        <h1 className="text-4xl font-semibold underline text-[#374151]">
          Book Room : {roomNo}
        </h1>
        <h1 className="underline text-center text-xl font-semibold mt-1 text-[#374151] px-1">
          Room ID - {_id}
        </h1>
        <p className="text-[18px] text-[#1B1A1A] text-justify md:text-center mt-3.5 px-1.5">
          Secure your slice of tranquility. With just a few details, book your
          ideal room and unlock a memorable getaway tailored just for you. Your
          next chapter of relaxation awaits—let’s make it yours.
        </p>
      </div>
      <form onSubmit={handleFormBook} className="max-w-5xl mx-auto mt-6 px-1.5">
        <div className="w-full">
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            Guest Name
          </label>
          <input
            type="text"
            name="guestName"
            className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name Here"
            required
          />
        </div>
        <div className="mt-3">
          <div className="w-full">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Nights
            </label>
            <input
              type="number"
              name="totNights"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter No. Of Nights You Stay Here"
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Check-in
            </label>
            <input
              type="date"
              name="checkIn"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-[17px]"
              placeholder="Select Check-in Data"
              required
            />
          </div>
        </div>
        <button className="bg-blue-500 text-2xl font-raleway font-semibold active:scale-x-95 text-white border-2 border-blue-500 w-full p-1.5 mt-6 rounded-[4px] cursor-pointer">
          Book Room
        </button>
      </form>
    </div>
  );
};

export default BookRoom;
