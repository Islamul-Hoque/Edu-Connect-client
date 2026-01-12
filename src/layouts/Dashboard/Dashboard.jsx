import React, { useEffect, useState } from 'react';
import { FaBookOpen, FaChartBar, FaClipboardList, FaGraduationCap, FaMoneyBillWave, FaPlusCircle, FaRegCreditCard, FaTasks, FaUserEdit, FaUsers } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../../hooks/useRole';
import logo from '../../assets/eTuitionBD.png';
import { FaHome } from "react-icons/fa";
import { MdDashboard, MdMenu } from 'react-icons/md';
import useAuth from '../../hooks/useAuth';

const DashboardLayout = () => {
  const { user } = useAuth()
  const { role } = useRole();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme = (checked) => {
        setTheme(checked ? "dark" : "light");
    };

  const activeClass = ({ isActive }) => isActive
    ? "bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md font-semibold"
    : "text-gray-700 dark:text-gray-50 hover:text-indigo-500 px-3 py-1 rounded-md";

  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        <nav className="navbar w-full bg-indigo-50 dark:bg-gray-800 text-gray-800 shadow sticky top-0 z-10 flex justify-between px-4">
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
            <MdMenu className="text-2xl text-gray-800 dark:text-gray-100" />
          </label>

          <Link to='/' className="font-bold md:text-2xl text-indigo-500">Dashboard</Link>
        <div>
        {/* Theme Icon */}
          <label className="swap swap-rotate text-base-content mr-4">
              <input type="checkbox"
              onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={localStorage.getItem('theme') === "dark"}
              className="theme-controller" />
              <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="swap-off fill-current w-6 h-6"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>
              <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="swap-on fill-current w-6 h-6"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>
          </label>

          {user && (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full"><img src={user?.photoURL || user?.providerData?.[0]?.photoURL || "https://i.ibb.co.com/RTyj1cSs/1559144-200.png"} alt="" /></div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                  <li><a className="hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:text-gray-200">{user?.displayName || user?.providerData?.[0]?.displayName || ""}</a></li>
                  <li><a className="hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:text-gray-200">{user?.email || user?.providerData?.[0]?.email}</a></li>
                  <li><Link to="/dashboard/edit-profile" className="  hover:bg-indigo-50 dark:hover:bg-indigo-900 dark:text-gray-200">Edit Profile</Link></li>
                </ul>
              </div>
            )}
          </div>

        </nav>

        <div className=""> <Outlet /> </div>
      </div>

      <div className="drawer-side  shadow">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col bg-indigo-50 dark:bg-gray-800 text-gray-800 shadow w-52">
          <ul className="menu p-4 w-full grow">
            <li> <Link to="/" className="flex justify-center mb-4"> <img className="" src={logo} alt="Logo" /> </Link>  </li>

            <li> <NavLink className={activeClass} end to="/dashboard">  <MdDashboard /> <span>Overview</span> </NavLink> </li>
            <div className="border-t border-gray-300 my-2"></div>

            {role === 'Student' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/my-tuitions"><FaBookOpen /> My Tuitions Post</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/add-tuition"><FaPlusCircle /> Add Tuition</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/applied-tutors"><FaUsers /> Applied Tutors</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/payments"><FaRegCreditCard /> Payment History</NavLink></li>
              </>
            )}

            {role === 'Tutor' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/my-applications"><FaClipboardList /> My Applications</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/ongoing-tuitions"><FaTasks /> Ongoing Tuitions</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/revenue-history"><FaMoneyBillWave /> Revenue History</NavLink></li>
              </>
            )}

            {role === 'Admin' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/users-management"><FaUsers /> User Management</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/tuition-management"><FaGraduationCap /> Tuition Management</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/reports"><FaChartBar /> Reports & Analytics</NavLink></li>
              </>
            )}

            <div className="border-t border-gray-300 my-2"></div>

            <li> <NavLink className={activeClass} end to="/dashboard/edit-profile"><FaUserEdit /> Edit Profile</NavLink> </li>
            <li> <NavLink className={activeClass} end to="/"> <FaHome /> <span>Back to Home</span> </NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;