import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaLock, FaChartBar, FaMobileAlt, FaClock } from "react-icons/fa";

const benefits = [
{
    icon: <FaBolt className="text-indigo-500 text-2xl mt-1" />,
    text: "Instant matching between students and tutors",
},
{ icon: <FaClock className="text-indigo-500 text-2xl mt-1" />, 
    text: "Flexible scheduling for both students and tutors", 
},
{
    icon: <FaLock className="text-indigo-500 text-2xl mt-1" />,
    text: "End‑to‑end secure communication",
},
{
    icon: <FaChartBar className="text-indigo-500 text-2xl mt-1" />,
    text: "Clear insights with transparent progress tracking",
},
{
    icon: <FaMobileAlt className="text-indigo-500 text-2xl mt-1" />,
    text: "Seamless access across web and mobile devices",
},
];

const PlatformBenefits = () => {

const listVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2, 
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};


    return (
        <div className="px-6 md:px-12 py-16 bg-indigo-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: false, amount: 0.3 }}
                    className="flex justify-center" >
                    <img
                        // src="https://possip.com/wp-content/uploads/2020/03/New-FI-for-Blogs-Odd-Pages-31.png"
                        // src="https://www.shutterstock.com/image-vector/online-learning-platform-offering-virtual-600nw-2655109283.jpg"
                        // src="https://i.ibb.co.com/RTtxFGDB/be.jpg"
                        // src="https://c8.alamy.com/comp/2GBJ2CG/distance-education-modern-technology-vector-illustration-cartoon-man-student-graduate-character-studying-online-sitting-with-laptop-graduation-hat-apple-knowledge-line-icons-isolated-on-white-2GBJ2CG.jpg"
                        src="https://i.ibb.co.com/fVMfzsRF/hand-drawn-online-tutor-illustration.png"
                        className="w-full " alt="EduConnect Benefits"
                        />
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}  viewport={{ once: true }} >
                <motion.h2  initial={{ opacity: 0, y: -20 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  viewport={{ once: false, amount: 0.3 }}  className="text-[1.4rem] md:text-4xl font-bold text-indigo-600 dark:text-indigo-300 mb-6">  Why EduConnect Benefits You</motion.h2>
                    <ul className="space-y-6">
                        {benefits.map((item, index) => (
                        <motion.li key={index}  className="flex items-start gap-4"  initial="hidden"  whileInView="visible"  viewport={{ once: false, amount: 0.3 }}  custom={index}
                            variants={listVariants}> {item.icon} <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
                        </motion.li> ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
};

export default PlatformBenefits;