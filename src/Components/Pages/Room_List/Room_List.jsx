import axios from "axios";
import Item from "../Home/Item";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const Room_List = () => {
  const [roomData, setRoomData] = useState([]);
  const [count, setcount] = useState(0);
  const [itemsPerPage, setitemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const [visible, setvisible] = useState(false);

  const totPage = Math.ceil(count / itemsPerPage);
  const pagesArray = [...Array(totPage).keys()];

  const handlePrevButton = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextButton = () => {
    if (currentPage < pagesArray.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPage = (e) => {
    const intVal = parseInt(e.target.value);
    setitemsPerPage(intVal);
    setCurrentPage(0);
  };

  useEffect(() => {
    axios
      .get(
        `https://hotel-server-seven.vercel.app/rooms?page=${currentPage}&size=${itemsPerPage}`
      )
      .then((res) => setRoomData(res.data));
  }, [currentPage, itemsPerPage]);

  useEffect(() => {
    axios
      .get("https://hotel-server-seven.vercel.app/totDocument")
      .then((res) => setcount(res.data));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setvisible(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="font-raleway">
      <p className="text-center font-semibold text-4xl mt-4 underline">
        ALL ROOMS
      </p>

      <div>
        {visible ? (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-6xl mx-auto mt-5 px-2">
              {roomData.map((room) => (
                <Item
                  key={room._id}
                  room={room}
                  isShown={true}
                  roomData={roomData}
                  setRoomData={setRoomData}
                />
              ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center mt-10 px-1.5">
              <div className="flex justify-center items-center">
                <button
                  onClick={handlePrevButton}
                  className="bg-blue-500 text-white px-2 py-2 font-semibold rounded-[15px] cursor-pointer"
                >
                  <MdArrowBackIos className="inline mr-1" /> Prev
                </button>
                <div>
                  {pagesArray.map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`rounded-full  ml-3 px-3 py-2 font-semibold text-[18px] cursor-pointer ${
                        page === currentPage ? "bg-amber-400" : "bg-slate-300"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleNextButton}
                  className="ml-3 bg-blue-500 text-white px-2 py-2 font-semibold rounded-[15px] cursor-pointer"
                >
                  Next <MdArrowForwardIos className="inline mr-1" />
                </button>
              </div>

              <div className="mt-4 lg:mt-0">
                <select
                  onChange={handleItemsPerPage}
                  className="border-2 border-slate-500 ml-10 px-3 py-2 font-semibold rounded-[10px]"
                >
                  <option selected disabled>
                    Select No. of Items
                  </option>
                  <option value="6">6</option>
                  <option value="8">8</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
          </section>
        ) : (
          <div className="flex justify-center items-center min-h-screen">
            <PulseLoader color="#1E88E5" size={18} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Room_List;
