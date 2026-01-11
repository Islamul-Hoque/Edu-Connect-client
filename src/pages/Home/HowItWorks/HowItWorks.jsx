import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaUserShield, FaUserPlus, FaClipboardList, FaBell, FaMoneyBillWave,  FaFileAlt,  FaGraduationCap, FaChartBar, } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const studentSteps = [
  {
    id: 1,
    title: "POST TUITION REQUIREMENT",
    description: "Students can post their tuition needs with subject, location, and preferred schedule.",
    icon: <FaFileAlt />,
    color: "bg-indigo-600",
  },
  {
    id: 2,
    title: "VIEW TUTOR APPLICATIONS",
    description: "Tutors apply to your post. You can browse the list of applicants and review their profiles.",
    icon: <FaClipboardList />,
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "HIRE & PAY VIA STRIPE",
    description: "Select your best match and confirm by making a secure payment through Stripe.",
    icon: <FaMoneyBillWave />,
    color: "bg-indigo-600",
  },
  {
    id: 4,
    title: "TUTOR LOCKED AFTER PAYMENT",
    description: "Once payment is successful, the tutor is locked to your post and tuition begins.",
    icon: <FaGraduationCap />,
    color: "bg-indigo-600",
  },
];

const tutorSteps = [
  {
    id: 1,
    title: "CREATE ACCOUNT & PROFILE",
    description: "Register from the signup page and build your profile with essential details.",
    icon: <FaUserPlus />,
    color: "bg-indigo-600",
  },
  {
    id: 2,
    title: "APPLY TO TUITION POSTS",
    description: "Submit applications to student posts with your expected salary, qualifications, and experience.",
    icon: <FaClipboardList />,
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "MANAGE APPLICATIONS",
    description: "Track and update your applications directly from the dashboard.",
    icon: <FaBell />,
    color: "bg-indigo-600",
  },
  {
    id: 4,
    title: "ONGOING TUITIONS & REVENUE",
    description: "After student payment, view ongoing tuition details and check your revenue history in the dashboard.",
    icon: <FaMoneyBillWave />,
    color: "bg-indigo-600",
  },
];

const adminSteps = [
  {
    id: 1,
    title: "USER MANAGEMENT",
    description: "Update user roles, status, and information. Remove users if necessary to maintain platform integrity.",
    icon: <FaUserShield />,
    color: "bg-indigo-600",
  },
  {
    id: 2,
    title: "TUITION MANAGEMENT",
    description: "Review student tuition posts and approve or reject them to ensure quality and authenticity.",
    icon: <FaClipboardList />,
    color: "bg-indigo-600",
  },
  {
    id: 3,
    title: "REPORTS & ANALYTICS",
    description: "View total platform earnings (USD), successful transactions, average transaction amount, and detailed payment history (which student paid which tutor on which date).",
    icon: <FaChartBar />,
    color: "bg-indigo-600",
  },
  {
    id: 4,
    title: "DASHBOARD OVERVIEW",
    description: "Monitor platform distribution with visual charts: user stats (active/inactive), user roles, tuition post stats (approved, rejected, pending). Data is displayed using interactive BarCharts for clarity.",
    icon: <MdDashboard />,
    color: "bg-indigo-600",
  },
];

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState("student");

  const currentSteps =
    activeTab === "student" ? studentSteps :
    activeTab === "tutor" ? tutorSteps :
    adminSteps;

  return (

<section className="py-20 bg-base-100 overflow-hidden">
      <div className=" px-6">
        <div className="text-center mb-16">
          <motion.h2  initial={{ opacity: 0, y: -20 }}  whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8 text-center   "
          > How EduConnect Works </motion.h2>

          <div className="inline-flex bg-base-200 p-1.5 rounded-2xl border border-base-300 shadow-inner">
            <button  onClick={() => setActiveTab("student")}  className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "student" ? "bg-indigo-600 text-white shadow-md" : "text-gray-500 hover:text-indigo-600"  }`}
              > For Students
            </button>

            <button onClick={() => setActiveTab("tutor")}  className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "tutor" ? "bg-indigo-600 text-white shadow-md" : "text-gray-500 hover:text-indigo-600"
              }`} > For Tutors  </button>

            <button onClick={() => setActiveTab("admin")} className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "admin" ? "bg-indigo-600 text-white shadow-md" : "text-gray-500 hover:text-indigo-600"
              }`} > For Admins </button>
          </div>

          <p className="mt-8 text-lg text-base-content/70">  Here's how it works for{" "}
            <span className="font-bold text-indigo-600"> {activeTab === "student" ? "Students" : activeTab === "tutor" ? "Tutors" : "Admins"} </span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-indigo-400/30 via-purple-400/30 to-transparent"></div>

          <div className="space-y-12">
            <AnimatePresence >
              {currentSteps.map((step, index) => { const isEven = index % 2 === 1;
                return (
                  <div key={`${activeTab}-${step.id}`}  className={`flex flex-col md:flex-row items-center justify-between w-full ${ isEven ? "md:flex-row-reverse" : ""  }`} >

                    <motion.div initial={{ opacity: 0, x: isEven ? 100 : -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 100, damping: 15, bounce: 0.4, delay: index * 0.1,  }} className="w-full md:w-[45%] group" >

                      <div className="bg-base-200 p-8 rounded-4xl shadow -xl border border-base-300  transition-all duration-300 relative">
                        {/* Icon + Step + Title in one row */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`} >
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase"> STEP 0{step.id} </span>
                            <h3 className="text-xl font-bold text-base-content uppercase leading-tight"> {step.title} </h3>
                          </div>
                        </div>
                        <p className="text-base-content/60 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </motion.div>

                    <motion.div initial={{ scale: 0 }}  whileInView={{ scale: 1 }}
                      className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-base-100 bg-indigo-500 z-10 items-center justify-center shadow-lg" >
                      <div className="w-2.5 h-2.5 bg-white rounded-full animate-pulse"></div>
                    </motion.div>

                    <div className="hidden md:block w-[45%]"></div>
                  </div>
                );
              })}
            </AnimatePresence>

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;


// text-4xl font-bold mb-6 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-600  bg-clip-text text-transparent