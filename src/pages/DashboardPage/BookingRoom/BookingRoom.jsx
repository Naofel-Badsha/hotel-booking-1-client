import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
const BookingRoom = () => {
  const [bookingRooms, setBookingsRooms] = useState([]);
  useEffect(() => {
    fetch("/bookingRoom.json")
      .then((res) => res.json())
      .then((data) => setBookingsRooms(data));
  }, []);

  return (
    <div>
      {/*----------Heading-----------*/}
      <h1 className="text-2xl md:text-3xl lg:text-4xl my-4 text-black font-bold">
        Booking Room
      </h1>
      <hr />

      {/*---------------Table------------*/}
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="text-xl text-[#008080ef] font-bold">Id</th>
              <th className="text-xl text-[#008080ef] font-bold">Name</th>
              <th className="text-xl text-[#008080ef] font-bold">Image</th>
              <th className="text-xl text-[#008080ef] font-bold">Email</th>
              <th className="text-xl text-[#008080ef] font-bold">
                Transaction Id
              </th>
              <th className="text-xl text-[#008080ef] font-bold">Sart Date</th>
              <th className="text-xl text-[#008080ef] font-bold">End Date</th>
              <th className="text-xl text-[#008080ef] font-bold">Status</th>
              <th className="text-xl text-[#008080ef] font-bold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookingRooms.map((bookingRoom, index) => (
              <tr key={bookingRoom.id}>
                <th className="text-lg text-blue-gray-800">{index + 1}</th>
                <td className="text-lg text-blue-gray-800">
                  {bookingRoom.name}
                </td>
                <td>
                  <img
                    src={bookingRoom.image}
                    className="w-24 h-16 rounded-md"
                  />
                </td>
                <td className="text-lg text-blue-gray-800">
                  {bookingRoom.email}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {bookingRoom.transactionId}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {bookingRoom.startDate}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {bookingRoom.endDate}
                </td>
                <td>
                  <button className="btn bg-[#008080ef] hover:bg-black border-0">
                    <GiConfirmed className="text-3xl text-white" />
                  </button>
                </td>
                <td>
                  <button className="btn bg-deep-orange-800 hover:bg-black border-0">
                    <MdDeleteForever className="text-3xl text-white" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRoom;
