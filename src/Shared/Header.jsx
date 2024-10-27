import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import 'animate.css';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/update-profile">Update Profile</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="animate__animated animate__bounceInDown btn btn-ghost text-xl font-bold">
                    SPA Tropical Resort
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex font-bold gap-16">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/update-profile">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </Link>
                {
                    user ?
                        <a onClick={handleSignOut} className="btn btn-ghost btn-lg ml-3 font-bold">
                            Sign Out
                        </a>
                        :
                        <Link to="/login" className="btn btn-ghost btn-lg ml-3 font-bold">
                            Login
                        </Link>
                }

            </div>
        </div>
    );
};

export default Header;