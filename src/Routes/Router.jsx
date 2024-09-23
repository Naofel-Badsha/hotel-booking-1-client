import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Room from "../pages/Room/Room";
import MyBooking from "../pages/MyBooking/MyBooking";
import RoomDetails from "../pages/Room/RoomDetails";
import ErroePage from "../Components/ErrorPage/ErroePage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../pages/Contact/Contact";
import '../App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErroePage></ErroePage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/room",
        element: <PrivateRoute><Room></Room></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/rooms")
      },
      {
        path: "/roomDetails/:id",
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`),
      },
      {
        path: "/booking",
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>,
      },
      {
        path: "/contactUs",
        element: <Contact></Contact>,
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
]);

export default router;
