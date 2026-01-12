import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaBookOpen, FaChalkboardTeacher, FaUsers } from "react-icons/fa";

const resources = [
{
    id: 1,
    title: "Study Tips That Actually Work",
    description:  "Plan focused sessions, use spaced repetition, and track progress with weekly goals.",
    icon: <FaLightbulb className="text-yellow-500 text-2xl" />,
    badge: "Guides",
},
{
    id: 2,
    title: "Exam Preparation Essentials",
    description:  "Revise core concepts, practice timed papers, and prioritize weak chapters first.",
    icon: <FaBookOpen className="text-indigo-500 text-2xl" />,
    badge: "Preparation",
},
{
    id: 3,
    title: "Tutor Guidelines",
    description: "Set clear expectations, share lesson plans, and keep feedback loops open.",
    icon: <FaChalkboardTeacher className="text-emerald-500 text-2xl" />,
    badge: "Tutors",
},
{
    id: 4,
    title: "Community Etiquette",
    description:  "Respect, clarity, and timely responses. Keep communication on-platform for safety.",
    icon: <FaUsers className="text-purple-500 text-2xl" />,
    badge: "Community",
},
];

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" },
    }),
};

const ResourceHighlights = () => {
    return (
        <div className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.div  initial={{ opacity: 0, y: -16 }}  whileInView={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}
                    viewport={{ once: false, amount: 0.4 }}  className="text-center mb-10"  >
                    <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-300"> Learning Resources   </h2>
                    <p className="mt-3 text-gray-600 dark:text-gray-400"> Curated highlights for students, tutors, and community members—practical reads at a glance  </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {resources.map((item, i) => (
                    <motion.article key={item.id} className="group rounded-2xl border border-indigo-100/60 dark:border-gray-700 bg-indigo-50/40 dark:bg-gray-800 p-6 shadow-sm hover:shadow-md transition-shadow"
                        initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }}  custom={i} variants={cardVariants}  >
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-11 h-11 rounded-xl bg-white dark:bg-gray-700 flex items-center justify-center shadow">   {item.icon} </div>
                            <span className="text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-300"> {item.badge}  </span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-300"> {item.title}  </h3>
                        <p className="mt-2 text-sm text-gray-700 dark:text-gray-300"> {item.description} </p>
                    </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ResourceHighlights;