import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="
    max-w-full
     flex items-center justify-between
     p-4 border-b border-gray-200"
    >
      <Link
        className="link
          
                link-neutral text-2xl
                 font-semibold no-underline
                 text-pink-500"
        to="/"
      >
        <span>Cakify</span>
        <sub className="text-sm text-black font-light">admin</sub>
      </Link>

      <div className={`ml-5 hover:scale-125 `}>
        <span className="flex gap-x-1 capitalize items-center ">
          <span> Hi, </span>
        </span>
      </div>
      <div>
        <button
          className={`btn btn-outline
             btn-sm rounded-full
              border border-pink-500
               hover:border-pink-500
               hover:text-white
               hover:bg-pink-500 
             `}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar