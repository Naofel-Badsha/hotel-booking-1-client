import { Link, NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaBars, FaUsers } from "react-icons/fa";
import { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { MdBathroom } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";

const Sidebar = () => {
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isOpen, SetIsOpen] = useState(false);

  const handelToggle = () => {
    SetIsOpen(!isOpen);
  };

  return (
    <div>
      {/*-------Small-------Screen-------Navbar-------*/}
      <div className="bg-gray-100  text-gray-800 fixed z-40 top-0 left-0 right-0 ">
        <div className="flex justify-between w-full container m-auto">
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                src="https://i.ibb.co.com/5j6R51X/7-Star-Logo.png"
                className="w-[50px] h-[50px] "
              />
            </Link>
          </div>

          <div className="flex gap-4 items-center ">
            {/*------------Profile-----&----Notification---------*/}
            <div>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="https://i.ibb.co.com/nL5nB17/test-1.jpg"
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />

                <div
                  tabIndex={0}
                  role="button"
                  className="btn bg-blue-gray-50 border-0 btn-circle hover:bg-blue-gray-100"
                >
                  <div className="indicator">
                    <MdNotificationsActive className="text-3xl text-deep-orange-700" />
                    <span className="badge text-lg w-6 h-6 text-white bg-blue-700 border-0 indicator-item">
                      8
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*--------Responsive---Sideber---Toggle---Bar---button----*/}
            <button
              onClick={handelToggle}
              className="mobile-menu-button lg:hidden p-4 text-red-600 "
            >
              <FaBars className="h-8 w-8" />
            </button>
          </div>
        </div>

        {/*------------Sidebar------------*/}
        <div
          className={`z-10  bg-gray-300 py-4 min-h-screen w-64 mt-16 absolute inset-y-0 left-0 transform ${
            isOpen && "-translate-x-full"
          }  lg:translate-x-0  transition duration-200 ease-in-out bg-cyan-500`}
        >
          {/*----------NavLink--------1-------*/}
          <NavLink
            to="/dashboard"
            end
            className="flex items-center border-2 text-xl text-gray-900 py-2 mt-3 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <MdDashboardCustomize className="text-2xl ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Dashboard</span>
          </NavLink>
          {/*----------NavLink--------2-------*/}
          <NavLink
            to="/dashboard/allUsers"
            end
            className="flex items-center border-2 text-xl text-gray-900 py-2 mt-3 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FaUsers className="text-2xl ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">All Users</span>
          </NavLink>
          {/*----------NavLink--------3-------*/}
          <NavLink
            to="/dashboard/bookigRoom"
            end
            className="flex items-center border-2 text-xl text-gray-900 py-2 mt-3 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <MdBathroom className="text-2xl ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Booking Room</span>
          </NavLink>
          {/*----------NavLink--------4-------*/}
          <NavLink
            to="/dashboard/addRoom"
            end
            className="flex items-center border-2 text-xl text-gray-900 py-2 mt-3 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <FaAddressBook className="text-2xl ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Add Room</span>
          </NavLink>
          {/*----------NavLink--------5-------*/}
          <NavLink
            to="/dashboard/manageRoom"
            end
            className="flex items-center border-2 text-xl text-gray-900 py-2 mt-3 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <MdManageHistory className="text-2xl ml-3 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
            <span className="ms-3">Manage Room</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
