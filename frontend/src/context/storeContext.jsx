/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { foodItems } from "../assets/asset";
import { useState } from "react";

export const StoreContext = createContext(null);


const StoreContextProvider = ({ children }) => {
   

    const [cart, setCart] = useState({})
 
    const addToCart = (itemId) => {
        if(!cart.itemId){
setCart( prev => ({...prev, [itemId]: 1}))
        }
        else{
            setCart(prev => ({...prev, [itemId]: prev[itemId] + 1}))
    }
   
}

const removeFromCart = (itemId) => {
     
            setCart(prev => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {
        foodItems,
        cart,
        setCart,
        addToCart,
        removeFromCart

    }


    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;