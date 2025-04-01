import React, { useEffect, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";
import stripe_logo from "../assets/stripe_logo.png";
import razorpay_logo from "../assets/razorpay_logo.png";

const PlaceOrder = () => {
  const { currency, cartItems, products } = useShop();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [method, setMethod] = useState("cod");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setDeliveryInfo({ ...deliveryInfo, [e.target.name]: e.target.value });
  };
  const handlePlaceOrder = () => {
    const { firstName, lastName, email, street, city, state, zipcode, country, phone } = deliveryInfo;

    if (!firstName || !lastName || !email || !street || !city || !state || !zipcode || !country || !phone) {
      setError("Please fill all delivery details before placing an order.");
      return;
    }
    // If validation passes, navigate to order page
    setOrderPlaced(true);
    
    // Hide the message after 3 seconds and navigate
    setTimeout(() => {
      setOrderPlaced(false);
      navigate("/Order");
    }, 3000);
  };


  // Load last cart details
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
              name: product.name,
              image: product.image[0], // Assuming first image
            });
          }
        }
      }
    }

    setCartData(tempData);
    setSubtotal(total);
  }, [cartItems, products]);

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6 pt-26">
     {orderPlaced && (
  <div className="fixed right-36 top-50 bg-white p-4 rounded-lg shadow-lg border border-green-400 animate-fadeIn">
    <p className="text-sm font-medium text-green-600">🎉 Order Successfully Placed!</p>
  </div>
)}


      {/* Left Side - Delivery Information */}
      <div className="w-full">
        <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        <div className="px-6 py-12 w-full max-w-[600px] mx-auto rounded-md shadow-lg dark:shadow-gray-700">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                name="firstName"
                value={deliveryInfo.firstName}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="First name" />
              <input
                name="lastName"
                value={deliveryInfo.lastName}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="Last name" />
            </div>
            <input
              name="email"
              value={deliveryInfo.email}
              onChange={handleChange}

              className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Email address" />
            <input
              name="street"
              value={deliveryInfo.street}
              onChange={handleChange}

              className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Street" />
            <div className="flex gap-4">
              <input
                name="city"
                value={deliveryInfo.city}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="City" />
              <input
                name="state"
                value={deliveryInfo.state}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="State" />
            </div>
            <div className="flex gap-4">
              <input
                name="zipcode"
                value={deliveryInfo.zipcode}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="Zipcode" />
              <input
                name="country"
                value={deliveryInfo.country}
                onChange={handleChange}

                className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full" type="text" placeholder="Country" />
            </div>
            <input
              name="phone"
              value={deliveryInfo.phone}
              onChange={handleChange}

              className="border placeholder-gray-400 border-gray-400 px-3 py-2 w-full block" type="text" placeholder="Phone" />
          </div>
        </div>
      </div>

      {/* Right Side - Cart Summary & Payment */}
      <div className="flex flex-col">
        {/* Cart Summary */}
        <div className="border dark:border-gray-700 border-gray-300 p-4 rounded-md">
          <Title text1={"YOUR"} text2={"ORDER"} />
          <div className="mt-4">
            {cartData.length > 0 ? (
              cartData.map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b py-3">
                  <img className="w-16" src={item.image} alt={item.name} />
                  <div>
                    <p className="text-sm text-black dark:text-white font-medium">{item.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Size: {item.size}</p>
                  </div>
                  <p className="text-sm font-medium text-black dark:text-white">{currency}{item.price} x {item.quantity}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items in cart.</p>
            )}
          </div>
          {/* Cart Total */}
          <CartTotal subtotal={subtotal} currency={currency} navigate={navigate} showButton={false} />
        </div>

        {/* Payment Mode */}
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex gap-3 flex-col lg:flex-row px-2 py-4 justify-center dark:shadow-gray-700 shadow-md">
            <div className="flex items-center gap-5 px-2 py-4 cursor-pointer border dark:border-gray-700 border-gray-200">
              <p onClick={() => setMethod("stripe")} className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""}`} />
              <img className="h-5" src={stripe_logo} alt="Stripe" />
            </div>
            <div className="flex items-center gap-5 px-2 py-4 cursor-pointer border dark:border-gray-700 border-gray-200">
              <p onClick={() => setMethod("razorpay")} className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""}`} />
              <img className="h-5" src={razorpay_logo} alt="Razorpay" />
            </div>
            <div className="flex items-center gap-5 px-2 py-4 cursor-pointer border dark:border-gray-700 border-gray-200">
              <p onClick={() => setMethod("cod")} className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""}`} />
              <p className="text-gray-500 text-sm">CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="flex justify-end">
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button onClick={handlePlaceOrder} className="bg-gray-800 py-3 mt-6 px-16 text-sm text-white rounded-sm cursor-pointer hover:bg-gray-900">
              PLACE ORDER
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
