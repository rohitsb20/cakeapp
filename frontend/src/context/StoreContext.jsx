/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect } from "react";
import { foodItems } from "../assets/asset";
import { useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      return {
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const cart = { ...prev };
      if (cart[itemId] === 1) delete cart[itemId];
      else cart[itemId] -= 1;
      return cart;
    });
  };


  const grandTotal = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const item = foodItems.find((item) => item.id === itemId);
      total += item.price * cartItems[itemId];
    }
    return total;
  }

  const contextValue = {
    foodItems,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    grandTotal
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
