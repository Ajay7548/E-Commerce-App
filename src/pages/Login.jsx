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
    <div className=' flex justify-center  items-center pt-18'>
      <div className='flex flex-col  w-full md:w-1/2'>
        <div className="flex justify-center gap-2 items-center mb-2">
          <p className="text-4xl py-6 prata-regular"> {isSignUp ? "Sign Up" : "Login"} </p>
          {/* this will create a line like dash ----  */}
          <p className="w-10 sm:w-12 h-[1.5px] lg:h-[2px] bg-black"></p>
        </div>
        <form onSubmit={submitHandler}>
          {isSignUp && (
            <>
              <div className='flex flex-col px-4 py-4 gap-4 w-full'>
                <input required className="border px-4 py-2 " type="text" placeholder='Name' />
              </div>
            </>
          )}
            <div className='flex flex-col px-4 gap-4 w-full'>
                <input required className="border px-4 py-2 " type="email" placeholder='Email' />
                <input required className="border px-4 py-2 " type="password" placeholder='Password' />
              </div>


          <div className='flex justify-between cursor-pointer  py-2 mx-4'>
            <p>Create Account?</p>
            <p onClick={togglefrom}>
              {isSignUp ? "Create account" : "Login Here"}
            </p>
          
          </div>
         

          <div className='flex justify-center mt-2'>
            <button type="submit" className='bg-black hover:bg-gray-800 cursor-pointer text-white px-8 py-2 prata-regular'>
              {isSignUp ? "Sign up" : "Sign in"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login