/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Frown } from "lucide-react";

import FoodCard from "../foodCard/FoodCard";
import { StoreContext } from "../../context/StoreContext";


const FoodDisplay = ({ category }) => {
  const { data } = useContext(StoreContext);


  

  return (
    <div>
      <h2 className="text-3xl capitalize mt-5 text-center font-semibold">
        top cakes{" "}
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-3">
        {data.length === 0 ? (
          <div className=" text-red-500 text-xl">
            <p className="flex items-center
             justify-center gap-x-3">
              <span>No Cakes available</span> <Frown />
            </p>
          </div>
        ) : (
          data.map((item, index) => {
            const url = "http://localhost:4000";
            if (category === "All" || category === item.category) {
              return (
                <FoodCard
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                  image={`${url}/images/${item.image}`}
                />
              );
            } else {
              return null;
            }
          })
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
