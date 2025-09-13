import axios from "axios";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const BookingInfoTable = ({ bookedData, idx }) => {
  const { roomId, nights, guestName, checkInData } = bookedData;
  const [roomData, setRoomData] = useState({});
  const { type, roomNo, pricePerNight, beds } = roomData;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/rooms/${roomId}`)
      .then((res) => setRoomData(res.data));
  }, [roomId]);

  return (
    <tr className="border-2 border-slate-200">
      <th>{idx + 1}</th>
      <th>{roomId}</th>
      <td>{roomNo}</td>
      <td>{guestName}</td>
      <td>{type}</td>
      <td>{pricePerNight}</td>
      <td>{beds}</td>
      <td>{nights}</td>
      <td>{checkInData}</td>
    </tr>
  );
};

BookingInfoTable.propTypes = {
  roomData: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default BookingInfoTable;
