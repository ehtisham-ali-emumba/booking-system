import { type RouteObject } from "react-router-dom";
import { Home } from "../pages/Home";
import { Explore } from "../pages/Explore";
import { TourDetails } from "../pages/TourDetails";
import { MainLayout } from "../layout/MainLayout";
import { Tours } from "../pages/Tours";
import { BookTour } from "../pages/BookTour";
import { MyTours } from "../pages/MyTours";
import { Virtualization } from "../pages/Virtualization";

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
      <MainLayout hideExplore>
        <Explore />
      </MainLayout>
    ),
  },
  {
    path: "/tours",
    element: (
      <MainLayout>
        <Tours />
      </MainLayout>
    ),
  },
  {
    path: "/my-tours",
    element: (
      <MainLayout>
        <MyTours />
      </MainLayout>
    ),
  },
  {
    path: "/virtualization",
    element: <Virtualization />,
  },
  {
    path: "/tour/:tourId",
    element: (
      <MainLayout hideExplore>
        <TourDetails />
      </MainLayout>
    ),
  },
  {
    path: "/book/tour/:tourId",
    element: (
      <MainLayout hideExplore>
        <BookTour />
      </MainLayout>
    ),
  },
];

export default routes;
