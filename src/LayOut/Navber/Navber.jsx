import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { RiShoppingCartFill } from "react-icons/ri";
import UseCart from "../../Hooks/UseCart";
import UseAdmin from "../../Hooks/UseAdmin";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const [cart]=UseCart()
  const [isAdmin]=UseAdmin()

 // console.log(cart.length);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {/* <li>
        <NavLink to="/signup">SignUp</NavLink>
      </li> */}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
          <RiShoppingCartFill />

            <div className="ml-2 badge badge-secondary">+{cart.length}
            </div>
            
          </button>
        </Link>
      </li>

      {
        user && isAdmin && <li> <Link to='/dashboard/adminHome'>Dashboard</Link> </li>
      }
      {
        user && !isAdmin && <li> <Link to='/dashboard/userHome'>Dashboard</Link> </li>
      }

      {user ? (
        <>
          {/* <span className="ml-2">{user?.displayNazme}</span> */}
          <button onClick={handleLogOut}>LOGOUT </button>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signin">SignIn</NavLink>
          </li>
        </>
      )}

      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <NavLink to="/secret">Secret</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="fixed z-10 max-w-screen-xl mx-auto bg-opacity-30 bg-black text-white  navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLink}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
