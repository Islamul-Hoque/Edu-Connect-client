import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

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

    if (isError) {
        return <div className="px-6 md:px-10 py-12 text-center"><p className="text-red-500">Failed to load statistics</p></div>;
    }

    return (
        <div className="px-6 md:px-10 py-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">Platform Statistics</motion.h2>
                    
                    {isLoading ? (
                        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {[...Array(4)].map((_, i) => (
                        <div key={i} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center animate-pulse" >
                            <div className="h-5 w-24 bg-gray-300 dark:bg-gray-700 mx-auto mb-4 rounded"></div>
                            <div className="h-8 w-16 bg-gray-300 dark:bg-gray-700 mx-auto rounded"></div>
                        </div>
                        ))}
                    </div>
                    ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard title="Total Users" value={stats?.totalUsers || 0} />
                        <StatCard title="Active Tutors" value={stats?.totalTutors || 0} />
                        <StatCard title="Tuition Posts" value={stats?.totalTuitions || 0} />
                        <StatCard title="Approved Tuitions" value={stats?.approvedTuitions || 0} />
                    </div>
                    )}
            </div>
        </div>
    );
};

    const StatCard = ({ title, value }) => {
    const [start, setStart] = useState(false);

    return (
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.5 }} onViewportEnter={() => setStart(true)} onViewportLeave={() => setStart(false)} className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 text-center">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{title}</h3>
            <p className="text-3xl font-bold text-indigo-600">{start && <CountUp end={value} duration={3} />}</p>
        </motion.div>
    );
};

export default PlatformStats;