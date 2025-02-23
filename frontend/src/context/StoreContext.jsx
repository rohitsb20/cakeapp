/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import useGetData from "../hooks/useGetData";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const { data, loading } = useGetData();
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : {};
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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
    if (data) {
      for (const item of Object.keys(cartItems)) {
        if (cartItems[item] > 0) {
          let iteminfo = data.find((foodItem) => foodItem._id === item);
          if (iteminfo) {
            total += iteminfo.price * cartItems[item];
          }
        }
      }
    }
    return total;
  };

  const deliveryCharges = 40;

  const contextValue = {
    data,
    loading,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    grandTotal,
    deliveryCharges,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
