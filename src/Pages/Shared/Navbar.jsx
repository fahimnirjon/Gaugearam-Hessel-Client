import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { IoCartOutline } from "react-icons/io5";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li className="uppercase">
        <Link to="/">Home</Link>
      </li>
      <li className="uppercase">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="uppercase">
        <Link>dashboard</Link>
      </li>
      <li className="uppercase">
        <Link to="/menu">our menu</Link>
      </li>
      <li className="uppercase">
        <Link to="/order">Your Order</Link>
      </li>
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <IoCartOutline />
            <div className="badge">+{cart.length}</div>
          </button>
        </Link>
      </li>
      {user ? (
        <>
          <li onClick={handleLogOut} className="btn btn-ghost">
            <Link>Log Out</Link>
          </li>
        </>
      ) : (
        <>
          <li className="btn btn-ghost">
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 text-white bg-black mx-auto container">
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
              className="menu menu-sm dropdown-content rounded-box bg-opacity-10 bg-black z-10 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl ">গাঁওগেরাম হেঁশেল</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
