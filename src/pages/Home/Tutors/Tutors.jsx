// import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TutorsCard from "./TutorsCard";
import TutorsCardSkeleton from "../../../Components/Skeleton/TutorsCardSkeleton";
import { QueryClient, useQuery } from "@tanstack/react-query";

const headingVariants = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

const LatestTutors = () => {
  const axiosSecure = useAxiosSecure();

  const { data: tutors = [], isLoading, isError, isFetching } = useQuery({
    queryKey: ["latest-tutors"],
    queryFn: async () => { const res = await axiosSecure.get("/latest-tutors")
      return res.data;
    },
  });


  return (
    <section className="px-6 md:px-10 py-6 md:py-10 bg-base-100  ">
      <div className="max-w-7xl mx-auto">
        <motion.h2 variants={headingVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8 text-center">Latest Tutors</motion.h2>

        { isLoading && isFetching && ( <TutorsCardSkeleton count={4} /> )}

        {isError && (
          <div className="flex flex-col items-center justify-center py-12">
            <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-2"> Oops! Unable to load data</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4"> Something went wrong while fetching data. Please check your connection or try again later.</p>
            <button onClick={() => QueryClient.invalidateQueries(["latest-tuitions"])} className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" > Retry</button>
          </div>
        )}

        { !isLoading && !isError && !isFetching && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {  tutors.map(tutor => ( <TutorsCard key={tutor._id} tutor={tutor} /> ))}
            </motion.div>
        )}

      </div>
    </section>
  );
};

export default LatestTutors;