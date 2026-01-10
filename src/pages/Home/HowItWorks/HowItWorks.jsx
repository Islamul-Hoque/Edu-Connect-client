// import React from "react";
// import { motion } from "framer-motion";
// import { FaUserPlus, FaChalkboardTeacher, FaUserShield } from "react-icons/fa";

// const cardVariants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
// };

// const headingVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
// };

// const HowItWorks = () => {
//   const steps = [
//     {
//       icon: <FaUserPlus className="text-indigo-500 text-4xl" />,
//       title: "Post Tuition",
//       desc: "Students register and post tuition requirements including subject, class, budget, and location.",
//     },
//     {
//       icon: <FaChalkboardTeacher className="text-indigo-500 text-4xl" />,
//       title: "Apply as Tutor",
//       desc: "Tutors browse available tuition posts and apply to suitable opportunities with expected salary.",
//     },
//     {
//       icon: <FaUserShield className="text-indigo-500 text-4xl" />,
//       title: "Admin Approval",
//       desc: "Admin reviews applications, verifies tutors, and approves or rejects tuition posts for quality.",
//     },
//   ];

//   return (
//     <section className="px-6 md:px-10 py-6 md:py-10 bg-gradient-to-br from-indigo-50 via-purple-50/0.1 to-gray-50">
//       <div className="max-w-7xl mx-auto">
//         <motion.h2  variants={headingVariants} initial="hidden"  whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-3xl md:text-4xl font-bold text-indigo-600 mb-12 text-center" > How the Platform Works </motion.h2>

//         <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" >
//           {steps.map((step, idx) => (
//             <motion.div key={idx} variants={cardVariants} className="p-6 rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-[1.05]" >
//               <div className="flex flex-col items-center text-center space-y-4">
//                 {step.icon}
//                 <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.desc}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;


// import React from "react";
// import { FaUserGraduate, FaChalkboardTeacher, FaUserShield } from "react-icons/fa";
// import { LuMousePointerClick, LuCalendarCheck, LuSmile } from "react-icons/lu";
// import { IoBookOutline } from "react-icons/io5";

// const studentSteps = [
//   { id: 1, title: "Browse Tuitions", description: "Explore verified tuition posts across subjects and locations.", icon: <IoBookOutline className="text-[20px] text-primary" />, side: "start" },
//   { id: 2, title: "Choose Tutor", description: "Select the right tutor based on qualifications and reviews.", icon: <LuMousePointerClick className="text-[20px] text-primary" />, side: "end" },
//   { id: 3, title: "Confirm Enrollment", description: "Secure your tuition slot instantly with transparent details.", icon: <LuCalendarCheck className="text-[20px] text-primary" />, side: "start" },
//   { id: 4, title: "Start Learning", description: "Begin your journey with confidence and track progress seamlessly.", icon: <LuSmile className="text-[20px] text-primary" />, side: "end" },
// ];

// const tutorSteps = [
//   { id: 1, title: "Create Profile", description: "Showcase your qualifications, experience, and teaching style.", icon: <FaChalkboardTeacher className="text-[20px] text-primary" />, side: "start" },
//   { id: 2, title: "Post Availability", description: "List subjects, timings, and preferred student levels.", icon: <LuCalendarCheck className="text-[20px] text-primary" />, side: "end" },
//   { id: 3, title: "Connect with Students", description: "Respond to tuition requests and build trusted relationships.", icon: <LuMousePointerClick className="text-[20px] text-primary" />, side: "start" },
//   { id: 4, title: "Manage Classes", description: "Track sessions, communicate easily, and grow your reputation.", icon: <LuSmile className="text-[20px] text-primary" />, side: "end" },
// ];

