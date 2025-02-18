import React from 'react'
import { useShop } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItems = ({id,name,image,price}) => {

    //currency should be in oject 
    const {currency} = useShop()
    
    
    const handleClick = () => {
          // Scroll to the top of the page
          window.scrollTo(0, 0);
          // Navigate to the product page or perform any other actions
    };

  return (
    <Link to={`/Product/${id}`} className='text-gray-700 cursor-pointer'>
        <div className='overflow-hidden'>
          {/* hoverscale:100 will big imag slightly */}
            <img  
            onClick={handleClick}
            className='hover:scale-110 transi ease-in-out ' src={image[0]} alt="" />
        </div>
        <p className='pt-2 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItems