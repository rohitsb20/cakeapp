import OrderForm from "./OrderDetailForm/OrderForm"
import CartTotal from "../Cart/CartTotal/CartTotal"
import { useNavigate } from "react-router-dom";

const OrderPage = () => {

   const navigate = useNavigate();
        const handleProceed = () => {
          navigate("/orderpage");
        }; 
  return (
    <div>
      <h1 className="capitalize text-2xl font-semibold ">order Page</h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="w-full md:w-1/2">
          <OrderForm />
        </div>
        <div className="divider divider-horizontal hidden md:block "></div>
        <div className="divider  md:hidden "></div>
        <div className="w-full md:w-1/2">
          <CartTotal />
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
      </div>
    </div>
  );
}

export default OrderPage