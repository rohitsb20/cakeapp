//import {useNavigate} from "react-router-dom";
import { StoreContext } from "../../context/storeContext";
import { Trash2 } from "lucide-react";
import { useContext } from "react";

//import {Frown}  from "lucide-react"
const Cart = () => {
  const {
    foodItems,
    cartItems,
    removeFromCart,
  } = useContext(StoreContext);
  //  const navigate = useNavigate();
  // const handleClick = () => {
  //   navigate("/");
  // };
  return (
    <div className="container min-h-screen mx-auto p-4">
      <div>
        <div className="capitalize font-semibold grid grid-cols-6 gap-4 items-center">
          <p>Items</p>
          <p>Title</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <hr />
      
        <div >
          {
            foodItems.map(
              (item) => {
                if(cartItems[item._id]>0)
                {
                  return (
                    <>
                    
                      <div
                        key={item.id}
                        className="grid grid-cols-6 gap-x-4  gap-y-8 items-center"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[4rem] rounded-lg"
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
                           className="hover:text-red-500" />
                        </p>
                      </div>{" "}
                      <hr />
                    </>
                  );
                }
              }
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
