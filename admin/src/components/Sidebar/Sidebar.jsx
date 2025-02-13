import { Plus } from "lucide-react";
import { X } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="border-r px-6
       md:px-7 max-w-max min-h-[44rem]

     border-gray-200 pt-10"
    >
      <div
        className="flex
       flex-col items-center
        justify-center gap-y-6 "
      >
        <span> Actions</span>
        <button
          onClick={() => {
            navigate("/add");
          }}
          className="btn bg-transparent border-0 
        hover:bg-transparent hover:text-pink-500
         shadow-sm py-2 md:px-7.5 "
        >
          {" "}
          <span className="hidden md:flex">Add</span>
          <Plus size={20} className="cursor-pointer" />
        </button>
        <button
          onClick={() => {
            navigate("/remove");
          }}
          className="btn bg-transparent border-0
         hover:bg-transparent hover:text-pink-500  
         shadow-sm py-2"
        >
          {" "}
          <span className="hidden md:flex">Remove</span>
          <X size={20} className="cursor-pointer" />
        </button>
        <button
          onClick={() => {
            navigate("/orders");
          }}
          className="btn bg-transparent border-0 
        hover:bg-transparent hover:text-pink-500
         shadow-sm py-2 md:px-5 "
        >
          {" "}
          <span className="hidden md:flex">Orders</span>
          <NotebookPen size={20} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
