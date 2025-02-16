import { createContext, useContext, useState } from "react";
import { products as initialProducts } from "../assets/frontend_assets/assets"; 
import { currency,delivery_fee } from "./index";

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

   

    // Create an object with all the values to be shared in the context
    const value = { 
        products,      // List of available products
        setProducts,   // Function to update the products list
        currency,      // Currency symbol
        delivery_fee   // Delivery fee amount
    };

    // Return the provider component, passing the value to all children
    return (
        <ShopContext.Provider value={value}>
            {children} 
            {/* "children" represents all components wrapped inside <ShopProvider> */}
        </ShopContext.Provider>
    );
};

