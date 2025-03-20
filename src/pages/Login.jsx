import React, { useState } from 'react'
import Title from '../components/Title'

const Login = () => {

  const [isSignUp, setSignUp] = useState(false)

  const togglefrom = () => {
    setSignUp(!isSignUp)
  }

  const submitHandler = async(e) =>{
    e.preventDefaullt()
  }

  return (
    <div className=' flex justify-center  items-center pt-18 mb-18'>
      <div className='flex flex-col  w-full md:w-1/2'>
        <div className="flex justify-center gap-2 items-center mb-2">
          <p className="pl-12 text-4xl py-6 prata-regular text-black dark:text-white"> {isSignUp ? "Sign Up" : "Login"} </p>
          {/* this will create a line like dash ----  */}
          <p className="w-10 sm:w-12 h-[1.5px] lg:h-[2px] dark:bg-white bg-black"></p>
        </div>
        <form onSubmit={submitHandler}>
          {isSignUp && (
            <>
              <div className='flex flex-col px-4 py-4 gap-4 w-full'>
                <input required className="border dark:border-gray-300 px-4 py-2 placeholder:text-gray-500 " type="text" placeholder='Name' />
              </div>
            </>
          )}
            <div className='flex flex-col px-4 gap-4 w-full'>
                <input required className="border dark:border-gray-300 px-4 py-2 placeholder:text-gray-500 " type="email" placeholder='Email' />
                <input required className="border dark:border-gray-300 px-4 py-2 placeholder:text-gray-500 " type="password" placeholder='Password' />
              </div>


          <div className='flex justify-between cursor-pointer  py-2 mx-4'>
            <p className='text-black dark:text-gray-300'>Forgot password?</p>
            <p  className="text-black dark:text-gray-300" onClick={togglefrom}>
              {isSignUp ? "Login" : "Create account"}
            </p>
          
          </div>
         

          <div className='flex justify-center mt-2'>
            <button type="submit" className='bg-gray-800  dark:text-gray-300 hover:bg-gray-800 cursor-pointer text-white px-8 py-2 prata-regular'>
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login