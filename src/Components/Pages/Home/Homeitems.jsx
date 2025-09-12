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
      <div className="flex justify-end max-w-7xl mt-4">
        <Link to="/rooms">
          <button className="cursor-pointer text-blue-500 font-semibold text-[18px]">
            See More <FaArrowRight className="inline ml-1" />
          </button>
        </Link>
      </div>
    </div>
  );
};

Homeitems.proptypes = {
  roomData: PropTypes.array.isRequired,
};

export default Homeitems;
