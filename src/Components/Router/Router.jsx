import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../../App";
import Room_List from "../Pages/Room_List/Room_List";
import Add_Room from "../Pages/Add_Room/Add_Room";
import Booking_Summary from "../Pages/Booking_Summary/Booking_Summary";
import Home from "../Pages/Home/Home";
import EditRoom from "../Pages/Room_List/EditRoom";
import BookRoom from "../Pages/Room_List/BookRoom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route
          index
          loader={() => fetch("http://localhost:3000/rooms")}
          element={<Home />}
        ></Route>
        <Route path="/rooms" element={<Room_List />}></Route>
        <Route
          path="/rooms/edit_room/:id"
          loader={({ params }) =>
            fetch(`http://localhost:3000/rooms/${params.id}`)
          }
          element={<EditRoom />}
        ></Route>
        <Route
          path="/rooms/book_room/:id"
          loader={({ params }) =>
            fetch(`http://localhost:3000/rooms/${params.id}`)
          }
          element={<BookRoom />}
        ></Route>
        <Route path="/create-room" element={<Add_Room />}></Route>
        <Route
          path="/booking-summary"
          loader={() => fetch("http://localhost:3000/bookings")}
          element={<Booking_Summary />}
        ></Route>
      </Route>
    </>
  )
);

export default router;
