
import React from "react";

// import exchangeLight from "../assets/exchange_light.png";
import exchange_icon from "../assets/exchange_icon.png";
// import qualityLight from "../assets/quality_light.png";
import quality_icon from "../assets/quality_icon.png";
// import supportLight from "../assets/support_light.png";
import support_img from "../assets/support_img.png";
import { Headphones, Repeat, RotateCw, Sun } from "lucide-react";
import { useDarkMode } from "../context/ThemeContext";

const OurPolicy = () => {
const {darkMode} = useDarkMode()

  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      {/* Policy Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-5xl">
        {/* Exchange Policy */}
        <div className="flex flex-col items-center text-center p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg">
          <img
            src={darkMode ? Sun : Repeat}
            alt="Easy Exchange Policy"
            className="w-16 py-4"
          />
          <p className="text-lg font-semibold mt-2">Easy Exchange Policy</p>
          <p className="text-gray-500 dark:text-white text-sm mt-1">
            We offer hassle-free exchange policy
          </p>
        </div>

        {/* Return Policy */}
        <div className="flex flex-col items-center text-center p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg">
          <img
            src={darkMode ? quality_icon : RotateCw}
            alt="7 Days Return Policy"
            className="w-16 py-4"
          />
          <p className="text-lg font-semibold mt-2">7 Days Return Policy</p>
          <p className="text-gray-500 dark:text-white text-sm mt-1">
            We provide 7 days free return policy
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center text-center p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg">
          <img
            src={`${darkMode ? support_img : Headphones}`}
            alt="Best Customer Support"
            className="w-16 py-4"
          />
          <p className="text-lg font-semibold mt-2">Best Customer Support</p>
          <p className="text-gray-500 dark:text-white text-sm mt-1">
            We provide 24/7 customer support
          </p>
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="flex flex-col items-center mt-16 w-full max-w-lg text-center">
        <p className="text-3xl dark:text-white font-semibold">
          Subscribe Now & Get 20% Off
        </p>
        <p className="text-gray-500 dark:text-gray-600 mt-2">
          Get exclusive deals and updates delivered to your inbox.
        </p>
        <div className="flex items-center w-full border dark:border-gray-800 border-gray-300 rounded-full mt-6 overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 focus:outline-none dark:placeholder-gray-300 text-gray-700"
          />
          <button className="bg-black dark:bg-gray-800 text-white text-sm font-medium px-6 py-3 transition duration-300 hover:bg-gray-600">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
