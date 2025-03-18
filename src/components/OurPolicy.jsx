import React from "react";
import exchange_icon from "../assets/exchange_icon.png";
import quality_icon from "../assets/quality_icon.png";
import support_img from "../assets/support_img.png";

const OurPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      {/* Policy Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 w-full max-w-5xl">
        {[
          {
            img: exchange_icon,
            title: "Easy Exchange Policy",
            desc: "We offer hassle-free exchange policy",
          },
          {
            img: quality_icon,
            title: "7 Days Return Policy",
            desc: "We provide 7 days free return policy",
          },
          {
            img: support_img,
            title: "Best Customer Support",
            desc: "We provide 24/7 customer support",
          },
        ].map((policy, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-5 transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg"
          >
            <img src={policy.img} alt={policy.title} className="w-16 py-4" />
            <p className="text-lg font-semibold mt-2">{policy.title}</p>
            <p className="text-gray-500 text-sm mt-1">{policy.desc}</p>
          </div>
        ))}
      </div>

      {/* Subscribe Section */}
      <div className="flex flex-col items-center mt-16 w-full max-w-lg text-center">
        <p className="text-3xl font-semibold">Subscribe Now & Get 20% Off</p>
        <p className="text-gray-500 mt-2">
          Get exclusive deals and updates delivered to your inbox.
        </p>
        <div className="flex items-center w-full border border-gray-300 rounded-full mt-6 overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 focus:outline-none text-gray-700"
          />
          <button className="bg-black text-white text-sm font-medium px-6 py-3 transition duration-300 hover:bg-gray-800">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
