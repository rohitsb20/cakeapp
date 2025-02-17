import {Smile} from "lucide-react"

const OrderCakes = () => {
  return (
    <div className="md:m-6 m-2 p-2 md:p-6 flex flex-col gap-3">
      <h1 className="text-xl font-semibold">Hi, user</h1>
      <p className="text-lg font-medium capitalize tracking-wider flex gap-2 ">
        <span> you got 5 Orders</span> <Smile />
      </p>
      <div>
        Orders
      </div>
    </div>
  );
}

export default OrderCakes