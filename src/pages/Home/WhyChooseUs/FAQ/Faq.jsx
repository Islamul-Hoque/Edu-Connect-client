import React from "react";
import { motion } from "framer-motion";

const Faq = () => {
const faqs = [
  {
    id: 1,
    question: "How do students hire a tutor?",
    answer: "Students post their tuition needs, review tutor applications, and confirm by making a secure Stripe payment."
  },
  {
    id: 2,
    question: "Are tuition posts verified?",
    answer: "Yes. Every tuition post is reviewed and approved by admins before tutors can apply, ensuring authenticity."
  },
  {
    id: 3,
    question: "How are payments handled?",
    answer: "All payments are processed via Stripe. Students and tutors can view complete transaction history in their dashboards."
  },
  {
    id: 4,
    question: "Can tutors track their revenue?",
    answer: "Yes. Tutors can view ongoing tuition details and revenue history directly from their dashboard."
  },
  {
    id: 5,
    question: "Is the dashboard secure?",
    answer: "EduConnect uses JWT authentication with role-based access to ensure secure dashboards for students, tutors, and admins."
  },
  {
    id: 6,
    question: "What analytics and overviews are available?",
    answer: "EduConnect provides role-based dashboards with tailored overviews: students can track tuition progress and payments, tutors can monitor applications and revenue history, and admins can view platform-wide earnings, transaction details, and user statistics with interactive charts."
  },
  {
    id: 7,
    question: "Can students choose their preferred tutor?",
    answer: "Yes. Students can confirm tutors based on their preferences, ensuring the right fit for their tuition needs."
  },
];

    return (
        <div className="px-6 md:px-10 pb-6 md:pb-10 ">
          <div className="">
            <div className="text-center  my-14">
                <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8 text-center">Frequently <span className="text-gradient"> Asked Questions</span></motion.h2>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} 
                className="mt-3  text-lg md:text-xl  mx-auto">Find clear answers about tuition posts, secure payments, and role‑based dashboards on EduConnect.</motion.p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                <motion.div key={faq.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
                    <div className=" bg-gray-50 dark:bg-gray-800  collapse collapse-arrow  border border-base-300">
                        <input type="radio" name="faq-accordion" defaultChecked={index === 0} />
                        <div className="collapse-title font-semibold text-[1.2rem]">{faq.question}</div>
                        <div className="collapse-content text-gray-600 dark:text-gray-50  text-lg leading-relaxed">{faq.answer}</div>
                    </div>
                </motion.div>
                ))}
            </div>
          </div>
        </div>
);
};

export default Faq;