import React from "react";

const Hero = () => {
    return (
        <div className="flex flex-col sm:flex-row border border-gray-300">
            {/* Hero LeftSide  */}
            <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 ">
                <div className=" text-gray-800">
                    <div className="flex items-center gap-2">
                        <p className="w-8 md:w-11 h-[2px] bg-gray-500"></p>
                        <p className="font-medium">OUR BESTSELLERS</p>
                    </div>

                    <h1 className=" prata-regular text-3xl sm:py-3 lg:text-4xl leading-relaxed ">
                        LATEST ARRIVALS
                    </h1>

                    <div className="flex items-center gap-2">
                        <p className="font-semibold">
                            SHOP NOW</p>
                        <p className="w-8 bg-gray-500 md:w-11 h-[2px]"></p>
                    </div>
                </div>
            </div>

            {/* hero roghtside section  */}
            <img src="/src/assets/hero_img.png" alt="" className="w-full sm:w-1/2" />
        </div>
    );
};

export default Hero;
