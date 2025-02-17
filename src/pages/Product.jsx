import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { currency } from "../context";
import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  // console.log(productId);
  const { products,addToCart } = useShop();
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  
  // const fetchProductData = () => {
   
  useEffect(() => {
    const foundProduct = products.find((item) => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Set the first image of the product
    }
  }, [productId, products]);

  

  return productData ? (
    <div>
      <div className=" pt-10 transition-opacity ease-in duration-500 opacity-100">
        {/* ProductData  */}
        <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
          {/* Prodcut Image  */}
          <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row  ">
            <div className="flex sm:flex-col overflow-x-auto  justify-between sm:justify-normal sm:w-[18%] w-full">
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className={`w-[24%] sm:mb-3 sm:w-full flex-shrink-0 cursor-pointer`}
                />
              ))}
            </div>
            <div className="w-full sm:w-[80%]">
              <img className="w-ful h-auto" src={image} alt="" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
            <div className="flex items-center gap-1 mt-2">
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className="pl-2">(122)</p>
            </div>
            <p className="mt-5 text-3xl font-medium">
              {currency}
              {productData.price}
            </p>
            <p className="mt-5 text-gray-500 md:w-4/5">
              {productData.description}
            </p>
            <div className="flex flex-col gap-4 my-8">
              <p>Select Size:</p>
              <div className="flex gap-2">
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border border-gray-300 py-2 px-4 bg-gray-100 cursor-pointer ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <button 
            onClick={()=>addToCart(productData._id,size)}
            className=" active:bg-gray-700 mt-3 text-sm w-fit border px-8 py-3 bg-black text-white cursor-pointer transition ease-in-out">
              ADD TO CART
            </button>

            <div className="flex flex-col">
              <hr className="w-full my-4 text-gray-300" />
              <p className="text-gray-500 text-sm">100% Original product.</p>
              <p className="text-gray-500 text-sm">
                Cash on delivery is available on this product.
              </p>
              <p className="text-gray-500 text-sm">
                Easy return and exchange policy within 7 days.
              </p>
            </div>
          </div>
        </div>

        <div className="flex pt-20 ">
          <p className="border border-gray-200 px-4 py-2 text-sm font-semibold">
            Description
          </p>
          <p className="border border-gray-200 px-4 py-2 text-sm">
            Review(122)
          </p>
        </div>
        <div className="flex flex-col gap-1 border border-gray-200">
          <p className=" text-gray-500 px-6 py-4  text-sm">
            An e-commerce website is an online platform that facilitates the
            buying and selling of products or services over the internet. It
            serves as a virtual marketplace where businesses and individuals can
            showcase their products, interact with customers, and conduct
            transactions without the need for a physical presence. E-commerce
            websites have gained immense popularity due to their convenience,
            accessibility, and the global reach they offer.
          </p>
          <p className=" text-gray-500 px-6 py-4 text-sm">
            E-commerce websites typically display products or services along
            with detailed descriptions, images, prices, and any available
            variations (e.g., sizes, colors). Each product usually has its own
            dedicated page with relevant information.
          </p>
        </div>
      </div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
