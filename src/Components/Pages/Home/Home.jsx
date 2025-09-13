import { MdBedroomParent } from "react-icons/md";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link, useLoaderData } from "react-router-dom";
import Homeitems from "./Homeitems";

const Home = () => {
  const roomData = useLoaderData();
  return (
    <section>
      <div className="hero bg-linear-to-r/decreasing from-indigo-500 to-teal-400 rounded-2xl mt-2 h-auto lg:h-[32rem] scroll-smooth transition-al">
        <div className="hero-content">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-[70%]  mt-2 lg:mt-0 text-center lg:text-left px-4">
              <motion.p
                initial={{ opacity: 0, y: 300 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="font-raleway text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white"
              >
                Welcome to Your Home Away From Home
              </motion.p>

              <Link to="/rooms">
                <motion.button
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, delay: 0.8 }}
                  className="bg-black text-white font-semibold px-4 py-2 rounded-[16px] cursor-pointer mt-4 sm:mt-6"
                >
                  View Room <MdBedroomParent className="inline ml-1" />
                </motion.button>
              </Link>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start mt-6 lg:mt-0 lg:ml-16">
              <motion.img
                animate={{ x: [0, 80, 0], y: [0, 10, 0] }}
                transition={{ duration: 10.1, repeat: Infinity }}
                src="/Image/img1.jpg"
                className="w-60 sm:w-72 md:w-80 rounded-xl border-4 border-t-blue-500 border-r-blue-500 shadow-2xl shadow-blue-200"
              />
              <motion.img
                animate={{ x: [0, 90, 0], y: [0, 10, 0] }}
                transition={{ duration: 10.5, delay: 3.4, repeat: Infinity }}
                src="/Image/img2.jpg"
                className="w-60 sm:w-72 md:w-80 mt-6 rounded-xl border-4 border-l-blue-500 border-b-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
      <Homeitems roomData={roomData} />
    </section>
  );
};

export default Home;
