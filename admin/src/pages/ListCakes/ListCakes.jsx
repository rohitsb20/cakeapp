import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";
import useRemove from "../../hooks/useRemove";

const ListCakes = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:4000";
  const {remove} = useRemove();

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
  }, [data]);

  return (
    <>
      <div className="text-xl mb-4 font-semibold text-pink-500">ListCakes</div>
      <div className="capitalize font-semibold grid grid-cols-6 gap-4 items-center">
        <p>Image</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
      </div>
      <br />
      <div className="divider m-0"></div>
      <div>
        {data.map((item) => {
          const url = "http://localhost:4000";
          return (
            <div key={item._id}>
              <div className="grid grid-cols-6 gap-x-4 gap-y-8 items-center">
                
                <img
                  src={`${url}/images/${item.image}`}
                  alt={item.name}
                  className="bg-base-content/10 h-10 w-10 rounded-md"
                />
                <p>{item.name}</p>
                <p className="text-lg font-medium">&#8377; {item.price}</p>

                <p>
                <Trash2 className="cursor-pointer" onClick={() => remove({id: item._id})} />
                
                </p>
              </div>
              <div className="divider m-0"></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCakes;
