import { Trash2 } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../../context/storeContext";
import { useNavigate } from "react-router-dom";

const CartShow = () => {
  const { 
    foodItems,
     cartItems,
      removeFromCart,
       grandTotal,
      deliveryCharges } =
    useContext(StoreContext);

    const navigate = useNavigate();
    const handleProceed = () => {
      navigate("/orderpage");
    } 

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
      <div className="divider m-0"></div>
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
                  <p className="text-lg font-medium">&#8377; {item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p className="text-lg font-medium">
                    &#8377; {item.price * cartItems[item._id]}
                  </p>
                  <p>
                    <Trash2
                      onClick={() => removeFromCart(item._id)}
                      className="hover:text-red-500"
                    />
                  </p>
                </div>
                <div className="divider m-0"></div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-4 p-8">
        <div className="flex justify-between items-center">
          <p>Subtotal</p> <p>&#8377;{grandTotal()}</p>
        </div>
        <div className="divider divider-dashed m-0"></div>
        <div className="flex justify-between items-center">
          <p>Delivery Charges</p> <p>&#8377; {deliveryCharges}</p>
        </div>
        <div className="divider divider-dashed m-0"></div>
        <div className="flex justify-between items-center">
          <p>Grand Total</p> <p>&#8377; {grandTotal()> 400 ? (grandTotal()) : (grandTotal()+deliveryCharges) }</p>
        </div>
        <div className="flex justify-center mt-4">
          <button 
          onClick={handleProceed}
          className="btn bg-pink-500 text-white
           hover:bg-pink-600 waves waves-light">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartShow;
