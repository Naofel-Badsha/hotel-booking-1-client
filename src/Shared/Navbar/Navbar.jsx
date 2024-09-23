

import { useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handelSingOut = () => {
    logOut()
    .then(res =>{
    console.log (res.user)
    })
    .catch(error => {
      console.log(error)
    })
  }
  const navLink = (
    <>
      <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/">Home</NavLink></li>
      <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/room">Room</NavLink></li>
      <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/booking">Booking</NavLink></li>
      <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="/contactUs">Contact</NavLink></li>
      <li className="py-3 text-[18px]"><NavLink className="border-2 border-[#008080] text-black" to="">Dashboard</NavLink></li>
    </>
  );
  return (
    <div className="navbar sticky inset-0 z-10 w-full rounded-none bg-opacity-30  text-black shadow-md backdrop-blur-2xl backdrop-saturate-200 ">
      <nav className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/*-------------Navbar-------------*/}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
            <i className="fa-solid fa-bars text-2xl hover:rotate-45"></i>
              </label>
            </div>
            <div className="flex-1 md:px-2 lg:px-2 mx-2">
              <img src='https://i.ibb.co/kSKR0x6/logo-preview.png' className="w-[80px] h-[70px]"/>
               <p className="font-bold text-2xl text-[#008080] hidden lg:block">7 Star</p>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal gap-3">
                {/* Navbar menu content here */}
                {navLink}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay">
            </label>
          <ul className="menu p-4 w-60 md:w-72 lg:w-80 min-h-full bg-base-200">
            {/*------Sidebar------content------here------*/}
            <NavLink className=''>{navLink}</NavLink>
          </ul>
        </div>
      </nav>
      {/*----------------*/}
      <img className="w-[40px] mr-2 rounded-full" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/Y79Vw8B/user.png" } />
      {
        user ?
        <button onClick={handelSingOut} className="btn text-xl text-white font-bold bg-[#008080] rounded-md border-0">Sing Out</button>
        :
        <Link to='login'>
        <button className="btn text-xl text-white bg-[#ff6347] font-bold rounded-md border-0">Login</button>
        </Link>
      }
    </div>
  );
};

export default Navbar;
