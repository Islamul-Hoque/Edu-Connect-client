import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WhyChooseUs = () => {

const features = [
  {
    id: 1,
    title: "Secure Role-Based Dashboard",
    description: "EduConnect uses JWT authentication to provide secure, role-based access for students, tutors, and admins.",
    img: "https://cdn-icons-png.flaticon.com/128/2092/2092663.png", 
  },
  {
    id: 2,
    title: "Admin-Approved Tuition Posts",
    description: "All student tuition posts are reviewed and approved by admins, ensuring authenticity and preventing fake posts.",
    img: "https://cdn-icons-png.flaticon.com/128/9753/9753554.png", 

  },
  {
    id: 3,
    title: "Smart Tutor Choosing",
    description: "Students can confirm tutors based on their preferences, ensuring the right fit for every tuition need.",
    img: "https://cdn-icons-png.flaticon.com/128/12061/12061805.png", 

  },
  {
    id: 4,
    title: "Transparent Payments",
    description: "Stripe-powered payments with complete transaction history visible in dashboards for both students and tutors.", 
    img: "https://cdn-icons-png.flaticon.com/128/12551/12551056.png", 
  },
];

  return (
    <div className="px-6 md:px-10 py-6 md:py-10  ">
      <div className="max-w-7xl mx-auto">
        <motion.h2  variants={headingVariants}  initial="hidden"  whileInView="visible"  viewport={{ once: false, amount: 0.2 }}  className="text-3xl md:text-4xl font-bold text-indigo-600 mb-12 text-center"  > Why Choose Us </motion.h2>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} transition={{ staggerChildren: 0.15 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" >
          {features.map((feature, idx) => (
            <motion.div key={idx} variants={cardVariants} className="p-6 rounded-xl SectionCard shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-[1.05]" >
              
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex justify-center items-center">
                  <img src={feature.img} alt={feature.title} className="w-14 h-14 object-contain mb-2" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-50">{feature.title}</h3>
                <p className="text-base-content/70 leading-relaxed "> {feature.description} </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;  