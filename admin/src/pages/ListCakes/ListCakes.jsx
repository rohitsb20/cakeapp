import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ListCakes = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:4000";

  const fetchData = async () => {
    try {
      const response = await fetch(`${url}/api/cake/list`);
      const result = await response.json();

      if (result.success) {
        setData(result.data);
        console.log(result.data);
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

  return (
    <>
      <div>ListCakes</div>
      <div>
        {data.map((cake, index) => {
          return (
            <div key={index}>
              <img
                src={`${url}/images/${cake.image}`}
                alt={cake.name}
                style={{ width: "100%", height: "auto" }}
              />
              <p>{cake.name}</p>
              <p>{cake.description}</p>
              <p>Category: {cake.category}</p>
              <p>Price: {cake.price}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListCakes;
