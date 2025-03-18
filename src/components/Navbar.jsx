import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useShop } from "../context/ShopContext";
import logo_whiteedit from "../assets/logo_whiteedit.png";
import search_icon from "../assets/search_icon.png";
import profile_icon from "../assets/profile_icon.png";
import cart_icon from "../assets/cart_icon.png";
import menu_icon from "../assets/menu_icon.png";
import dropdown_icon from "../assets/dropdown_icon.png";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setShowSearch, getCartCount } = useShop();

  return (
    <nav className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <Link to={"/"} className="flex items-center gap-1">
        <motion.img
          src={logo_whiteedit}
          alt="logo"
          className="h-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-xl pt-2 font-medium logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          TRENDHIVE
        </motion.p>
      </Link>

      {/* Nav Links */}
      <ul className="hidden sm:flex gap-6 text-md text-gray-700">
        {["HOME", "COLLECTIONS", "ABOUT", "CONTACT"].map((item, index) => (
          <NavLink
            key={index}
            to={`/${item === "HOME" ? "" : item}`}
            className="relative group"
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
        <motion.img
          onClick={() => setShowSearch(true)}
          src={search_icon}
          alt="search"
          className="h-5 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        />

        {/* Profile Icon */}
        <div className="relative group">
          <Link to={"/Login"}>
            <motion.img
              src={profile_icon}
              alt="profile"
              className="h-5 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            />
          </Link>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden group-hover:block absolute right-0 pt-4"
            >
              <div className="flex flex-col w-36 bg-slate-100 text-gray-500 rounded-lg px-5 py-2 gap-2 items-center shadow-lg">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Cart Icon */}
        <Link to="/Cart" className="relative">
          <motion.img
            src={cart_icon}
            alt="cart"
            className="w-5 min-w-5"
            whileHover={{ scale: 1.1 }}
          />
          <motion.p
            className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {getCartCount()}
          </motion.p>
        </Link>

        {/* Mobile Menu Icon */}
        <motion.img
          onClick={() => setIsVisible(true)}
          src={menu_icon}
          alt="menu"
          className="w-5 sm:hidden cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col text-gray-600">
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
