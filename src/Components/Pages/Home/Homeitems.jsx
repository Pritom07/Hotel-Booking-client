import PropTypes from "prop-types";
import Item from "./Item";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Homeitems = ({ roomData }) => {
  const newroomData = roomData.slice(0, 6);
  return (
    <div className="min-h-screen">
      <p className="text-center font-semibold text-4xl mt-5">Room's Overview</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-screen lg:max-w-6xl mx-auto mt-4 px-2">
        {newroomData.map((room) => (
          <Item key={room._id} room={room} isShown={false} />
        ))}
      </div>
      <div className="flex justify-end max-w-7xl mt-4 pr-2">
        <Link to="/rooms">
          <button className="cursor-pointer text-blue-500 font-semibold text-[18px]">
            See More <FaArrowRight className="inline ml-1" />
          </button>
        </Link>
      </div>
      <div className="px-6 mt-6">
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold text-[22px]">
            How can I book a room?
          </div>
          <div className="collapse-content text-md">
            Go to the Rooms page, choose an available room, and click Book. Fill
            in your details (guest name, nights, check-in date) and confirm the
            booking.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[22px]">
            Can I edit or cancel my booking?
          </div>
          <div className="collapse-content text-md">
            Currently, bookings cannot be edited once confirmed. You may contact
            hotel staff to cancel or modify your booking.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[22px]">
            How do I know if a room is available?
          </div>
          <div className="collapse-content text-md">
            The Rooms list shows availability in real time. If a room is
            unavailable, the Book button will be disabled.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold text-[22px]">
            What payment methods are accepted?
          </div>
          <div className="collapse-content text-md">
            This demo system does not include online payments. In a real hotel
            system, you would pay by cash, credit card, or digital wallet at
            check-in.
          </div>
        </div>
      </div>
    </div>
  );
};

Homeitems.proptypes = {
  roomData: PropTypes.array.isRequired,
};

export default Homeitems;
