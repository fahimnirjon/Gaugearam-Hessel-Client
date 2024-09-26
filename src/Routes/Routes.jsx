import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import FoodOrder from "../Pages/FoodOrder";
import Login from "../Pages/logsign/Login";
import SignUp from "../Pages/logsign/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/dashboard/cart/Cart";
import PrivateRoute from '../Routes/private/PrivateRoute'
import AllUsers from "../Pages/dashboard/user/AllUsers";


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
        path: "cart",
        element: <Cart></Cart>,
      },


      // admin routes
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      }
    ],
  },
]);
