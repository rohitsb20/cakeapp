import { useState } from "react";
import toast from "react-hot-toast";
const useAddCake = () => {
  const [loading, setLoading] = useState(false);

  const additem = async ({ name, description, category, price, image }) => {
    try {
      setLoading(true);

      const success = handleError({
        name,
        description,
        category,
        price,
        image,
      });

      if (!success) {
        return false;
      }

      // here this code starts
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("image", image);

      const res = await fetch("/api/cake/add", {
        method: "POST",
        body: formData,
      });

      // this code ends here

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
       
      }
      toast.success("Cake added successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, additem };
};

export default useAddCake;

const handleError = ({ name, description, category, price, image }) => {
  if (!name || !description || !category || !price || !image) {
    toast.error("All fields are required");

    return false;
  }

  if (price < 0) {
    toast.error("Price cannot be negative");
    return false;
  }
  if (!image) {
    toast.error("Image is required");
    return false;
  }

  if (description < 10) {
    toast.error("Description must be atleast 10 characters long");
    return false;
  }

  return true;
};
