import { useState } from "react";
import toast from "react-hot-toast";

const useRemove = () => {

    
    const [loading, setLoading] = useState(false);
  
  const remove = async ({id}) => {


console.log("id", id);

    try {
        setLoading(true);
        const url = "http://localhost:4000";
       const res = await fetch(`${url}/api/cake/delete`, {
        method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({id}),
       });

       const result = await res.json();

        if(result.error){
            throw new Error(result.error);
        }

        toast.success("Item removed successfully");
    } catch (error) {
        console.error("Error removing data: ", error);
        toast.error("Error in removing item");
        
    }
    finally{
        setLoading(false);
    }

  }


  return { remove , loading };
}

export default useRemove