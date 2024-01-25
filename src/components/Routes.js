import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import ClubSetupEditDetails from '../pages/Setup/ClubSetup/EditDetails';
import CustomDrawer from "../components/Navigation/CustomDrawer";
import ClubSetupViewDetails from "../pages/Setup/ClubSetup/ViewDetails";

const topYachtRouter = createBrowserRouter([
  {
    path: "/",
    element: <CustomDrawer />,
    children: [
      {
        path: "club-setup-edit-details",
        element: <ClubSetupEditDetails />,
      },
      {
        path: "club-setup-view-details",
        element: <ClubSetupViewDetails />,
      },
      {
        path: "race-session",
        element: <ClubSetupEditDetails />,
      },
    ],
  },
]);


export default topYachtRouter;