import { create } from "zustand";

const useZustandContext = create((set) => ({
  authUser: JSON.parse(localStorage.getItem("auth-User")) || null,

  setAuthUser: (user) => {
    localStorage.setItem("auth-User", JSON.stringify(user));
    set({ authUser: user });
  },
  logout: () => {
    localStorage.removeItem("auth-User");
    set({ authUser: null });
  },
}));

export default useZustandContext;
