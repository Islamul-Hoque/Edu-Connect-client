import React from 'react';
import { FaBookOpen, FaChartBar, FaClipboardList, FaGraduationCap, FaMoneyBillWave, FaPlusCircle, FaRegCreditCard, FaTasks, FaUserEdit, FaUsers } from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../../hooks/useRole';
import logo from '../../assets/eTuitionBD.png';

const DashboardLayout = () => {
  const { role } = useRole();

  const activeClass = ({ isActive }) => isActive
    ? "bg-indigo-100 text-indigo-600 px-3 py-1 rounded-md font-semibold"
    : "text-gray-700 hover:text-indigo-500 px-3 py-1 rounded-md";
    // ? "bg-indigo-600 text-white font-semibold" : "text-gray-700 hover:bg-indigo-100"

  return (
    <div className="drawer lg:drawer-open max-w-7xl mx-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar w-full bg-indigo-50 text-gray-800 shadow sticky top-0 z-10 flex justify-between">
          {/* Toggle button শুধু mobile এ */}
          <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <div className="font-bold">eTuitionBD Dashboard</div>
        </nav>

        {/* Page content */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col bg-indigo-50 text-gray-800 shadow w-64">
          <ul className="menu p-4 w-full grow">
            {/* Logo */}
            <li>
              <Link to="/" className="flex justify-center mb-4">
                <img className="" src={logo} alt="Logo" />
              </Link>
            </li>

            {/* Common Home */}
            <li>
              <NavLink className={activeClass} end to="/dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>                               
                <span>Home page</span>
              </NavLink>
            </li>

            {/* Student Routes */}
            {role === 'Student' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/add-tuition"><FaPlusCircle /> Add Tuition</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/my-tuitions"><FaBookOpen /> My Tuitions Post</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/applied-tutors"><FaUsers /> Applied Tutors</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/payments"><FaRegCreditCard /> Payment History</NavLink></li>
              </>
            )}

            {/* Tutor Routes */}
            {role === 'Tutor' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/my-applications"><FaClipboardList /> My Applications</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/ongoing-tuitions"><FaTasks /> Ongoing Tuitions</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/revenue-history"><FaMoneyBillWave /> Revenue History</NavLink></li>
              </>
            )}

            {/* Admin Routes */}
            {role === 'Admin' && (
              <>
                <li><NavLink className={activeClass} end to="/dashboard/users-management"><FaUsers /> User Management</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/tuition-management"><FaGraduationCap /> Tuition Management</NavLink></li>
                <li><NavLink className={activeClass} end to="/dashboard/reports"><FaChartBar /> Reports & Analytics</NavLink></li>
              </>
            )}

            {/* Common Edit Profile */}
            <li>
              <NavLink className={activeClass} to="/dashboard/edit-profile"><FaUserEdit /> Edit Profile</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;