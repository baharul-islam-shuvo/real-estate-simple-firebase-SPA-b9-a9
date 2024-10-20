import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Resorts from "../Components/Resorts/Resorts";
import Resort from "../Components/Resort/Resort";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
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
                path: "/resorts",
                element: <Resorts></Resorts>,
                loader: () => fetch("/resort.json")
            },
            {
                path: "/resort-description",
                element: <Resort></Resort>,
                loader: () => fetch("/resort.json")
            },

        ]
    },
]);

export default router;