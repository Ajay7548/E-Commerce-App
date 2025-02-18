import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts } from "../assets/frontend_assets/assets";
import { currency, delivery_fee } from "./index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// Create the ShopContext with a default value of null
export const ShopContext = createContext(null);
// This will store and share the shop-related data across multiple components

// Custom hook to easily access ShopContext from any component
export const useShop = () => {
    return useContext(ShopContext); // Allows any component to access shop data
};

// The main provider component that wraps the app and provides context data
export const ShopProvider = ({ children }) => {
    // Initialize the products state with the imported product list
    const [products, setProducts] = useState(initialProducts);
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()

    const addToCart = async (itemID, size) => {
        let cardData = structuredClone(cartItems)

        //Providing alert if size not selected
        if (!size) {
            toast.error('Select Product Size')
            return
        }

        if (cardData[itemID]) {
            if (cardData[itemID][size]) {
                cardData[itemID][size] += 1
            }
            else {
                cardData[itemID][size] = 1
            }
        } else {
            cardData[itemID] = {}
            cardData[itemID][size] = 1
        }
        setCartItems(cardData)//for saving cardData
    }

    const getCartCount = () => {
        let totalCount = 0
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) totalCount += cartItems[items][item]

                } catch (error) {
                    console.log(error)
                }
            }
        }
        return totalCount
    }

    const updateQuantity = async (itemID,size,quantity) =>{

        let cardData = structuredClone(cartItems)

        cardData[itemID][size] = quantity

        setCartItems(cardData)
    }


// Create an object with all the values to be shared in the context
const value = {
    products,      // List of available products
    setProducts,   // Function to update the products list
    currency,      // Currency symbol
    delivery_fee,  // Delivery fee amount
    search, setSearch, showSearch, setShowSearch, cartItems, addToCart,
    getCartCount,updateQuantity,navigate
};

// Return the provider component, passing the value to all children
return (
    <ShopContext.Provider value={value}>
        {children}
        {/* "children" represents all components wrapped inside <ShopProvider> */}
    </ShopContext.Provider>
);
};

