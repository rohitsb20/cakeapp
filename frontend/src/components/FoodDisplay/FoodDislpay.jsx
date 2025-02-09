import { StoreContext } from "../../context/storeContext";
import { useContext } from "react";
import FoodCard from "../foodCard/FoodCard";


const FoodDisplay = () => {

    const { foodItems } = useContext(StoreContext);

    return (
      <div>
        <h2 className="text-3xl ">top cakes </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> 
          {foodItems.map((item, index) => (
            <FoodCard 
            key={index} 
            id={item.id}
             name={item.name} 
             description={item.description}
             price={item.price}
             category={item.category} />
          ))}
        </div>
      </div>
    );


}

export default FoodDisplay;