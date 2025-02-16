import React from 'react'

const Subscribe = () => {
  return (
    <div>
        <div className="flex items-center flex-col mt-10 gap-4 my-18">
        <p className="text-2xl font-medium">Subscribe now & get 20% off</p>
        <p className="text-gray-400 my-2 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className=" w-full flex justify-between border border-gray-300 md:w-[50%] ">
          <input
            className="text-gray-400 w-full px-4 focus:outline-none focus:ring-0 focus:border-transparent"
            type="email"
            placeholder="Enter your email "
          />
          <button className="text-sm text-white bg-black  cursor-pointer px-10 py-4">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe