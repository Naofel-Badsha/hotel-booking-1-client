import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl my-4 text-black font-bold">
        All Users
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
              <th className="text-xl text-[#008080ef] font-bold">Login Date</th>
              <th className="text-xl text-[#008080ef] font-bold">Location</th>
              <th className="text-xl text-[#008080ef] font-bold">Role</th>
              <th className="text-xl text-[#008080ef] font-bold">Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th className="text-lg text-blue-gray-800">{index + 1}</th>
                <td className="text-lg text-blue-gray-800">{user.name}</td>
                <td>
                  <img src={user.image} className="w-12 h-12 rounded-full" />
                </td>
                <td className="text-lg text-blue-gray-800">{user.email}</td>
                <td className="text-lg text-blue-gray-800">{user.loginDate}</td>
                <td className="text-lg text-blue-gray-800">{user.location}</td>
                <td>
                  <button className="btn bg-[#008080ef] hover:bg-black border-0">
                    <FaUsers className="text-3xl text-white" />
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

export default AllUsers;
