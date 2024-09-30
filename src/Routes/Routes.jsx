import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import FoodOrder from "../Pages/FoodOrder";
import Login from "../Pages/logsign/Login";
import SignUp from "../Pages/logsign/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/dashboard/cart/Cart";
import PrivateRoute from "../Routes/private/PrivateRoute";
import AllUsers from "../Pages/dashboard/user/AllUsers";
import AddItems from "../Pages/dashboard/item/AddItems";
import AdminRoute from "./private/AdminRoute";
import ManageItems from "../Pages/dashboard/item/ManageItems";
import UpdateItem from "../Pages/dashboard/item/UpdateItem";
import axios from "axios";
import Payment from "../Pages/dashboard/payment/Payment";
import PaymentHistory from "../Pages/dashboard/payment/PaymentHistory";
import AdminHome from "../Pages/dashboard/Home/AdminHome";
import UserHome from "../Pages/dashboard/Home/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        element: <FoodOrder></FoodOrder>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'admin-home',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },{
        path: 'user-home',
        element: <UserHome></UserHome>
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
        path: "payment-history",

        element:<PaymentHistory></PaymentHistory>,
      },
      {
        path: "additems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },

      // admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
