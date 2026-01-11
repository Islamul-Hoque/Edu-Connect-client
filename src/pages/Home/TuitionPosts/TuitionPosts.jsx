import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TuitionCard from "./TuitionCard";
import { QueryClient, useQuery } from "@tanstack/react-query";
import TuitionCardSkeleton from "../../../Components/Skeleton/TuitionCardSkeleton";

const TuitionPosts = () => {
    const axiosSecure = useAxiosSecure();

    const { data: tuitions = [], isLoading, isError, isFetching } = useQuery({
        queryKey: ["latest-tuitions"],
        queryFn: async () => {
            const res = await axiosSecure.get("/latest-tuitions");
        return res.data;
        },
    });

    const headingVariants = {
        hidden: { opacity: 0, y: 50 },   
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } 
    };

    return (
        <section className="px-6 md:px-10 py-6 md:py-10   ">
            <div className="max-w-7xl mx-auto ">
                <motion.h2 variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} 
                className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8 text-center"> Latest Tuition Posts</motion.h2>

            {isLoading || isFetching && ( <TuitionCardSkeleton count={4} /> ) }

            {isError && (
                <div className="text-center py-10 ">
                    <p className="text-red-600 font-semibold mb-4"> Oops! We couldn’t load the tuition posts. </p>
                    <p className="text-gray-500 mb-6"> Please check your connection or try again later. </p>
                    <button  onClick={() => QueryClient.invalidateQueries(["latest-tuitions"])} className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" > Retry</button>
                </div>
            )}


                <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tuitions.map(tuition => (
                    <TuitionCard key={tuition._id} tuition={tuition} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TuitionPosts;


// bg-white dark:bg-gray-800

// dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.05)]  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700
