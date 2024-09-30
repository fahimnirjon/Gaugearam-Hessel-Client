import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaIdCard,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { MdMenuBook, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import IsAdmin from "../hooks/IsAdmin";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = IsAdmin();

  return (
    <div className="flex">
      {/* side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink className="gap-3" to="/dashboard/admin-home">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/additems">
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/manageitem">
                  <FaList></FaList>
                  Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/managebookings">
                  <FaBook></FaBook>
                 Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/users">
                  <FaUsers></FaUsers>
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink className="gap-3" to="/dashboard/user-home">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  Reservation
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/payment-history">
                  <FaIdCard></FaIdCard>
                  Payment History
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/cart">
                  <AiOutlineShoppingCart />
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/review">
                  <MdReviews />
                  ADD Review
                </NavLink>
              </li>
              <li>
                <NavLink className="gap-3" to="/dashboard/bookings">
                  <TbBrandBooking />
                  My Booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink className="gap-3" to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="gap-3" to="/menu">
              <MdMenuBook />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink className="gap-3" to="/order">
              <FaShop />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="gap-3" to="/contact">
              <IoMdContact />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
