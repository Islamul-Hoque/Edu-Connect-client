import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {  Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaSearch, FaChalkboardTeacher, FaShieldAlt } from "react-icons/fa";

const slides = [
  {
    title: "Find Tuition Easily",
    desc: "Browse hundreds of verified tuition posts from across the city. Filter by subject, location, and budget to quickly discover the opportunities that match your needs.",
    img: "https://i.ibb.co.com/WNzsSqBq/1st.png",
    btnText: "Find Tuitions",
    btnLink: "/all-tuitions",
    icon: "FaSearch"
  },
  {
    title: "Join as Tutor",
    desc: "Create your profile and showcase your expertise. Connect with motivated students, build your reputation, and start earning by teaching the subjects you love.",
    // img: "https://i.ibb.co.com/fVMfzsRF/hand-drawn-online-tutor-illustration.png",
    img: "https://i.ibb.co.com/F4s2WMT4/tu.png",
    btnText: "Join Now",
    btnLink: "/register",
    icon: "FaChalkboardTeacher"
  },
  {
    title: "Secure & Verified",
    desc: "We ensure every tutor is verified and every payment is secure. Our trusted platform makes communication safe and transparent, so you can focus on learning and teaching.",
    img: "https://i.ibb.co.com/JFW8RmhB/trust-safety.png",
    btnText: "Learn More",
    btnLink: "/about",
    icon: "FaShieldAlt"
  }
];

const iconMap = { 
  FaSearch: <FaSearch className="text-lg" />, 
  FaChalkboardTeacher: <FaChalkboardTeacher className="text-lg" />, 
  FaShieldAlt: <FaShieldAlt className="text-lg" /> 
};

const Hero = () => {
  return (
    <div className="relative min-h-[65vh] flex items-center justify-center bg-linear-to-r from-indigo-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-6 md:px-12">
      <Swiper  modules={[Autoplay, Pagination]} autoplay={{ delay: 3000, disableOnInteraction: false }} loop={true} pagination={{ clickable: true }}  className="w-full " >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <motion.div  className="order-1 md:order-2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} >
                <img src={slide.img} alt={slide.title} className="w-[280px] md:w-[400px]  py-4 " />
              </motion.div>

              <motion.div className="order-2 md:order-1 text-center md:text-left  py-4 max-w-xl" initial={{ opacity: 0, y: -20 }}  animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  >
                <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">  {slide.title}  </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{slide.desc}</p>
                <Link to={slide.btnLink} className="btn  bg-indigo-500 text-white hover:bg-indigo-700 shadow-md mb-6 sm:mb-0" > 
                {iconMap[slide.icon]} {slide.btnText} </Link>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;