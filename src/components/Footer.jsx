import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_whiteedit from '../assets/logo_whiteedit.png'


const Footer = () => {
  // const [isActive,setIsActive]= useState(false)
  return (
    <div className="">

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

        <div>
          <Link to={"/"} className="flex items-center gap-1 pb-6 ">
                    <img
                      src={logo_whiteedit}
                      alt=""
                      className="h-12"
                    />
                    <p className="text-xl pt-2 font-medium logo">TRENDHIVE</p>
                  </Link>
          <p className=" text-gray-600 text-sm md:w-[65%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            magni ut nemo sapiente doloribus incidunt fugiat dolor iste odit
            necessitatibus assumenda, sed fugit, omnis ratione similique commodi
            quod est laborum.
          </p>
        </div>

        <div>
          <p className="text-black font-semibold  text-xl py-5">COMPANY</p>
          <ul className="text-gray-600  text-sm flex flex-col gap-1 ">
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/About"}>
              <li>About us</li>
            </Link>
            <Link>
              <li>Delivery</li>
            </Link>
            <Link to={"/About"}>
              <li>Privacy policy</li>
            </Link>
          </ul>
        </div>

        <div>
          <p className="text-black font-semibold  text-xl py-5">GET IN TOUCH</p>
          <p className="text-gray-600 text-sm">+91-XXX XXX XXXX </p>
          <span className="text-gray-600 text-sm">ajaymourya@gmail.com</span>
        </div>
      </div>


      <div className="text-center mt-10">
        <hr className="text-gray-400 w-full py-1" />
        <p className="m-auto text-gray-800 py-3">
          Copyright 2024@ Ajay Mourya - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
