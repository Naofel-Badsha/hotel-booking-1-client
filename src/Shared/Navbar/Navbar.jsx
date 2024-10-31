import { useContext } from "react";
import { FaArrowDown, FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

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

  return (
    // className="py-2 bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"

    <div>
      <nav className="bg-[#008080ef] fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="container m-auto flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 "
          >
            <img
              src="https://i.ibb.co.com/FwKqGKf/557ab69f1697091550582.jpg"
              className="w-[70px] h-[70px] object-cover"
            />
            {/* <span className="font-bold text-2xl text-[#008080] hidden lg:block">
              7 Star
            </span> */}
          </a>

          <div className="flex gap-3 md:order-2 space-x-3 md:space-x-0 ">
            {/*----------------*/}
            <img
              className="w-[40px] h-[40px] mr-2 rounded-full"
              src={
                user?.photoURL
                  ? user.photoURL
                  : "https://i.ibb.co/Y79Vw8B/user.png"
              }
            />
            {user ? (
              <button
                onClick={handelSingOut}
                className="btn text-xl text-white font-bold bg-[#008080] rounded-md border-0"
              >
                Sing Out
              </button>
            ) : (
              <Link to="login">
                <button className="btn text-xl text-white bg-[#ff6347] font-bold rounded-md border-0">
                  Login
                </button>
              </Link>
            )}
            {/*-----------Bar-----Button---------*/}
            <button
              data-collapse-toggle="navbar-dropdown"
              type="button"
              className="inline-flex items-center  md:hidden"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
            >
              <FaBars className="text-4xl text-white"></FaBars>
            </button>
          </div>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   dark:border-gray-700">
              {/*---------Nav------1--------------*/}
              <li>
                <NavLink
                  className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-white text-xl font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blak md:p-0 md:w-auto dark:text-white md:dark:hover:text-black dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Dropdown <FaArrowDown className="text-xl" />
                </button>

                {/* <!------------Dropdown menu------------> */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden  divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="p-4  bg-[#008080ef]  text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    {/*---------Nav------2--------------*/}
                    <li className="py-2">
                      <NavLink
                        className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                        to=""
                      >
                        DashBoard
                      </NavLink>
                    </li>
                    {/*---------Nav------3--------------*/}
                    <li className="py-2">
                      <NavLink
                        className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                        to=""
                      >
                        Facilities
                      </NavLink>
                    </li>
                    {/*---------Nav------4--------------*/}
                    <li className="py-2">
                      <NavLink
                        className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                        to="/booking"
                      >
                        Booking
                      </NavLink>
                    </li>
                    {/*---------Nav------5--------------*/}
                    <li className="py-2">
                      <NavLink
                        className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                        to=""
                      >
                        Events
                      </NavLink>
                    </li>
                    {/* <li>
                      <NavLink
                        className="block text-xl py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 font-bold dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        to="/booking"
                      >
                        Booking
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
                {/* <!------------Dropdown menu------------> */}
              </li>
             {/*---------Nav------6--------------*/}
              <li>
                <NavLink
                  className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                  to=""
                >
                  about
                </NavLink>
              </li>
            {/*---------Nav------7--------------*/}
              <li>
                <NavLink
                  className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                  to="/room"
                >
                  Room
                </NavLink>
              </li>
            {/*---------Nav------8--------------*/}
              <li>
                <NavLink
                  className="block text-xl py-2 px-3 text-white rounded  md:hover:bg-transparent hover:text-black md:p-0 md:dark:hover:text-black font-bold   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
                  to="/contactUs"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
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
