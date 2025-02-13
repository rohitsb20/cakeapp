/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext} from "react";
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
    for (const item of Object.keys(cartItems)) {
      if (cartItems[item] > 0) {
        let iteminfo = foodItems.find((foodItem) => foodItem._id === item);
        total += iteminfo.price * cartItems[item];
      }
    }
    return total;
  }

  const deliveryCharges = 40;
 
  

  const contextValue = {
    foodItems,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    grandTotal,
    deliveryCharges
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
