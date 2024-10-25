import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import ResortDetails from "../Pages/ResortDetails/ResortDetails";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Error/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/resort.json")
            },
            {
                path: "/update-profile",
                element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/:id",
                element: <PrivateRoute><ResortDetails></ResortDetails></PrivateRoute>,
                loader: () => fetch("/resort.json")
            },

        ]
    },
]);

export default router;