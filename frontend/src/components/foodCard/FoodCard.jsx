/* eslint-disable react/prop-types */
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const FoodCard = ({ id, name, price, description, category,image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="border-2 w-fit p-2">
      <img src={image} alt={name} />

      <h3 className="mt-2 text-xl font-semibold">{name}</h3>
      <p className="italic text-sm">{description}</p>
      <p className="font-bold text-2xl"> &#8377;{price}</p>
      <p>flavour :{category}</p>
      {/*itemcount i sreplced by cart[id] */}
      {!cartItems[id] ? (
        <div >
          
          <button
            className="bg-green-500 text-white px-2 py-1 rounded-lg"
            onClick={() => addToCart(id)}
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div className="flex items-center ">
          <Minus
            className="cursor-pointer border-2 rounded-full"
            onClick={() => removeFromCart(id)}
          />
            <span className="px-2">{cartItems[id]}</span>
          <Plus
            className="cursor-pointer border-2 rounded-full"
            onClick={() => addToCart(id)}
          />
        </div>
      )}
    </div>
  );
};

export default FoodCard;
