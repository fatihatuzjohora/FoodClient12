import { RiShoppingCartFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";
import UseCart from "../Hooks/UseCart";
import UseAdmin from "../Hooks/UseAdmin";

const Dashbord = () => {
  const [cart] = UseCart();
  //get isadmin value from the database
  const [isAdmin] = UseAdmin();

  return (
    <div className="flex">
      {/* dashbord sudebar  */}
      <div className="w-64 min-h-full bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">Add Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">Manage Items</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <RiShoppingCartFill></RiShoppingCartFill>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">User Home</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">Reservation</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/cart">
                  <RiShoppingCartFill></RiShoppingCartFill> My Cart (
                  {cart.length})
                </NavLink>
              </li>


              <li>
                <NavLink to="/dashboard/review">Add a Review</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">My Bookings</NavLink>
              </li>

            </>
          )}

          {/* share nav link  */}
          <div className="divider"></div>

          <li>
            <NavLink to="/"> Home</NavLink>
          </li>

          <li>
            <NavLink to="/order/salad">
              <RiShoppingCartFill></RiShoppingCartFill> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/shop">
              <RiShoppingCartFill></RiShoppingCartFill> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <RiShoppingCartFill></RiShoppingCartFill> Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard contant  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
