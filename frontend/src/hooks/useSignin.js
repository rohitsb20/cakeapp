import toast from "react-hot-toast";
import { useState } from "react";
import useZustandContext from "../Zustand/useContextZustand";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useZustandContext();

  const signinhandler = async ({ email, password }) => {
    const success = handleError({ email, password });

    if (!success) return false;

    try {
      setLoading(true);

      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("auth-User", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signinhandler };
};

export default useSignin;

const handleError = ({ email, password }) => {
  if (!email || !password) {
    toast.error("All fields are required");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  return true;
};
