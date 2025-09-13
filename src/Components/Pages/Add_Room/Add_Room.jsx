import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const Add_Room = () => {
  const [roomType, setroomType] = useState(" ");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const Data = Object.fromEntries(formData.entries());
    const roomNo = parseInt(Data.roomno);
    const pricePerNight = parseInt(Data.price);
    const beds = parseInt(Data.Beds);
    const type = roomType;
    const description = Data.Description;
    let available;
    if (e.target.availableCheck.checked) {
      available = true;
    } else {
      available = false;
    }
    const roomData = {
      roomNo,
      pricePerNight,
      beds,
      type,
      available,
      description,
    };

    axios
      .post("https://hotel-server-seven.vercel.app/rooms", roomData)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Room Added Successfully!",
            text: "Click ok to proceed",
            confirmButtonColor: "#1E88E5",
            icon: "success",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-5xl mx-auto mt-5 font-raleway">
        <h1 className="text-4xl font-semibold underline text-[#374151]">
          Create New Room
        </h1>
        <p className="text-[18px] text-[#1B1A1A] text-justify md:text-center mt-3.5 px-1.5">
          Unveil your space's unique story. Here, you can craft the perfect
          guest experience by defining your room's charm—be it a cozy suite, a
          premium villa, or a room with a breathtaking view. Showcase its
          personality with captivating photos, inviting amenities, and details
          that turn a simple listing into an irresistible escape.
        </p>
      </div>
      <form
        onSubmit={handleFormSubmit}
        className="max-w-5xl mx-auto mt-6 px-1.5"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Room No
            </label>
            <input
              type="number"
              name="roomno"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Room No."
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Type
            </label>
            <div className="mt-0.5">
              <select
                onChange={(e) => setroomType(e.target.value)}
                className="border-2 border-slate-200 w-full py-1.5 rounded-[8px]"
              >
                <option selected disabled>
                  Select Room Type
                </option>
                <option value="Standard">Standard</option>
                <option value="Delux">Deluxe</option>
                <option value="Suit">Suit</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 mt-3">
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Beds
            </label>
            <input
              type="number"
              name="Beds"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter No. Of Beds"
              required
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Price Per Night ($)
            </label>
            <input
              type="number"
              name="price"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Pricr/Night eg-100/50/20 etc."
              required
            />
          </div>
        </div>
        <div className="mt-3">
          <div className="w-full">
            <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
              Description
            </label>
            <input
              type="text"
              name="Description"
              className="input w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-[17px]"
              placeholder="Write a short description about room"
              required
            />
          </div>
        </div>
        <div className="w-full mt-3">
          <label className="font-railway font-semibold text-xl text-[#1B1A1A]">
            Available
          </label>
          <input
            type="checkbox"
            defaultChecked={true}
            name="availableCheck"
            className="ml-2"
          />
        </div>
        <button className="bg-blue-500 text-2xl font-raleway font-semibold active:scale-x-95 text-white border-2 border-blue-500 w-full p-1.5 mt-6 rounded-[4px] cursor-pointer">
          Create Room
        </button>
      </form>
    </div>
  );
};

export default Add_Room;
