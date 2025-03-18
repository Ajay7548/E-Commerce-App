import React from 'react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductItems = ({ id, name, image, price }) => {
  const { currency } = useShop();

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link 
      to={`/Product/${id}`} 
      className="text-gray-800 cursor-pointer"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden bg-white shadow-md rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
      >
        {/* Image Section */}
        <motion.img
          onClick={handleClick}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl w-full h-auto object-cover transition-transform"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
      </motion.div>

      {/* Product Details */}
      <div className="mt-2 text-center">
        <p className="text-base font-medium">{name}</p>
        <p className="text-lg font-semibold text-blue-500">
          {currency}{price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItems;
