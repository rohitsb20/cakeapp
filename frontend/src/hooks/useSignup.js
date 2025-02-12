import toast from "react-hot-toast";
import { useState } from "react";
import useZustandContext from "../Zustand/useContextZustand";
const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useZustandContext();

  const signuphandler = async ({
    email,
    password,
    confirmPassword,
    phone,
    lastname,
    firstname,
  }) => {
    const success = handleError({
      email,
      password,
      confirmPassword,
      phone,
      lastname,
      firstname,
    });
    if (!success) return false;

    try {
      setLoading(true);

      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          phone,
          lastname,
          firstname,
          confirmPassword,
        }),
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

  return { loading, signuphandler };
};

export default useSignup;

const handleError = ({
  email,
  password,
  confirmPassword,
  phone,
  lastname,
  firstname,
}) => {
  if (
    !email ||
    !password ||
    !confirmPassword ||
    !phone ||
    !lastname ||
    !firstname
  ) {
    toast.error("All fields is required");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  if (phone.length > 11 && phone.length < 9) {
    toast.error("Phone number must be at least 10 characters");
    return false;
  }

  return true;
};
