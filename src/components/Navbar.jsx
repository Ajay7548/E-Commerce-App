import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useShop } from "../context/ShopContext";
import whiteLogo from "../assets/whiteLogo.png";
import blaclogo from "../assets/blaclogo.png";
import dropdown_icon from "../assets/dropdown_icon.png";
import { useDarkMode } from "../context/ThemeContext";
import { Moon, Search, Sun, ShoppingCart, User, Menu, MoonIcon } from "lucide-react";
import { div, span } from "framer-motion/client";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setShowSearch, getCartCount } = useShop();
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <nav className="flex items-center justify-between py-5 px-2 sm:px-[3vw] md:px-[4vw] lg:px-[9vw]  w-full dark:bg-black bg-white font-medium relative">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-1">
        <motion.img
          src={darkMode ? whiteLogo : blaclogo} // Correctly switching logos
          alt="logo"
          className="h-12" // Keeping className only for styling
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-xl text-gray-700 dark:text-gray-300 pt-2 font-medium logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          TRENDHIVE
        </motion.p>
      </Link>

      {/* Nav Links */}
      <ul className="hidden sm:flex gap-6 text-md">
        {["HOME", "COLLECTIONS", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item === "HOME" ? "" : item}`}
            className="relative group text-black dark:text-gray-400"
          >
            <p>{item}</p>
            <motion.hr
              className="w-2/4 h-[2px] bg-gray-700 absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 hidden group-hover:block"
              layoutId="underline"
            />
          </NavLink>
        ))}
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-4">
        {/* Search Icon */}
        <motion.div
          onClick={() => setShowSearch(true)}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
          className="h-6 cursor-pointer"
        >
          <Search className={`w-5 h-6 ${darkMode ? "text-white" : "text-black"}`} />
        </motion.div>

        {/* Profile Icon */}
        <Link to="/Login">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer"
          >
            <User className={`w-5 h-5 ${darkMode ? "text-white" : "text-black"}`} />
          </motion.div>
        </Link>

        {/* Cart Icon */}
        <Link to="/Cart" className="relative">
          <motion.div whileHover={{ scale: 1.1 }}>
            <ShoppingCart className={`w-5 h-5 ${darkMode ? "text-white" : "text-black"}`} />
          </motion.div>
          <motion.p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {getCartCount()}
          </motion.p>
        </Link>

        {/* Dark Mode Toggle */}
        <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer flex">
          {/* {darkMode ? <span className="flex items-center border p-1.5 rounded-lg gap-2 text-black dark:text-white"><Sun className="w-5 h-5 text-white" />Light Mode</span> : <span className="flex items-center gap-2 text-black dark:text-white"><MoonIcon className="w-5 h-5 text-black" />Dark Mode</span>} */}
          {darkMode ? <span className="p-2 bg-gray-700 rounded-full"><Sun className="text-white"/></span> :<span className="p-2 bg-gray-200 rounded-full"><Moon className="text-black"/></span>}
        </div>

        {/* Mobile Menu Icon */}
        <motion.div
          onClick={() => setIsVisible(true)}
          whileHover={{ scale: 1.1 }}
          className="sm:hidden cursor-pointer"
        >
          <Menu className={`w-5 h-5 ${darkMode ? "text-white" : "text-black"}`} />
        </motion.div>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-64 bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-300 shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col">
              <div
                onClick={() => setIsVisible(false)}
                className="flex items-center gap-4 p-6 cursor-pointer"
              >
                <motion.img
                  src={dropdown_icon}
                  alt="close"
                  className="h-4 rotate-180"
                  whileHover={{ scale: 1.1 }}
                />
                <p>Back</p>
              </div>

              {["Home", "Collections", "About", "Contact"].map((item, index) => (
                <NavLink
                  key={index}
                  onClick={() => setIsVisible(false)}
                  to={`/${item.toUpperCase()}`}
                  className="pl-6 py-3 border-b"
                >
                  {item}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
