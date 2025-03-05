import React, { useState } from "react";
import { NavLink, Link, useLocation, } from "react-router-dom";
import SearchBox from "./SearchBox";
import { useShop } from "../context/ShopContext";
import logo_whiteedit from '../assets/logo_whiteedit.png'
import search_icon from '../assets/search_icon.png'
import profile_icon from '../assets/profile_icon.png'
import cart_icon from '../assets/cart_icon.png'
import menu_icon from '../assets/menu_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const {setShowSearch,getCartCount} = useShop()

  return (
    <div className="">
      <nav className=" flex items-center justify-between py-5 font-medium ">
        <Link to={"/"} className="flex items-center gap-1 ">
          <img
            src={logo_whiteedit}
            alt=""
            className="h-12"
          />
          <p className="text-xl pt-2 font-medium logo">TRENDHIVE</p>
        </Link>

        <ul className="hidden sm:flex gap-5 text-md text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            {/* a.active hr{display:block} in css file */}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink
            to="/Collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTIONS</p>
            {/* a.active hr{display:block} in css file */}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/About" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            {/* a.active hr{display:block} in css file */}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>

          <NavLink to="/Contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            {/* a.active hr{display:block} in css file */}
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-4">
          <img
            onClick={()=>setShowSearch(true)}
            src={search_icon}
            alt=""
            className="h-5 cursor-pointer"
          />
          <div className="group relative">
            <Link to={'/Login'}>
            <img
              src={profile_icon}
              alt=""
              className="h-5 cursor-pointer"
            />
            </Link>
            <div className="group-hover:block dropdown-menu hidden text-center absolute right-0 pt-4">
              <div className="flex flex-col w-36 bg-slate-100 text-gray-500 rounded-lg px-5 py-2 gap-2 items-center">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Order</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          <Link to="/Cart" className="relative">
            <img
              src={cart_icon}
              alt=""
              className="w-5 min-w-5"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
          <img
            onClick={() => setIsVisible(true)}
            src={menu_icon}
            alt=""
            className="w-5 sm:hidden cursor-pointer"
          />

          {/* SideBar Menu  */}

          <div
            className={`absolute top-0 right-0 bottom-0  overflow-hidden bg-white transition-all  ${
              isVisible ? "w-full" : " w-0"
            } `}
          >
            <div className="flex flex-col text-gray-600 ">
              <div
                onClick={() => setIsVisible(false)}
                className="flex items-center gap-4 p-6"
              >
                <img
                  src={dropdown_icon}
                  alt=""
                  className="h-4 rotate-180 cursor-pointer"
                />
                <p className="cursor-pointer">Back</p>
              </div>

              <NavLink
                onClick={() => setIsVisible(false)}
                to="/"
                className={`pl-6 py-2 border  `}
              >
                Home
              </NavLink>
              <NavLink
                onClick={() => setIsVisible(false)}
                to="/COLLECTION"
                className={`pl-6 py-2 border  `}
              >
                COLLECTION
              </NavLink>
              <NavLink
                onClick={() => setIsVisible(false)}
                to="/ABOUT"
                className={`pl-6 py-2 border  `}
              >
                ABOUT
              </NavLink>
              <NavLink
                onClick={() => setIsVisible(false)}
                to="/CONTACT"
                className={`pl-6 py-2  border`}
              >
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
