import { CiLogin } from "react-icons/ci";
import { FaBars,  FaFileImport, FaUsers } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdDashboardCustomize } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      {/*--------Drawer----init----and----show--------*/}
      <div className="flex items-center justify-end p-5">
        {/*-----------Bars------Icon----------*/}
        <button 
          className="text-white"
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <FaBars className="text-3xl text-[#008080] "/>
        </button>
      </div>

      {/*-----------Drawer--------Component-----------*/}
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
        // tabindex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-2xl text-white uppercase"
        >
          Menu
        </h5>

        {/*-----------Close------Icon----------*/}
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <IoMdClose className="text-2xl"/>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {/*-------------Li----------1-------------*/}
            <li>
              <NavLink
                to="/dashboard"
                end
                className="flex items-center text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboardCustomize className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>

            {/*-------------Li----------2-------------*/}
            <li>
              <NavLink
                to="/dashboard/allUsers"
                className="flex items-center text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUsers className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">All Users</span>
              </NavLink>
            </li>

            {/*-------------Li----------3-------------*/}
            <li>
              <NavLink
                to=""
                className="flex items-center text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiLogin className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Log Out</span>
              </NavLink>
            </li>

            {/*-------------Li----------4-------------*/}
            <li>
              <NavLink
                to=""
                className="flex items-center text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiLogin className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Log Out</span>
              </NavLink>
            </li>
            {/*-------------Li----------5-------------*/}
            <li>
              <NavLink
                to=""
                className="flex items-center text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaFileImport className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Sing In</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
