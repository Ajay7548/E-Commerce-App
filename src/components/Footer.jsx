import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import whiteLogo from "../assets/whiteLogo.png";
import blaclogo from "../assets/blaclogo.png";
import { useDarkMode } from "../context/ThemeContext";

const Footer = () => {

  const {darkMode} =useDarkMode()
  return (
    <div className=" pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-12 text-sm">
          
          {/* Logo & About Section */}
          <div>
            <Link to="/" className="flex items-center gap-2 pb-4">
              <img src={darkMode? blaclogo : whiteLogo } alt="TrendHive Logo" className="h-12" />
              <p className="text-2xl font-bold text-gray-700 dark:text-white">TRENDHIVE</p>
            </Link>
            <p className=" dark:text-white text-gray-600 leading-relaxed max-w-md">
              Your one-stop destination for the latest fashion trends. Quality, style, and convenience at your fingertips.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className=" dark:text-white text-gray-600 hover:text-gray-900 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className=" dark:text-white text-gray-600 hover:text-gray-900 transition">
                <FaInstagram size={20} />
              </a>
              <a href="#" className=" dark:text-white text-gray-600 hover:text-gray-900 transition">
                <FaTwitter size={20} />
              </a>
              <a href="#" className=" dark:text-white text-gray-600 hover:text-gray-900 transition">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="dark:text-white text-gray-900 font-semibold text-lg mb-4">COMPANY</p>
            <ul className="dark:text-gray-400 text-gray-600 space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-900 transition">Home</Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-gray-900 transition">About Us</Link>
              </li>
              <li>
                <Link to="#" className="hover:text-gray-900 transition">Delivery</Link>
              </li>
              <li>
                <Link to="/About" className="hover:text-gray-900 transition">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-gray-900 dark:text-white font-semibold text-lg mb-4">GET IN TOUCH</p>
            <p className="text-gray-700 dark:text-gray-400">📞 +91-XXX XXX XXXX</p>
            <p className="text-gray-700 dark:text-gray-400">📧 ajaymourya@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t dark:border-gray-700 border-gray-300 pt-4">
        <p className="text-gray-600 dark:text-white text-sm">
          &copy; 2024 Ajay Mourya - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
