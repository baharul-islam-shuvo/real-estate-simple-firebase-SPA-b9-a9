import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="mx-16 my-8">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Root;