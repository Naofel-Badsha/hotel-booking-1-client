import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Room from "../pages/Room/Room";
import MyBooking from "../pages/MyBooking/MyBooking";
import RoomDetails from "../pages/Room/RoomDetails";
//import ErroePage from "../Components/ErrorPage/ErroePage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import AboutDetails from "./../pages/AboutDetails/AboutDetails";

import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import EventsDetails from "../pages/EventsDetails/EventsDetails";
import "../App.css";
import Facilities from "./../pages/Facilities/Facilities";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/DashboardPage/Dashboard/Dashboard";
import AllUsers from "../pages/DashboardPage/AllUsers/AllUsers";
import BookingRoom from './../pages/DashboardPage/BookingRoom/BookingRoom';
import AddRoom from './../pages/DashboardPage/AddRoom/AddRoom';
import ManageRoom from './../pages/DashboardPage/ManageRoom/ManageRoom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // errorElement: <ErroePage></ErroePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room",
        element: (
          <PrivateRoute>
            <Room></Room>
          </PrivateRoute>
        ),
      },
      {
        path: "/roomDetails/:id",
        element: (
          <PrivateRoute>
            <RoomDetails></RoomDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: "/contactUs",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutDetails",
        element: <AboutDetails></AboutDetails>,
      },
      {
        path: "/eventsDetails",
        element: <EventsDetails></EventsDetails>,
      },
      {
        path: "/facilities",
        element: <Facilities></Facilities>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "bookigRoom",
        element: <BookingRoom></BookingRoom>,
      },
      {
        path: "addRoom",
        element: <AddRoom></AddRoom>,
      },
      {
        path: "manageRoom",
        element: <ManageRoom></ManageRoom>,
      },
    ],
  },
]);

export default router;
