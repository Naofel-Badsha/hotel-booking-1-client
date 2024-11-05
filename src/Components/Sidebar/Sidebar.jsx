import {
  IconButton,
  List,
  ListItem,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";

const Sidebar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div>
      {/*--------Open------Button------*/}
      <div className="flex items-center justify-end">
        <IconButton variant="text" size="lg" onClick={openDrawer}>
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      </div>

      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          {/*--------Hotel-----Logo-&-Name-------*/}
          <div className="mb-2 flex items-center gap-4 p-4">
            <img
              src="https://i.ibb.co.com/5j6R51X/7-Star-Logo.png"
              className="w-[40px] h-[40px] object-cover"
            />
            {/*-----------Hotel------Name------*/}
            <h2 className="text-3xl font-bold">Hotel...</h2>
          </div>

          {/*----------Search------Bar-----*/}
          <div className="p-2">
            <Input
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              label="Search"
            />
          </div>

          <List>
            <hr className="my-2 border-blue-gray-50" />
            {/*---------------NavLink--------1-------*/}
            <ListItem>
              <NavLink
                to="/dashboard"
                end
                className="flex items-center text-2xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
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
                className="flex items-center text-2xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaUsers className="text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">All Users</span>
              </NavLink>
            </ListItem>

            {/*---------------NavLink--------3-------*/}
            <ListItem>
              <NavLink
                to="/dashboard"
                end
                className="flex items-center text-2xl text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CiLogin className=" text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
                <span className="ms-3">Log Out</span>
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
