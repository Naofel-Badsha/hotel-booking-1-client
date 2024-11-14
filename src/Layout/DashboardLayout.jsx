import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className=" ">
      <div className="col-span-1">
        <Sidebar></Sidebar>
      </div>
      <div className="container m-auto ">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
