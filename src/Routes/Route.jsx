import {
    createBrowserRouter,
   } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
   
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>
    },
   ]);
   