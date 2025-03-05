import React from 'react'
import Subscribe from '../components/Subscribe'
import Title from '../components/Title'
import contact_img from '../assets/contact_img.png'

const Contact = () => {
  return (
    <div className='md:px-[6%]'>

        <div className='text-2xl text-center mt-10'>
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>

      <div className='mt-8 grid md:grid-cols-2 gap-10 py-10  '>
        <div>
          <img src={contact_img} alt="" />
        </div>

        <div className=''>
          <div className='flex flex-col '>
            <p className='py-8 text-xl font-semibold text-gray-600'>Our Store</p>
            <span className='text-gray-500'>54709 Willms Station</span>
            <span className='text-gray-500 pb-8'>Suite 350, Washington, USA</span>
            <span className='text-gray-500'>Tel: (415) 555-0132</span>
            <span className='text-gray-500'>Email: admin@forever.com</span>
          </div>

          <div>
            <p className='py-8 text-xl font-semibold text-gray-600'>Careers at Forever</p>
            <p className='text-gray-500 pb-5'>Learn more about our teams and job openings.</p>
            <button className='border px-6 py-3 hover:text-white hover:bg-black cursor-pointer transition ease-in-out'>Explore Jobs</button>
          </div>
        </div>

      

      </div>
      <Subscribe/>
    </div>
  )
}

export default Contact