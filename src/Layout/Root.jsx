import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import NavbarTow from "../Shared/Navbar/NavbarTow";



const Root = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <NavbarTow></NavbarTow>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;