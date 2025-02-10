import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { StoreContext } from "../../context/storeContext";

const NavLink = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact us",
    link: "/contact",
  },
  {
    name: "About us",
    link: "/about",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(StoreContext);
  const handleClick = () => {
    navigate("/signin");
  };
  const handleCartClick = () => {
    navigate("/cart");
  };
  return (
    <nav className="navbar rounded-box py-5">
      <div className="w-full md:flex md:items-center md:gap-2">
        <div className="flex items-center justify-between">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <Link
              className="link
          
                link-neutral text-2xl
                 font-semibold no-underline
                 text-pink-500"
              to="/"
            >
              Cakify
            </Link>

            <div className="md:hidden">
              <button
                type="button"
                className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square"
                data-collapse="#default-navbar-collapse"
                aria-controls="default-navbar-collapse"
                aria-label="Toggle navigation"
              >
                <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
              </button>
            </div>
          </div>
        </div>
        <div
          id="default-navbar-collapse"
          className="md:navbar-end collapse hidden grow basis-full 
          overflow-hidden transition-[height] duration-300 max-md:w-full
          gap-6 "
        >
          <ul className="menu md:menu-horizontal  gap-4 p-0 text-base max-md:mt-2">
            {NavLink.map((item, index) => {
              return (
                <li
                  key={index}
                  className="menu-item  flex items-center justify-center"
                >
                  <Link
                    className="link md:link-animated  p-1 hover:bg-transparent no-underline text-lg hover:text-pink-400"
                    to={item.link}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center md:justify-between justify-center mt-2 gap-4 ">
            <div className="flex items-center gap-2">
              <Search />
              <div>
                <div className="indicator">
                  {Object.keys(cartItems).length === 0 ? (
                    ""
                  ) : (
                    <span className="indicator-item badge badge-error rounded-full mt-1">
                      {Object.keys(cartItems).length}
                    </span>
                  )}

                  <div className="p-1">
                    <ShoppingCart
                      className="hover:text-pink-500  cursor-pointer"
                      onClick={handleCartClick}
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleClick}
              className="btn btn-outline
             btn-sm rounded-full
              border border-pink-500
               hover:border-pink-500
               hover:text-white
               hover:bg-pink-500"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
