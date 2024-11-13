import {
  IconButton,
  List,
  ListItem,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";
import { MdNotificationsActive } from "react-icons/md";
import { MdBathroom } from "react-icons/md";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div>
      {/*--------Open------Button------*/}
      <div className="flex items-center justify-center">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      </div>
      <hr />
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div>
            {/*--------Hotel-----Logo-&-Name-------*/}
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://i.ibb.co.com/nL5nB17/test-1.jpg"
                className="w-[70px] h-[70px] rounded-full object-cover"
              />

              <div className="dropdown dropdown-end">
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
            <h6 className="text-center mt-3 text-lg text-black">Naofel Badsha</h6>
          </div>

          <List>
            <hr className="my-2 border-blue-gray-50" />
            {/*---------------NavLink--------1-------*/}
            <ListItem>
              <NavLink
                to="/dashboard"
                end
                className="flex items-center text-xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboardCustomize className=" text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </ListItem>

            {/*---------------NavLink--------2-------*/}
            <ListItem className="">
              <NavLink
                to="/dashboard/allUsers"
                end
                className="flex items-center text-xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUsers className="text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">All Users</span>
              </NavLink>
            </ListItem>

            {/*---------------NavLink--------3-------*/}
            <ListItem>
              <NavLink
                to="/dashboard/bookigRoom"
                end
                className="flex items-center text-xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdBathroom className=" text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Booking Room</span>
              </NavLink>
            </ListItem>

            {/*---------------NavLink--------4-------*/}
            <ListItem>
              <NavLink
                to="/dashboard"
                end
                className="flex items-center text-2xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MdDashboardCustomize className=" text-3xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </div>
  );
};

export default Sidebar;
