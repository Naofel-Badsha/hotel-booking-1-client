// import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  // const {user, logOut} = useContext(AuthContext);
  // const handelSingOut = () => {
  //   logOut()
  //   .then(res =>{
  //   console.log (res.user)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }

  // const navLink = (
  //   <>
  //     <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/">Home</NavLink></li>
  //     <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/room">Room</NavLink></li>
  //     <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/booking">Booking</NavLink></li>
  //     <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/contactUs">Contact</NavLink></li>
  //     <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="">Dashboard</NavLink></li>
  //   </>
  // );
  return (
    // <div className="navbar sticky inset-0 z-10 w-full rounded-none bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
    //   <nav className="drawer">
    //     <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
    //     <div className="drawer-content flex flex-col">
    //       {/*-------------Navbar-------------*/}
    //       <div className="w-full navbar">
    //         <div className="flex-none lg:hidden">
    //           <label
    //             htmlFor="my-drawer-3"
    //             aria-label="open sidebar"
    //             className="btn btn-square btn-ghost"
    //           >
    //         <i className="fa-solid fa-bars text-2xl hover:rotate-45"></i>
    //           </label>
    //         </div>
    //         <div className="flex-1 md:px-2 lg:px-2 mx-2">
    //           <img src='https://i.ibb.co/kSKR0x6/logo-preview.png' className="w-[80px] h-[70px]"/>
    //            <p className="font-bold text-2xl text-[#008080] hidden lg:block">7 Star</p>
    //         </div>
    //         <div className="flex-none hidden lg:block">
    //           <ul className="menu menu-horizontal gap-3">
    //             {/* Navbar menu content here */}
    //             {navLink}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="drawer-side z-50">
    //       <label
    //         htmlFor="my-drawer-3"
    //         aria-label="close sidebar"
    //         className="drawer-overlay">
    //         </label>
    //       <ul className="menu p-4 w-60 md:w-72 lg:w-80 min-h-full bg-base-200">
    //         {/*------Sidebar------content------here------*/}
    //         <NavLink className=''>{navLink}</NavLink>
    //       </ul>
    //     </div>
    //   </nav>
    //   {/*----------------*/}
    //   <img className="w-[40px] mr-2 rounded-full" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/Y79Vw8B/user.png" } />
    //   {
    //     user ?
    //     <button onClick={handelSingOut} className="btn text-xl text-white font-bold bg-[#008080] rounded-md border-0">Sing Out</button>
    //     :
    //     <Link to='login'>
    //     <button className="btn text-xl text-white bg-[#ff6347] font-bold rounded-md border-0">Login</button>
    //     </Link>
    //   }
    // </div>
    <div>
      <nav className="py-2 bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />

            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            {/* bg-gray-50 */}
            {/* md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              
              <li>
                <NavLink className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
               to="" >Home</NavLink>
              </li>

              
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
