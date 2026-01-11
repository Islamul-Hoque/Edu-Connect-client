import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaChalkboardTeacher, FaFileAlt, FaCheckCircle, FaHandshake } from "react-icons/fa";

const PlatformStats = () => {
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading, isError } = useQuery({
        queryKey: ["platformStats"],
        queryFn: async () => { 
            const res = await axiosSecure.get("/platform/stats");
            return res.data;
        },
        refetchOnWindowFocus: true,
    });

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },   
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
    };

    if (isError) {
        return (
            <div className="px-6 md:px-10 py-12 text-center">
                <p className="text-red-500">Failed to load statistics</p>
            </div>
        );
    }

const statsConfig = [
  { title: "Total Users", value: stats?.totalUsers || 0, icon: <FaUsers className="text-indigo-500 text-2xl" /> },
  { title: "Active Tutors", value: stats?.totalTutors || 0, icon: <FaChalkboardTeacher className="text-emerald-500 text-2xl" /> },
  { title: "Tuition Posts", value: stats?.totalTuitions || 0, icon: <FaFileAlt className="text-amber-500 text-2xl" /> },
  { title: "Approved Tuitions", value: stats?.approvedTuitions || 0, icon: <FaCheckCircle className="text-blue-500 text-2xl" /> },
  { title: "Tutors Hired", value: stats?.successfulPayments || 0, icon: <FaHandshake className="text-violet-500 text-2xl" /> },
];


    return (
        <div className="px-6 md:px-10 py-12">
            <div className="text-center">
                <motion.h2  initial={{ opacity: 0, y: -16 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  viewport={{ once: false, amount: 0.4 }}
                    className="text-3xl md:text-4xl font-bold text-indigo-600  mb-6 ">  Our Impact   </motion.h2>
                <motion.p variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} 
                                className="text-gray-600 dark:text-gray-400 mb-10   mx-auto" > Core metrics that showcase EduConnect’s growth and trusted community</motion.p>


                {isLoading ? (
                    <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-8">
                        {[...Array(5)].map((_, i) => (
                            <div key={i}  className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center animate-pulse" >
                                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-700 mx-auto mb-4 rounded-full"></div>
                                <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mb-2 rounded"></div>
                                <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
                            </div> ))}
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
                                {statsConfig.map((item, i) => ( <StatCard key={i} title={item.title} value={item.value} icon={item.icon} /> ))}
                            </div>
                )}
            </div>
        </div>
    );
};

const StatCard = ({ title, value, icon }) => {
    const [start, setStart] = useState(false);

    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} onViewportEnter={() => setStart(true)} onViewportLeave={() => setStart(false)} className="p-6 rounded-xl border-indigo-100/60 dark:border-gray-700 bg-indigo-50/40 dark:bg-gray-800 shadow-sm text-center"  >
            <div className="flex justify-center mb-3">{icon}</div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-indigo-600">
                {start && <CountUp end={value} duration={3} />}
            </p>
        </motion.div>
    );
};

export default PlatformStats;