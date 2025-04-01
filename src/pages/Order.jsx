import React from "react";
import { useShop } from "../context/ShopContext";
import Title from "../components/Title";

const Order = () => {
  const { cartItems, products, currency } = useShop();
  const date = new Date(Date.now()).toLocaleDateString();

  // Extract cart data
  const cartData = [];
  for (let items in cartItems) {
    for (let size in cartItems[items]) {
      if (cartItems[items][size] > 0) {
        const product = products.find((p) => p._id === items);
        if (product) {
          cartData.push({
            _id: items,
            size,
            quantity: cartItems[items][size],
            price: product.price,
            name: product.name,
            image: product.image[0], // First image
          });
        }
      }
    }
  }

  return (
    <div className="pt-28">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      <div>
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <div key={index} className="py-3 border-b text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-6 text-sm">
                <img className="w-16 sm:w-20" src={item.image} alt={item.name} />
                <div>
                  <p className="sm:text-base font-medium dark:text-white text-black">{item.name}</p>
                  <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                    <p className="text-lg dark:text-gray-300">{currency}{item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-2">Date: <span className="text-gray-500">{date}</span></p>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-between">
                <div className="flex items-center gap-2">
                  <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                  <p className="text-sm md:text-base">Ready to Ship</p>
                </div>
                <button className="border px-4 py-2 dark:text-white text-black font-medium rounded-sm cursor-pointer">Track Order</button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">No orders placed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Order;
