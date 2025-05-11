import { type RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import TourDetails from "../pages/TourDetails";
import { MainLayout } from "../layout/MainLayout";
import { PrivateRoute } from "./PrivateRoute";
import Tours from "../pages/Tours";
import BookTour from "../pages/BookTour";

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
    path: "/explore",
    element: (
      <PrivateRoute>
        <MainLayout hideExplore>
          <Explore />
        </MainLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/tours",
    element: (
      <PrivateRoute>
        <MainLayout>
          <Tours />
        </MainLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/tour/:tourId",
    element: (
      <PrivateRoute>
        <MainLayout hideExplore>
          <TourDetails />
        </MainLayout>
      </PrivateRoute>
    ),
  },
  {
    path: "/book/tour",
    element: (
      <PrivateRoute>
        <MainLayout hideExplore>
          <BookTour />
        </MainLayout>
      </PrivateRoute>
    ),
  },
];

export default routes;
