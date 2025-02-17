import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import { useShop } from "../context/ShopContext";

const Cart = () => {
  const { products, currency, cartItems, updateQuantity } = useShop();
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const shippingFee = 5; // Example flat shipping fee

  useEffect(() => {
    let tempData = [];
    let total = 0;

    for (let items in cartItems) {
      for (let size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          const product = products.find((p) => p._id === items);
          if (product) {
            let itemSubtotal = product.price * cartItems[items][size];
            total += itemSubtotal;

            tempData.push({
              _id: items,
              size,
              quantity: cartItems[items][size],
              price: product.price,
            });
          }
        }
      }
    }

    setCartData(tempData);
    setSubtotal(total);
  }, [cartItems, products]);

  return (
    <div className="pt-14 flex flex-col lg:flex-row justify-between items-center gap-8">
      {/* Left: Cart Items */}
      <div className="w-full lg:w-[60%]">
        <div className="text-2xl my-4">
          <Title text1={"YOUR"} text2={"CART"} />
        </div>

        <div>
          {cartData.map((item, index) => {
            const productData = products.find(
              (product) => product._id === item._id
            );

            return (
              <div
                key={index}
                className="text-gray-700 my-4 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center"
              >
                <div className="flex gap-6 items-center">
                  <img
                    className="w-16 sm:w-20"
                    src={productData.image[0]}
                    alt=""
                  />
                  <div>
                    <p className="text-sm sm:text-lg font-medium">
                      {productData.name}
                    </p>
                    <div className="flex items-center gap-5 mt-2">
                      <p className="font-medium text-lg">
                        {currency}
                        {productData.price}
                      </p>
                      <p className="cursor-pointer text-center w-10 sm:py-1 border bg-gray-50">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 items-center">
                  <input
                    onChange={(e) => {
                      let newQuantity = Number(e.target.value);
                      if (newQuantity > 0) {
                        updateQuantity(item._id, item.size, newQuantity);
                      }
                    }}
                    className="border w-10 sm:w-16 px-1 sm:px-3 text-center"
                    type="number"
                    min={1}
                    defaultValue={item.quantity}
                  />
                  <img
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className="h-6 cursor-pointer"
                    src="/src/assets/bin_icon.png"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: Cart Totals */}
      <div className="mt-18 w-full lg:w-[40%] bg-gray-100 p-6 rounded-md shadow-md">
        <div className="text-2xl text-center my-6">
          <Title text1={"CART"} text2={"TOTALS"} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between px-2 py-2 border-b border-gray-400">
            <p className="text-sm">SubTotal</p>
            <p>
              {currency} {subtotal.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between px-2 py-2 border-b border-gray-400">
            <p className="text-sm">Shipping Fee</p>
            <p>
              {currency} {subtotal > 0 ? shippingFee.toFixed(2) : "0.00"}
            </p>
          </div>
          <div className="flex justify-between px-2 py-2 border-b border-gray-400">
            <p className="text-sm font-semibold">Total</p>
            <p>
              {currency} {(subtotal > 0 ? subtotal + shippingFee : 0).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
