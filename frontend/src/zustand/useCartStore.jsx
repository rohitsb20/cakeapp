// store/useCartStore.js
import { create } from "zustand";

const useCartStore = create((set) => ({
  cartItems: {}, // { itemId: quantity }

  addToCart: (itemId) => {
    set((state) => ({
      cartItems: {
        ...state.cartItems,
        [itemId]: (state.cartItems[itemId] || 0) + 1,
      },
    }));
  },

  removeFromCart: (itemId) => {
    set((state) => {
      const updatedCart = { ...state.cartItems };
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]; // Remove item if quantity is 1
      } else {
        updatedCart[itemId] -= 1; // Decrease quantity
      }
      return { cartItems: updatedCart };
    });
  },
}));

export default useCartStore;
