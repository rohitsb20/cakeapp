import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../../context/storeContext";
const CartShow = () => {
  const { foodItems, cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div>
      <div className="capitalize font-semibold grid grid-cols-6 gap-4 items-center">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      <div>
        {foodItems.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className="grid grid-cols-6 gap-x-4 gap-y-8 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="bg-base-content/10 h-10 w-10 rounded-md"
                  />
                  <p>{item.name}</p>
                  <p className="text-lg font-medium">{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="text-lg font-medium">
                    {item.price * cartItems[item._id]}
                  </p>
                  <p>
                    <Trash2
                      onClick={() => removeFromCart(item._id)}
                      className="hover:text-red-500"
                    />
                  </p>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default CartShow;
