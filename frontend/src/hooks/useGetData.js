import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetData = () => {
 
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        
        const fetchData = async () => {
           try {
             const response = await fetch("/api/cake/list");
             const data = await response.json();
             if (data.error) {
              throw new Error(data.error);
             }

             setData(data);
            
           } catch (error) {

                console.log(error);
                toast.error("Error fetching data");
            
           }
           finally{
               setLoading(false);
           }
        }
        fetchData();
    },[])
    return {data,loading}

}

export default useGetData


