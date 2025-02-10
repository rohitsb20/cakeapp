import  { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/storeContext";

const CartTotal = () => {

      const {
        grandTotal,
        deliveryCharges,
      } = useContext(StoreContext);

      const navigate = useNavigate();
      const handleProceed = () => {
        navigate("/orderpage");
      }; 
  return (
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
        <p>Grand Total</p>{" "}
        <p>
          &#8377;{" "}
          {grandTotal() > 400 ? grandTotal() : grandTotal() + deliveryCharges}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleProceed}
          className="btn bg-pink-500 text-white
           hover:bg-pink-600 waves waves-light"
        >
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}

export default CartTotal