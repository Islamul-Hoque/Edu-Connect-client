import React, { useEffect, useState } from 'react';
import Logo from '../../../components/Logo/Logo';
import { Link, NavLink } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useQueryClient } from '@tanstack/react-query';
import { HiOutlineBookOpen, HiOutlineHome, HiOutlineInformationCircle, HiOutlineMail } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaChalkboardTeacher } from 'react-icons/fa';

const NavBar = () => {
    const { user, logOut } = useAuth();
    const queryClient = useQueryClient();

    // Theme 
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

    const handleLogOut = async () => {
        try {
            await logOut();
            queryClient.clear();
            toast.success("Logged out successfully!");
        } catch (error) {
            toast.error("Logout failed. Please try again.");
        }
    }

    // const activeClass = ({ isActive }) => isActive
    //     ? "bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md font-semibold"
    //     : "text-gray-800 dark:text-gray-50 hover:text-indigo-500 px-3 py-1 rounded-md";

    const activeClass = ({ isActive }) =>
  isActive
    ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-md font-semibold"
    : "text-gray-800 dark:text-gray-50 hover:text-indigo-500 dark:hover:text-indigo-800 px-3 py-1 rounded-md";


    const links = <>
        <li><NavLink className={activeClass} to="/"><HiOutlineHome/>Home</NavLink></li>
        <li><NavLink className={activeClass} to="/all-tuitions"> <HiOutlineBookOpen/> Tuitions</NavLink></li>
        <li><NavLink className={activeClass} to="/all-tutors"><FaChalkboardTeacher/> Tutors</NavLink></li>
        <li><NavLink className={activeClass} to="/about"><HiOutlineInformationCircle /> About</NavLink></li>
        <li><NavLink className={activeClass} to="/contact"><HiOutlineMail/>Contact</NavLink></li>

        {
            user && <>
                <li><NavLink className={activeClass} to="/dashboard"><LuLayoutDashboard/> Dashboard</NavLink></li>
            </>
        }
    </>

    return (
        <div className='bg-indigo-50 dark:bg-gray-900 sticky z-50 top-0'>
        <div className='max-w-7xl mx-auto '>
        <div className="px-6 md:px-10 navbar   sha dow">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul  tabIndex="-1" className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> {links} </ul>
                </div>
                <span ><Logo/> </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1"> {links} </ul>
            </div>

            <div className="navbar-end md:gap-3">

                <label className="swap swap-rotate text-base-content mr-4">
                    <input type="checkbox"
                    onChange={(e) => handleTheme(e.target.checked)}
                    defaultChecked={localStorage.getItem('theme') === "dark"}
                    className="theme-controller" />
                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="swap-off fill-current w-6 h-6"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="swap-on fill-current w-6 h-6"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
                </label>

                {user ? (
                    <div className="dropdown dropdown-end dark:bg-gray-800">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full"> 
                                <img src=
                                {user?.photoURL ||  user?.providerData?.[0]?.photoURL || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png"} 
                                alt="" /> </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className="hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:text-gray-200">{user?.displayName || user?.providerData?.[0]?.displayName || "User"}</a></li>
                            <li><a className="hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:text-gray-200">{user?.email || user?.providerData?.[0]?.email}</a></li>
                            <li><Link onClick={handleLogOut} className="text-red-600 hover:bg-red-50">Logout</Link></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="btn btn-outline btn-sm text-indigo-500 border-indigo-500 hover:bg-indigo-50">Login</Link>
                        <Link to="/register" className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Register</Link>
                    </div>
                )}
            </div>
        </div>
        </div>
        </div>
    );
};

export default NavBar;