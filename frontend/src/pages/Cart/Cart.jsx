import { Frown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartShow from "./CartShow/CartShow";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(StoreContext);
  const isEmpty = Object.keys(cartItems).length === 0;
  const handleClick = () => {
    navigate("/");
  };

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
        <CartShow />
      )}
    </div>
  );
};

export default Cart;
