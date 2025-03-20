import React from "react";
import { motion } from "framer-motion";
import hero_Img from "../assets/hero_img.png";

const Hero = () => {
  return (
    <motion.div  
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }} 
      className="flex flex-col sm:flex-row border border-gray-200 dark:border-gray-800"
    >
      {/* Left Side */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0"
      >
        <div className="dark:text-gray-300 text-gray-800">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-500"></p>
            <p className="font-medium">OUR BESTSELLERS</p>
          </div>

          <h1 className="prata-regular text-3xl sm:py-3 lg:text-[40px] leading-relaxed">
            LATEST ARRIVALS
          </h1>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            transition={{ duration: 0.3 }} 
            className="flex items-center gap-2 cursor-pointer"
          >
            <p className="font-semibold">SHOP NOW</p>
            <p className="w-8 bg-gray-500 md:w-11 h-[2px]"></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.img 
        initial={{ x: 50, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.3 }} 
        src={hero_Img} 
        alt="no-image" 
        className="w-full sm:w-1/2"
        whileHover={{ scale: 1.05 }}
        // transition={{ duration: 0.4 }}
      />
    </motion.div>
  );
};

export default Hero;
