import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-10">
      {/* OurPolicy */}
      <div className=" md:flex  my-10  w-full justify-around ">
        <div className="flex flex-col items-center  ">
          <img
            src="/src/assets/frontend_assets/exchange_icon.png"
            alt=""
            className="w-12  py-5"
          />
          <p className="text-xs md:text-lg font-medium">Easy Exchange Policy</p>
          <p className="text-gray-500 text-xs md:text-sm  ">
            We offer hassle free exchange policy
          </p>
        </div>
        <div className="flex flex-col items-center  ">
          <img
            src="/src/assets/frontend_assets/quality_icon.png"
            alt=""
            className="w-12  py-5"
          />
          <p className="text-xs md:text-lg font-medium">7 Days Return Policy</p>
          <p className="text-gray-500 text-xs md:text-sm  ">
            We provide 7 days free return policy
          </p>
        </div>
        <div className="flex flex-col items-center  ">
          <img
            src="/src/assets/frontend_assets/support_img.png"
            alt=""
            className="w-10  py-6"
          />
          <p className="text-xs md:text-lg font-medium">
            Best Customer support
          </p>
          <p className="text-gray-500 text-xs md:text-sm  ">
            We provide 24/7 customer support
          </p>
        </div>
      </div>

      {/* Subscribe button  */}

      {/* Some changesin input need to be done  */}
      <div className="flex items-center flex-col mt-10 gap-4 my-18">
        <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
        <p className="text-gray-400 my-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className=" flex justify-between border border-gray-300 w-full ">
          <input
            className=" w-full px-4 focus:outline-none focus:ring-0 focus:border-transparent"
            type="email"
            placeholder="Enter your email "
          />
          <button className="text-sm text-white bg-black  cursor-pointer px-6 py-4">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
