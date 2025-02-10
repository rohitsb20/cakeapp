/* eslint-disable react/prop-types */
import { useContext } from "react";

import FoodCard from "../foodCard/FoodCard";
import { StoreContext } from "../../context/storeContext";

const FoodDisplay = ({ category }) => {
  const { foodItems } = useContext(StoreContext);

  return (
    <div>
      <h2 className="text-3xl capitalize mt-5 text-center font-semibold">
        top cakes{" "}
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mt-3">
        {foodItems.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodCard
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
