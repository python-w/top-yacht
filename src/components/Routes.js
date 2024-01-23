import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import ClubSetup from '../pages/ClubSetup';
import CustomDrawer from "../components/Navigation/CustomDrawer";

const topYachtRouter = createBrowserRouter([
  {
    path: "/",
    element: <CustomDrawer />,
    children: [
      {
        path: "club-setup-edit-view",
        element: <ClubSetup />,
      },
      {
        path: "race-session",
        element: <ClubSetup />,
      },
    ],
  },
]);


export default topYachtRouter;