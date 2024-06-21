import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Error from "./Error";
import Home from "../LayOut/Navber/home/Home";
import Menu from "../LayOut/Manu2ndPages/Menu";
import Order from "../LayOut/Order/Order";
import Login from "../LayOut/Navber/Login";
import Reg from "../LayOut/Navber/Reg";
import Dashbord from "../LayOut/Dashbord";
import Cart from "../Dashboaed/Cart/Cart";
import PrivateRoute from "./PrivetRoute";
import AllUsers from "../Dashboaed/AllUsers";
import AddItems from "../Dashboaed/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Dashboaed/ManageItems";
import UpdateItem from "../Dashboaed/UpdateItem";
import Payment from "../Dashboaed/Payment";
import PaymentHistory from "../Dashboaed/PaymentHistory";
import UserHome from "../Dashboaed/UserHome";
import AdminHome from "../Dashboaed/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
  {
    path: "/signin",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Reg></Reg>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      //normal users routes
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      //admin routes
      {
        path: "adminHome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoute>
            {" "}
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            {" "}
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>{" "}
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>{" "}
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);
