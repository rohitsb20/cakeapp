import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetData = () => {
   const [data, setData] = useState([]);
   const url = "http://localhost:4000";

   const fetchData = async () => {
     try {
       const response = await fetch(`${url}/api/cake/list`);
       const result = await response.json();

       if (result.success) {
         setData(result.data);
       
       } else {
         toast.error("Error in fetching data");
       }
     } catch (error) {
       console.error("Error fetching data: ", error);
       toast.error("Error in fetching data");
     }
   };

   useEffect(() => {
     fetchData();
   }, []);


     
         
return {data}
}

export default useGetData


