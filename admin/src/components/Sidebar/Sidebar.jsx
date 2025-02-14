import { Plus } from "lucide-react";
import { X } from "lucide-react";
import { NotebookPen } from "lucide-react";
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
 

  return (
    <div
      className="border-r px-2
       md:px-7 max-w-max min-h-[44rem]

     border-gray-200 pt-10"
    >
      <div
        className="flex
       flex-col items-center
        justify-center gap-y-6 "
      >
        <span> Actions</span>
        <NavLink
          to="/add"
          className="btn bg-transparent border-0 
        hover:bg-transparent hover:text-pink-500
         shadow-sm py-2 md:px-7.5 "
        >
          {" "}
          <span className="hidden md:block">Add</span>
          <Plus
            size={20}
            className="
          cursor-pointer md:hidden"
          />
        </NavLink>
        <NavLink
          to="/remove"
          className="btn bg-transparent border-0
         hover:bg-transparent hover:text-pink-500  
         shadow-sm py-2"
        >
          {" "}
          <span className="hidden md:block">Orders</span>
          <X size={20} className="cursor-pointer md:hidden" />
        </NavLink>
        <NavLink
          to="/orders"
          className="btn bg-transparent border-0 
        hover:bg-transparent hover:text-pink-500
         shadow-sm py-2 md:px-5 "
        >
          {" "}
          <span className="hidden md:block">Listed</span>
          <NotebookPen size={20} className="cursor-pointer md:hidden" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
