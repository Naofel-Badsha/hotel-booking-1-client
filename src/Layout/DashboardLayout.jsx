import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen">
      <Sidebar></Sidebar>

      <div className=" ">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
