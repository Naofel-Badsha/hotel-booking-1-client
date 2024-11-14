import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const ManageRoom = () => {
  const [manageRooms, SetManageRooms] = useState([]);
  useEffect(() => {
    fetch("/manageRooms.json")
      .then((res) => res.json())
      .then((data) => SetManageRooms(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl my-4 text-black font-bold">
        Manage Room
      </h1>
      <hr />

      {/*---------------Table------------*/}
      <div className="overflow-x-auto">
        <table className="table ">
          <thead>
            <tr>
              <th className="text-xl text-[#008080ef] font-bold">Id</th>
              <th className="text-xl text-[#008080ef] font-bold">Image</th>
              <th className="text-xl text-[#008080ef] font-bold">Location</th>
              <th className="text-xl text-[#008080ef] font-bold">Count</th>
              <th className="text-xl text-[#008080ef] font-bold">Price</th>
              <th className="text-xl text-[#008080ef] font-bold">Size</th>
              <th className="text-xl text-[#008080ef] font-bold">Type</th>
              <th className="text-xl text-[#008080ef] font-bold">availavle</th>
              <th className="text-xl text-[#008080ef] font-bold">Discount</th>
              <th className="text-xl text-[#008080ef] font-bold">Status</th>
              <th className="text-xl text-[#008080ef] font-bold">Category</th>
              <th className="text-xl text-[#008080ef] font-bold">Bed Room</th>
              <th className="text-xl text-[#008080ef] font-bold">Bath Room</th>
              <th className="text-xl text-[#008080ef] font-bold">Rating</th>
              <th className="text-xl text-[#008080ef] font-bold">Update</th>
              <th className="text-xl text-[#008080ef] font-bold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {manageRooms.map((manageRoom, index) => (
              <tr key={manageRoom.id}>
                <th className="text-lg text-blue-gray-800">{index + 1}</th>
                <td>
                  <img
                    src={manageRoom.image}
                    className="w-24 h-16 rounded-md"
                  />
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.location}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.count}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.room_price}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.room_size}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.room_type}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.avel_room}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.discount}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.room_status}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.category}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.bed_room}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.bathroom}
                </td>
                <td className="text-lg text-blue-gray-800">
                  {manageRoom.rating}
                </td>
                <td>
                  <button className="btn bg-[#008080ef] hover:bg-black border-0">
                    <FaEdit className="text-3xl text-white" />
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

export default ManageRoom;