// const adminSteps = [
//   { id: 1, title: "Verify Accounts", description: "Ensure tutors and students are authentic and trustworthy.", icon: <FaUserShield className="text-[20px] text-primary" />, side: "start" },
//   { id: 2, title: "Moderate Content", description: "Review tuition posts, handle reports, and maintain platform quality.", icon: <IoBookOutline className="text-[20px] text-primary" />, side: "end" },
//   { id: 3, title: "Manage System", description: "Oversee payments, security, and technical stability.", icon: <LuCalendarCheck className="text-[20px] text-primary" />, side: "start" },
//   { id: 4, title: "Support Users", description: "Provide help, resolve issues, and keep the community safe.", icon: <LuSmile className="text-[20px] text-primary" />, side: "end" },
// ];

// const Timeline = ({ steps }) => (
//   <ul className="timeline timeline-vertical">
//     {steps.map((step, index) => (
//       <li key={step.id}>
//         {index !== 0 && <hr className="bg-primary" />}
//         {step.side === "start" && (
//           <div className="bg-gray-50 dark:bg-gray-800 timeline-start timeline-box">
//             <div className="flex items-center gap-2 mb-2">
//               {step.icon}
//               <h3 className="font-semibold">{step.title}</h3>
//             </div>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
//           </div>
//         )}
//         <div className="timeline-middle">
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="text-primary h-5 w-5">
//             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
//           </svg>
//         </div>
//         {step.side === "end" && (
//           <div className="bg-gray-50 dark:bg-gray-800 timeline-end timeline-box">
//             <div className="flex items-center gap-2 mb-2">
//               {step.icon}
//               <h3 className="font-semibold">{step.title}</h3>
//             </div>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
//           </div>
//         )}
//       </li>
//     ))}
//   </ul>
// );

// const HowItWorks = () => {
//   return (
//     <div className="px-6 md:px-10 mt-8 space-y-16">
//       <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">How <span className="text-gradient">EduConnect Works</span></h2>

//       {/* Student Flow */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-indigo-600 dark:text-indigo-400 justify-center">
//           <FaUserGraduate /> For Students
//         </h3>
//         <Timeline steps={studentSteps} />
//       </div>

//       {/* Tutor Flow */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-indigo-600 dark:text-indigo-400 justify-center">
//           <FaChalkboardTeacher /> For Tutors
//         </h3>
//         <Timeline steps={tutorSteps} />
//       </div>

