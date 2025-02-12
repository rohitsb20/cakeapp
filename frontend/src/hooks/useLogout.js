import toast from "react-hot-toast";
import { useState } from "react";
import useZustandContext from "../Zustand/useContextZustand";

const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const { logoutUser } = useZustandContext();

  const logouthandler = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("auth-User");
      logoutUser();
      toast.success("Logout successful");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logouthandler, loading };
};

export default useLogout;
