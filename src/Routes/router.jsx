import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Layouts/HomeLayout/Home";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";
import AboutMe from "../Pages/About/AboutMe";
import ContactMe from "../Pages/ContactMe/ContactMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/viewDetails/:id",
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch(`/projects.json`),
      },
      {
        path:"/about",
        element:<AboutMe></AboutMe>
      },
      {
        path:"/contact",
        element:<ContactMe></ContactMe>
      }
    ],
  },
]);

export default router;
