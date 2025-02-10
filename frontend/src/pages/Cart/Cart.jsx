import { StoreContext } from "../../context/storeContext";
import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { Frown } from "lucide-react";
import {useNavigate} from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
  const { foodItems, cartItems, removeFromCart } = useContext(StoreContext);
 const isEmpty = Object.keys(cartItems).length === 0;
 const handleClick = () => {
    navigate('/')
 }

  return (
    <div className="container mx-auto p-4">
      {isEmpty ? (
        <div className="my-4 flex justify-center">
          <div className="flex flex-col items-center gap-y-3">
            <Frown size={150} />
            <h1 className="text-2xl">Your cart is empty</h1>

            <button
              onClick={handleClick}
              className="btn btn-outline capitalize
             btn-sm rounded-full
              border border-pink-500
               hover:border-pink-500
               hover:text-white
               hover:bg-pink-500"
            >
              go to shopping
            </button>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Cart;
