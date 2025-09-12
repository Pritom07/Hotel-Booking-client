import { NavLink } from "react-router-dom";
import { FaRestroom } from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { useState } from "react";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const navItems = (
    <>
      <li className="text-[17px] font-semibold">
        <NavLink to="/">
          <IoHome className="inline mr-1" />
          Home
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/rooms">
          <FaRestroom className="inline mr-1" />
          Room List
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/create-room">
          <MdMeetingRoom className="inline mr-1" />
          Add Room
        </NavLink>
      </li>
      <li className="text-[17px] font-semibold">
        <NavLink to="/booking-summary">
          <TbBrandBooking className="inline mr-1" />
          Booking Summary
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-blue-300 h-20 -mt-1 sticky top-0 z-50">
      <section className="flex justify-between items-center px-4 md:px-10 h-full">
        <div className="flex">
          <img src="/Image/hotelicon.png" className="w-10" />
          <a className="btn btn-ghost text-xl md:text-2xl">
            Hotel Booking System
          </a>
        </div>

        <div className="hidden lg:block">
          <ul className="flex flex-row justify-between items-center gap-8 cursor-pointer">
            {navItems}
          </ul>
        </div>

        <div>
          <div className="lg:hidden">
            <Hamburger duration={1.1} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </section>

      <div
        className={`lg:hidden mt-2 px-4 absolute left-0 w-full z-10 transition-all duration-900 ease-in-out ${
          isOpen ? "top-[90px] opacity-100" : "top-[-400px] opacity-0"
        }`}
      >
        <div className="bg-blue-100 rounded-xl">
          <ul className="flex flex-col gap-4 p-4 shadow-lg cursor-pointer mt-1">
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
