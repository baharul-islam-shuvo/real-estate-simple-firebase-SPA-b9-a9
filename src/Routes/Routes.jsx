import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import Test from "../Components/Test/Test";

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
                path: "/test",
                element: <Test></Test>
            },

        ]
    },
]);

export default router;