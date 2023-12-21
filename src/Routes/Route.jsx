import {
    createBrowserRouter,
   } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Pages/Dashboard/Dashboard";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import CreateTask from "../Components/CreateTask";
   
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/dashboard',
          element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          loader: () => fetch('http://localhost:5000/task')
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/createtask',
          element: <CreateTask></CreateTask>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
   ]);
   