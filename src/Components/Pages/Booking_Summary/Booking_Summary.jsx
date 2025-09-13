import { useLoaderData } from "react-router-dom";
import BookingInfoTable from "./BookingInfoTable";

const Booking_Summary = () => {
  const bookRoomData = useLoaderData();

  return (
    <div className="font-raleway mt-4">
      <p className="text-center text-3xl md:text-4xl font-semibold underline text-[#374151]">
        Booking summary
      </p>

      <div>
        {bookRoomData.length !== 0 ? (
          <section className="overflow-x-auto rounded-box border-2 border-slate-300 bg-base-100 mt-5 mx-2 lg:mx-4">
            <table className="table">
              <thead>
                <tr className="border-2 border-slate-200">
                  <th>Serial No</th>
                  <th>Room ID</th>
                  <th>Room No</th>
                  <th>Guest name</th>
                  <th>Type</th>
                  <th>Price/Night ($)</th>
                  <th>No. Of Beds</th>
                  <th>Total Nights</th>
                  <th>check-In Data</th>
                </tr>
              </thead>
              <tbody>
                {bookRoomData.map((bookedData, idx) => (
                  <BookingInfoTable
                    key={bookedData._id}
                    bookedData={bookedData}
                    idx={idx}
                  />
                ))}
              </tbody>
            </table>
          </section>
        ) : (
          <div className="flex justify-center items-center min-h-screen -mt-10">
            <img src="/Image/view.jpg" className="w-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking_Summary;
