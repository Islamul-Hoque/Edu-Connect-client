import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaCalendarAlt } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const staggerContainer = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };

const handleSubmit = (e) => { 
    e.preventDefault(); 
    toast.success("Your message has been sent successfully!"); 
    e.target.reset(); 
};

const Contact = () => {
    const { user } = useAuth();
    return (
        <div className=" px-6 md:px-10 py-6 md:py-10   ">
            <div className="max-w-7xl mx-auto">
                <motion.h2 className="text-4xl font-bold text-indigo-600 text-center mb-4" 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
                    Contact Us</motion.h2>
                <motion.p className="text-lg text-gray-600 dark:text-gray-50 text-center mb-12 w-[92%] md:w-[85%] mx-auto" 
                    initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} transition={{ duration: 0.6, delay: 0.2 }}>
                    Got a question or need support? We’re here to help — whether it’s tuition, tech, or collaboration.</motion.p>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div className="bg-white dark:dark:bg-gray-900 p-8 rounded-xl shadow-lg" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={staggerContainer}>
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Get in Touch</h3>
                        <motion.div className="flex items-start space-x-4 mb-5" variants={fadeInUp}><FaEnvelope className="text-indigo-500 text-xl shrink-0 mt-1" /><div><h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Email Address</h4><p className="text-gray-700 dark:text-gray-300">educonnect@gmail.com</p></div></motion.div>
                        <motion.div className="flex items-start space-x-4 mb-5" variants={fadeInUp}><FaPhoneAlt className="text-indigo-500 text-xl shrink-0 mt-1" /><div><h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Phone</h4><p className="text-gray-700 dark:text-gray-300">+8801761830425</p></div></motion.div>
                        <motion.div className="flex items-start space-x-4 mb-5" variants={fadeInUp}><FaMapMarkerAlt className="text-indigo-500 text-xl shrink-0 mt-1" /><div><h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Office Location</h4><p className="text-gray-700 dark:text-gray-300">Chittagong, Bangladesh (Headquarters)</p></div></motion.div>
                        <hr className="my-6 border-gray-200" />
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-50 mb-4">Support Hours</h3>
                        <motion.div className="flex items-start space-x-4 mb-3" variants={fadeInUp}><FaCalendarAlt className="text-indigo-500 text-xl shrink-0 mt-1" /><div><h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Working Days</h4><p className="text-gray-700 dark:text-gray-300">Saturday to Thursday (Friday Off)</p></div></motion.div>
                        <motion.div className="flex items-start space-x-4" variants={fadeInUp}><FaClock className="text-indigo-500 text-xl shrink-0 mt-1" /><div><h4 className="text-lg font-medium text-gray-900 dark:text-gray-50">Timing</h4><p className="text-gray-700 dark:text-gray-300">9:00 AM - 6:00 PM (GMT+6)</p></div></motion.div>
                    </motion.div>

                    <motion.form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg space-y-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp}>
                        <h3 className="text-2xl font-semibold text-indigo-600 mb-6">Send us a Message</h3>
                        <input type="text" defaultValue={user?.displayName || ""} readOnly={!!user?.displayName} placeholder="Your Name" className=" inputField inputFieldDark" />
                        <input type="email" defaultValue={user?.email || user?.providerData?.[0]?.email || ""} readOnly={!!(user?.email || user?.providerData?.[0]?.email)} placeholder="Your Email" className="inputField inputFieldDark" />
                        <input type="text" required placeholder="Subject" className="inputField inputFieldDark" />
                        <textarea rows="4" required placeholder="Your Message" className="inputField inputFieldDark"></textarea>
                        <button type="submit" className="w-full bg-indigo-600 text-white mt-2 py-3 rounded-lg hover:bg-indigo-700 transition duration-300 font-semibold shadow-md">Send Message</button>
                    </motion.form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Contact;