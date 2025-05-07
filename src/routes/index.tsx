import { type RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import TourDetails from "../pages/TourDetails";
import { MainLayout } from "../layout/MainLayout";
import { PrivateRoute } from "./PrivateRoute";
import SignIn from "../pages/SignIn";

// Define your routes as an array of route objects
const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <PrivateRoute>
        <MainLayout>
          <Explore />
        </MainLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/services",
    element: (
      <PrivateRoute>
        <MainLayout>
          <TourDetails />
        </MainLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <MainLayout>
        <SignIn />
      </MainLayout>
    ),
  },
];

export default routes;
