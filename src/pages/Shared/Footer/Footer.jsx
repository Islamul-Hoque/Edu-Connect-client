import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Logo from '../../../components/Logo/Logo';

const Footer = () => {

  return (
    <footer className="bg-indigo-50 dark:bg-gray-900  text-gray-800 dark:text-gray-100  pt-10 pb-6 border-t border-gray-200 dark:border-gray-700">
      <section className='max-w-7xl mx-auto'>

      
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Logo/>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Our platform provides a complete solution for students, tutors, and parents to find quality tuition, connect seamlessly, and manage learning with trust and transparency.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 footerLinkHeading">Quick Links</h3>
            <ul className="space-y-2  text-sm">
              <li><Link to="/" className="footerLink">Home</Link></li>
              <li><Link to="/all-tuitions" className="footerLink">Tuitions</Link></li>
              <li><Link to="/all-tutors" className="footerLink">Tutors</Link></li>
              {/* <li><Link to="/about" className="footerLink">About Us</Link></li> */}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 footerLinkHeading">Resources</h3>
            <ul className="space-y-2 text-sm">
              {/* <li><a href='#faq' className="footerLink">FAQ</a></li> */}
              {/* <li><a href='' className="footerLink">Privacy Policy</a></li>
              <li><a href='' className="footerLink">Terms of Service</a></li> */}
              <li><Link to="/about" className="footerLink">About Us</Link></li>
              <li><Link to='/contact' className="footerLink">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 footerLinkHeading">Follow Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="https://www.facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL" target="_blank" className=" dark:bg-gray-700 dark:text-gray-50 bg-gray-200  text-gray-600  p-[0.3rem] rounded-full transition transform hover:scale-110 hover:text-white hover:bg-[#1877F2] "><FaFacebook /></a>
              <a href="https://wa.me/01999932122" target="_blank" className="dark:bg-gray-700 bg-gray-200 dark:text-gray-50 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#25D366] hover:text-white"><FaWhatsapp /></a>
              <a href="https://discord.com/channels/1432222297447469077/1432222298462752841" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#5865F2] hover:text-white"><FaDiscord /></a>
              <a href="https://www.linkedin.com/in/Islamul-Hoque" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-[#0A66C2] hover:text-white"><FaLinkedinIn /></a>
              <a href="https://x.com" target="_blank" className="dark:bg-gray-700 dark:text-gray-50 bg-gray-200 text-gray-600 p-[0.3rem] rounded-full transition transform hover:scale-110 hover:bg-black hover:text-white"><FaXTwitter /></a>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        <div className="text-center text-sm text-gray-500 dark:text-gray-50 ">&copy; {new Date().getFullYear()} EduConnect. All rights reserved.</div>
      </div>
      </section>
    </footer>
  );
};

export default Footer;