//       {/* Admin Flow */}
//       <div>
//         <h3 className="text-xl font-semibold flex items-center gap-2 mb-6 text-indigo-600 dark:text-indigo-400 justify-center">
//           <FaUserShield /> For Admins
//         </h3>
//         <Timeline steps={adminSteps} />
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserGraduate, FaChalkboardTeacher, FaUserShield, FaUserPlus, FaClipboardList, FaBell, FaMoneyBillWave, FaSearch, FaFileAlt, FaHandshake, FaGraduationCap, FaChartBar, } from "react-icons/fa";
import { LuCalendarCheck, LuSmile } from "react-icons/lu";
import { IoBookOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

// const studentSteps = [
//   {
//     id: 1,
//     title: "POST TUITION REQUIREMENT",
//     description: "Students can post their tuition needs with subject, location, and preferred schedule.",
//     icon: <FaFileAlt />,
//     color: "bg-blue-600",
//   },
//   {
//     id: 2,
//     title: "VIEW TUTOR APPLICATIONS",
//     description: "Tutors apply to your post. You can browse the list of applicants and review their profiles.",
//     icon: <FaClipboardList />,
//     color: "bg-orange-500",
//   },
//   {
//     id: 3,
//     title: "HIRE & PAY VIA STRIPE",
//     description: "Select your best match and confirm by making a secure payment through Stripe.",
//     icon: <FaMoneyBillWave />,
//     color: "bg-green-600",
//   },
//   {
//     id: 4,
//     title: "TUTOR LOCKED AFTER PAYMENT",
//     description: "Once payment is successful, the tutor is locked to your post and tuition begins.",
//     icon: <FaGraduationCap />,
//     color: "bg-indigo-600",
//   },
// ]

// const tutorSteps = [
//   {
//     id: 1,
//     title: "CREATE ACCOUNT & PROFILE",
//     description: "Register from the signup page and build your profile with essential details.",
//     icon: <FaUserPlus />,
//     color: "bg-purple-600",
//   },
//   {
//     id: 2,
//     title: "APPLY TO TUITION POSTS",
//     description: "Submit applications to student posts with your expected salary, qualifications, and experience.",
//     icon: <FaClipboardList />,
//     color: "bg-pink-500",
//   },
//   {
//     id: 3,
//     title: "MANAGE APPLICATIONS",
//     description: "Track and update your applications directly from the dashboard.",
//     icon: <FaBell />,
//     color: "bg-indigo-600",
//   },
//   {
//     id: 4,
//     title: "ONGOING TUITIONS & REVENUE",
//     description: "After student payment, view ongoing tuition details and check your revenue history in the dashboard.",
//     icon: <FaMoneyBillWave />,
//     color: "bg-green-600",
//   },
// ]

// const adminSteps = [
//   {
//     id: 1,
//     title: "USER MANAGEMENT",
//     description: "Update user roles, status, and information. Remove users if necessary to maintain platform integrity.",
//     icon: <FaUserShield />,
//     color: "bg-red-600",
//   },
//   {
//     id: 2,
//     title: "TUITION MANAGEMENT",
//     description: "Review student tuition posts and approve or reject them to ensure quality and authenticity.",
//     icon: <FaClipboardList />,
//     color: "bg-indigo-600",
//   },
//   {
//     id: 3,
//     title: "REPORTS & ANALYTICS",
//     description: "View total platform earnings (USD), successful transactions, average transaction amount, and detailed payment history (which student paid which tutor on which date).",
//     icon: <FaChartBar />,
//     color: "bg-green-600",
//   },
//   {
//     id: 4,
//     title: "DASHBOARD OVERVIEW",
//     description: "Monitor platform distribution with visual charts: user stats (active/inactive), user roles, tuition post stats (approved, rejected, pending). Data is displayed using interactive BarCharts for clarity.",
//     icon:  <MdDashboard />,
//     color: "bg-purple-600",
//   },
// ]


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
      <div className="conta iner mx- auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2  initial={{ opacity: 0, y: -20 }}  whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold mb-6 bg-linear-to-r from-indigo-500 via-purple-500 to-indigo-600  bg-clip-text text-transparent"
          > How EduConnect Works? </motion.h2>

          {/* Tab Switcher */}
          <div className="inline-flex bg-base-200 p-1.5 rounded-2xl border border-base-300 shadow-inner">
            <button  onClick={() => setActiveTab("student")}  className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                activeTab === "student" ? "bg-indigo-600 text-white shadow-md" : "text-gray-500 hover:text-indigo-600"  }`}
            >  For Students
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
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-400/30 via-purple-400/30 to-transparent"></div>

          <div className="space-y-12">
            <AnimatePresence >
              {currentSteps.map((step, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div  key={`${activeTab}-${step.id}`}  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                      isEven ? "md:flex-row-reverse" : ""  }`} >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                        bounce: 0.4,
                        delay: index * 0.1,
                      }}
                      className="w-full md:w-[45%] group"
                    >
                      <div className="bg-base-200 p-8 rounded-4xl shadow -xl border border-base-300  transition-all duration-300 relative">
                        {/* Icon + Step + Title in one row */}
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-12 h-12 rounded-2xl ${step.color} text-white flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform`}
                          >
                            {step.icon}
                          </div>
                          <div>
                            <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase">
                              STEP 0{step.id}
                            </span>
                            <h3 className="text-xl font-bold text-base-content uppercase leading-tight">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-base-content/60 leading-relaxed font-medium">{step.description}</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-base-100 bg-indigo-500 z-10 items-center justify-center shadow-lg"
                    >
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