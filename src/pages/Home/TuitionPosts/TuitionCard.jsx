import React from 'react';
import { motion } from "framer-motion";
import { FaBookOpen, FaGraduationCap, FaSchool, FaMapMarkerAlt, FaMoneyBillWave, FaEye, FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router';
import { format } from "date-fns";

const TuitionCard = ({ tuition }) => {
    const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};
    return (
        <motion.div key={tuition._id} variants={cardVariants} className="flex flex-col justify-between group p-6 rounded-xl 
         dark:hover:shadow-[0_0_7px_rgba(255,255,255,0.05)]  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
         shadow-lg transform transition-all duration-300 ease-out hover:scale-[1.05] ">
            <div className="space-y-3 flex-1 text-gray-600 dark:text-gray-50">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2"><FaBookOpen className="text-indigo-500" /> {tuition.subject}</h3>
                <p className="   text-sm flex items-center gap-2"><FaGraduationCap className="text-indigo-500" /> {tuition.class}</p>
                <p className="   text-sm flex items-center gap-2"><FaSchool className="text-indigo-500" /> {tuition.institution}</p>
                <div className=" text-sm flex items-start gap-2"><FaMapMarkerAlt className="text-indigo-500" /> {tuition.location}</div>
                <p className="   text-sm flex items-center gap-2"><FaMoneyBillWave className="text-indigo-500" /> {tuition.budget} Tk/Month</p>
                <div className=" text-sm flex items-center gap-2"> <FaRegCalendarAlt className='text-indigo-500'/> {format(new Date(tuition.createdAt), "dd/MM/yyyy")}</div>
            </div>
            <Link to={`/tuition-details/${tuition._id}`} className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition flex items-center justify-center gap-2"><FaEye /> View Details</Link>
        </motion.div>
    );
};

export default TuitionCard;


