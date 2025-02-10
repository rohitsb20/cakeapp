/* eslint-disable react/prop-types */
import { Minus, Plus } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const FoodCard = ({ id, name, price, description, category }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="border-2 w-fit p-2">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      {/*itemcount i sreplced by cart[id] */}
      {!cartItems[id] ? (
        <div>
          <Plus className="cursor-pointer" onClick={() => addToCart(id)} />
        </div>
      ) : (
        <div>
          <Plus className="cursor-pointer" onClick={() => addToCart(id)} />
          <span>{cartItems[id]}</span>
          <Minus
            className="cursor-pointer"
            onClick={() => removeFromCart(id)}
          />
        </div>
      )}
    </div>
  );
};

export default FoodCard;
