import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import RootLayout from "../Layout/RootLayout";
import Herosection from "../Components/Herosection";
import Homepage from "../Pages/Homepage";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester";
import ModelDetils from "../Pages/ModelDetils";
import AddnewModel from "../Pages/AddnewModel";
import ViewsAllModels from "../Pages/ViewsAllModels";
import PrivateRoute from "./PrivateRoute";
import MyModels from "../Pages/MyModels";
import Purchase from "../Pages/Purchase";
import Editpage from "../Pages/Editpage";
import Errorpage from "../Pages/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Regester></Regester>,
      },
      {
        path: "/models/:id",
        // loader: ({params}) => fetch(`https://ai-model-inventory-manager-server-ten.vercel.app/models/${params.id}`),
        element: (
          
            <ModelDetils></ModelDetils>
        ),
      },
      {
        path: "/addmodel",

        element: (
          <PrivateRoute>
            <AddnewModel></AddnewModel>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewsallmodels",
        loader: () =>
          fetch(
            "https://ai-model-inventory-manager-server-ten.vercel.app/models"
          ),
        element: <ViewsAllModels></ViewsAllModels>,
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            {" "}
            <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-Purchase",
        element: (
          <PrivateRoute>
            <Purchase></Purchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-page/:id",
        element: (
          <PrivateRoute>
            <Editpage></Editpage>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Errorpage></Errorpage>,
      },
    ],
  },
]);

export default router;
