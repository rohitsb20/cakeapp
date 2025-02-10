/* eslint-disable react/prop-types */
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const FoodCard = ({ id, name, price, description, category,image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="card sm:max-w-sm">
      <figure className="p-4">
        <img src={image} alt={name} className="rounded-lg " />
      </figure>
      <div className="card-body">
        <h5 className="card-title mb-2.5">{name}</h5>
        <p className="mb-2">{description}</p>
        <p>
          flavour : <span className="text-gray-800">{category}</span>
        </p>
        <p className="font-bold text-2xl"> &#8377;{price}</p>
        <div className="card-actions">
          {!cartItems[id] ? (
            <div className="mt-4">
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
          )}{" "}
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
