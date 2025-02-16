import React from 'react'

const Product = () => {
  return (
    <div>
      
      <div className='grid md:grid-cols-2 gap-12 '>

      <div className='flex gap-3 overflow-hidden w-fit'>
        <img src="/src/assets/frontend_assets/p_img1.png" alt="" className='h-28 hidden md:block ' />
        <img src="/src/assets/frontend_assets/p_img1.png" alt="" className='h-auto' />
      </div>

      <div className='flex flex-col gap-4 py-3 '>
        <p className='text-2xl font-medium'>Boy Round Neck Pure Cotton T-shirt</p>
        <div className='flex gap-1 items-center'>
        <img src="/src/assets/frontend_assets/star_icon.png" alt="" className='h-[14px]' />
        <img src="/src/assets/frontend_assets/star_icon.png" alt=""  className='h-[14px]'/>
        <img src="/src/assets/frontend_assets/star_icon.png" alt="" className='h-[14px]' />
        <img src="/src/assets/frontend_assets/star_icon.png" alt=""  className='h-[14px]'/>
        <img src="/src/assets/frontend_assets/star_dull_icon.png" alt="" className='h-[14px]'/>
        <p>(122)</p>
        </div>
        <p className='text-3xl font-medium'>$30</p>
        <p className='text-gray-400 py-4 '>A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.</p>
        <p className='text-gray-800'>Select size:</p>
        <div className='flex gap-2'>
          <span className='px-4 py-2 cursor-pointer bg-gray-100'>S</span>
          <span className='px-4 py-2 cursor-pointer bg-gray-100'>M</span>
          <span className='px-4 py-2 cursor-pointer bg-gray-100'>L</span>
          <span className='px-4 py-2 cursor-pointer bg-gray-100'>XL</span>
          <span className='px-4 py-2 cursor-pointer bg-gray-100'>XXL</span>
        </div>

        <button className='mt-3 text-sm w-fit border px-8 py-3 bg-black text-white cursor-pointer transition ease-in-out'>ADD TO CART</button>

        <div className='flex flex-col'>
          <hr className='w-full my-4 text-gray-400' />
          <p className='text-gray-500'>100% Original product.</p>
          <p className='text-gray-500'>Cash on delivery is available on this product.</p>
          <p className='text-gray-500'>Easy return and exchange policy within 7 days.</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default Product