import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

const CartTotal = () => {
  const { grandTotal, deliveryCharges } = useContext(StoreContext);

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
    </div>
  );
};

export default CartTotal;
