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
        <Route path="/create-room" element={<Add_Room />}></Route>
        <Route path="/booking-summary" element={<Booking_Summary />}></Route>
      </Route>
    </>
  )
);

export default router;
