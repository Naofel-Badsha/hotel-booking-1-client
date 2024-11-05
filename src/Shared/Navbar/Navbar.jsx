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
    <nav className="bg-white border-2 fixed w-full z-50 top-0 start-0 flex items-center justify-between  py-4 text-[#393E46]">
      <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        {/*------Logo------*/}
        <div>
          <img
            src="https://i.ibb.co.com/5j6R51X/7-Star-Logo.png"
            className="w-[50px] h-[50px] object-cover"
          />
        </div>
      </div>
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
        {/*---------Nav------2--------------*/}
        <li>
          <NavLink
            className="block text-xl py-2 px-3 text-[#008080ef] rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
            to="/dashboard"
          >
            DashBoard
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
      {/*-----------Profile-------------------*/}
      {/* lg:order-3 */}
      <div className="flex gap-3 md:justify-end ">
        {/*----------------*/}
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={
            user?.photoURL ? user.photoURL : "https://i.ibb.co/Y79Vw8B/user.png"
          }
        />
        {user ? (
          <button
            onClick={handelSingOut}
            className="btn md:text-xl lg:text-xl text-white font-bold bg-sky-500 rounded-md border-0"
          >
            Log Out
          </button>
        ) : (
          <Link to="login">
            <button className="btn md:text-xl lg:text-xl text-white bg-[#ff6347] font-bold rounded-md border-0">
              Login
            </button>
          </Link>
        )}
      </div>

      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform lg:hidden"
      >
        <FaBars className="text-3xl text-[#008080ef] cursor-pointer"></FaBars>
        {dropDownState && (
          <ul className="z-10 gap-2 bg-[#393E46] absolute right-0  px-5 w-[300px] h-[100vh] top-16 flex flex-col">
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
    </nav>
  );
};

export default Navbar;
{
  /* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="/">Home</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="" >about</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="" >servives</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="/room">Room</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="/booking">Booking</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="/contactUs">Contact</NavLink>
</li>
<li>
  <NavLink className="block text-xl py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
 to="">DashBoard</NavLink>
</li>

</ul> */
}
