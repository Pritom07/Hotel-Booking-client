import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-base-300 text-black py-12 rounded-t-xl mt-10 font-bebas px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center md:text-left px-5">
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400">
          About
        </p>
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400">
          Blog
        </p>
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400">
          Jobs
        </p>
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400">
          Press
        </p>
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400">
          Accessibility
        </p>
        <p className="cursor-pointer text-[18px] font-semibold hover:underline hover:text-blue-400 pl-10">
          Partners
        </p>
      </div>

      <div className="divider md:hidden bg-black rounded-xl mt-8"></div>

      <div className="grid grid-cols-3 sm:grid-cols-5 gap-14 mt-8">
        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500 transition" />
        <BsInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
        <RiTwitterXFill className="text-2xl cursor-pointer hover:text-gray-300 transition" />
        <FaGithub className="text-2xl cursor-pointer hover:text-gray-400 transition" />
        <FaYoutube className="text-2xl cursor-pointer hover:text-red-500 transition" />
      </div>

      <div className="divider md:hidden bg-black rounded-xl mt-8"></div>

      <p className="mt-8 font-medium text-center text-sm sm:text-base">
        <MdOutlineCopyright className="inline mr-1" />
        2025 , PRITOM MOHAJON, NSTU . ALL RIGHTS RESERVED
      </p>
    </section>
  );
};

export default Footer;
