import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSearch, FaChalkboardTeacher } from "react-icons/fa";


const CallToAction = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-300 mb-6"
        >
          Ready to Join EduConnect?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Whether you are a student searching for tuition or a tutor looking to connect, 
          EduConnect makes it simple, secure, and effective. Join our growing community today 
          and start your journey.
        </motion.p>

        {/* Buttons */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 justify-center"
>
  <Link
    to="/all-tuitions"
    className="btn bg-indigo-500 text-white hover:bg-indigo-700 shadow-md px-6 py-3 rounded-md flex items-center gap-2"
  >
    <FaSearch className="text-lg" />
    Find Tuitions
  </Link>
 <Link
  to="/register"
  className="btn bg-[#3b9ae1] hover:bg-[#2f7fcf] text-white shadow-md px-6 py-3 rounded-md flex items-center gap-2"
>
  <FaChalkboardTeacher className="text-lg" />
  Become a Tutor
</Link>

{/* aaaaaaaaaa */}
  {/* <Link to="/all-tuitions" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-md bg-indigo-500 text-white shadow-md transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-400 hover:scale-105" >
    <FaSearch className="text-lg" />
    Find Tuitions
  </Link>

  
  <Link to="/register" className="relative inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#3b9ae1] text-white shadow-md transition-all duration-300 hover:bg-[#2f7fcf] hover:scale-105 hover:shadow-lg" >
    <FaChalkboardTeacher className="text-lg" />
    Become a Tutor
  </Link> */}

</motion.div>





      </div>
    </section>
  );
};

export default CallToAction;
