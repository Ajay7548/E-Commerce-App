import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = ({ subtotal, currency}) => {
  const navigate = useNavigate()

  const [method, setMethod] = useState('cod');

  return (
    <div className=" grid md:grid-cols-2 gap-6  p-6">
      {/* Left Side */}
      <div className="w-full  ">
        <div className='text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        {/* ✅ Ensure the container has a set width and padding */}
        <div className=" px-6 py-12 w-full max-w-[600px] mx-auto rounded-md shadow-md">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="First name" />
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="Last name" />
            </div>
            <input className="border border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Email address" />
            <input className="border border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Street" />

            <div className="flex gap-4">
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="City" />
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="State" />
            </div>

            <div className="flex gap-4">
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="Zipcode" />
              <input className="border border-gray-400 px-3 py-2 w-full" type="text" placeholder="Country" />
            </div>

            <input className="border border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Phone" />
          </div>
        </div>
      </div>

      {/* right side  */}
      <div className='flex flex-col'>
      <div className=''>
        <CartTotal subtotal={subtotal} currency={currency} showButton={false} />
      </div>
      <div className='mt-12 '>
        <Title text1={'PAYMENT'} text2={'METHOD'} />

        <div className='flex gap-3  flex-col lg:flex-row px-2 py-4 justify-center shadow-md'>
          <div className='flex items-center gap-5 px-2 py-4 cursor-pointer border border-gray-200'>
            <p 
            onClick={()=>setMethod('stripe')}
            className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'stripe' ?  'bg-green-400' : ""} `}></p>
            <img className='h-5' src="/src/assets/stripe_logo.png" alt="" />
          </div>
          <div  className='flex items-center gap-5 px-2 py-4 cursor-pointer border border-gray-200'>
            <p 
            onClick={()=>setMethod('razorpay')}
            className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method  === 'razorpay' ? "bg-green-400" : ""} `}></p>
            <img className='h-5'  src="/src/assets/razorpay_logo.png" alt="" />
          </div>
          <div className='flex items-center gap-5 px-2 py-4 cursor-pointer border border-gray-200'>
            <p 
            onClick={()=>setMethod('cod')}
            className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${method === 'cod' ?  'bg-green-400' : ""} `}></p>
            <p className='text-gray-600 text-sm'>CASH ON DELIVERY</p>
          </div>
        </div>
        <div className=' flex justify-end '>
        <button
        onClick={()=>navigate('/Order')}
        className="bg-black py-3 mt-6 px-16 text-sm  text-white rounded-sm cursor-pointer hover:bg-gray-800">PLACE ORDER</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
