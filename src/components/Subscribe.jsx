import React from "react";

const Subscribe = () => {
  return (
    <div className="flex flex-col items-center text-center py-16 px-6">
      <p className="text-3xl font-semibold">Subscribe Now & Get 20% Off</p>
      <p className="text-gray-500 mt-2 max-w-lg">
        Stay updated with the latest trends and exclusive offers delivered to your inbox.
      </p>

      <div className="flex items-center w-full max-w-lg border border-gray-300 rounded-full mt-6 overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button className="bg-black text-white text-sm font-medium px-6 py-3 transition duration-300 hover:bg-gray-800">
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
