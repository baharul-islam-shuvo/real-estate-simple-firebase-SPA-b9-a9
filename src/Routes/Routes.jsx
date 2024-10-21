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
                element: <UpdateProfile></UpdateProfile>
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
                element: <ResortDetails></ResortDetails>,
                loader: ()=> fetch("/resort.json")
            },

        ]
    },
]);

export default router;