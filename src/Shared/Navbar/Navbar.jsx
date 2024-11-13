import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelSingOut = () => {
    logOut()
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);

  return (
    <nav className="bg-white border-b-2 shadow-xl fixed w-full z-50 top-0 py-6">
      <div className="">
        <div className="flex items-center justify-between">
          {/*------Logo------*/}
          <div className="">
            <img
              src="https://i.ibb.co.com/5j6R51X/7-Star-Logo.png"
              className="w-[50px] h-[50px] object-cover"
            />
          </div>
          {/*-----Horizantal-----Navitems-------*/}
          <ul className="hidden items-center justify-between gap-6 lg:flex">
            {/*---------Nav------1--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                to="/"
              >
                Home
              </NavLink>
            </li>
            {/*---------Nav------3--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                to="/facilities"
              >
                Facilities
              </NavLink>
            </li>
            {/*---------Nav------4--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                to="/booking"
              >
                Booking
              </NavLink>
            </li>
            {/*---------Nav------5--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                to="/eventsDetails"
              >
                Events
              </NavLink>
            </li>
            {/*---------Nav------6--------------*/}
            <li>
              <NavLink
                to="/aboutDetails"
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
              >
                about
              </NavLink>
            </li>
            {/*---------Nav------7--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                to="/room"
              >
                Rooms
              </NavLink>
            </li>
            {/*---------Nav------8--------------*/}
            <li>
              <NavLink
                className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                to="/contactUs"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center gap-3">
            {/*--------Profile---Lonin---Singin----Dashboard-----*/}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="w-[40px] h-[40px] rounded-full"
                    src={
                      user?.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/Y79Vw8B/user.png"
                    }
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 px-2 py-4 shadow"
              >
                <div>
                  {user ? (
                    <div>
                      <li className="py-1 mt-2">
                        <Link
                          className="text-xl text-black hover:bg-blue-gray-100  hover:text-[#008080ef]"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li className="py-1 mt-2">
                        <Link
                          onClick={handelSingOut}
                          className="text-xl text-black hover:bg-blue-gray-100  hover:text-[#008080ef]"
                        >
                          Log Out
                        </Link>
                      </li>
                    </div>
                  ) : (
                    <div>
                      <li className="py-1 mt-2">
                        <Link
                          to="login"
                          className="text-xl text-black hover:bg-blue-gray-100  hover:text-[#008080ef]"
                        >
                          Login
                        </Link>
                      </li>

                      <li className="py-1 mt-2">
                        <Link
                          to="register"
                          className="text-xl text-black hover:bg-blue-gray-100  hover:text-[#008080ef]"
                        >
                          Sing Up
                        </Link>
                      </li>
                    </div>
                  )}
                </div>
              </ul>
            </div>

            {/*---------Bar-----And----Left---Sidebar------*/}
            <div
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className="relative flex transition-transform lg:hidden"
            >
              <FaBars className="text-3xl text-[#008080ef] cursor-pointer"></FaBars>
              {dropDownState && (
                <ul className="z-10 gap-2 bg-[#393E46] absolute right-0 px-5 w-[300px] h-[100vh] top-[67px] flex flex-col">
                  {/*---------Nav------1--------------*/}
                  <li className="mt-10 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  {/*---------Nav------2--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/dashboard"
                    >
                      DashBoard
                    </NavLink>
                  </li>
                  {/*---------Nav------3--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/facilities"
                    >
                      Facilities
                    </NavLink>
                  </li>
                  {/*---------Nav------4--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/booking"
                    >
                      Booking
                    </NavLink>
                  </li>
                  {/*---------Nav------5--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/eventsDetails"
                    >
                      Events
                    </NavLink>
                  </li>
                  {/*---------Nav------6--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      to="/aboutDetails"
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                    >
                      about
                    </NavLink>
                  </li>
                  {/*---------Nav------7--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/room"
                    >
                      Rooms
                    </NavLink>
                  </li>
                  {/*---------Nav------8--------------*/}
                  <li className="mt-5 text-center">
                    <NavLink
                      className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                      to="/contactUs"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
