import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import CustomDrawer from "../components/Navigation/CustomDrawer";
import ClubSetup from '../pages/ClubSetup'
import RaceSession from "../pages/RaceSession";

const topYachtRouter = createBrowserRouter([
  {
    path: "/",
    element: <CustomDrawer />,
    children: [
      {
        path: "/race-session",
        element: <RaceSession />,
      },
      {
        path: "/club-setup",
        element: <ClubSetup />,
      },
    ],
  },
]);


export default topYachtRouter;