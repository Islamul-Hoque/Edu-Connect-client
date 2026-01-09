import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { QueryClient, useQuery } from '@tanstack/react-query';
import TutorsCard from '../Home/Tutors/TutorsCard';
import { motion } from "framer-motion";
import Loading from '../../Components/Loading/Loading';

const AllTutors = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allTutors = [], isLoading, isError } = useQuery({
        queryKey: ['all-tutors'],
        queryFn: async () => {
        const res = await axiosSecure.get('/all-tutors');
        return res.data;
    }})

    return (
        <div className='py-12 px-6 md:px-16 bg-linear-to-br from-indigo-50 via-purple-50/0.1 to-white bg-dark '>
            <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-indigo-600 mb-2">All Tutors</h2>
                <p className="text-gray-600 dark:text-gray-50 mb-6"> Browse all verified tutors with their qualifications and experience.  </p>
            </div>

            {isLoading && <Loading />}

            {isError && (
                <div className="flex flex-col items-center justify-center py-12">
                    <h3 className="text-lg font-semibold text-red-600 mb-2">   Oops! Unable to load tutors</h3>
                    <p className="text-gray-600 mb-4"> Something went wrong while fetching tutor data. Please check your connection or try again later. </p>
                    <button  onClick={() => QueryClient.invalidateQueries(["all-tutors"])}  className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" > Retry </button>
                </div>
            )}

            {!isLoading && !isError && (
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {allTutors.map(tutor => ( <TutorsCard key={tutor._id} tutor={tutor}/> ))}
            </motion.div>
            )}
        </div>
    );
};

export default AllTutors;