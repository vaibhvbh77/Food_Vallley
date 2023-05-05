import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBarItems = (props) => {
  const [isLogin, setLogin] = useState(true);
  return (
    <div className="nav-items">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>Cart</li>
        <button
          onClick={() => {
            setLogin((prev) => !prev);
          }}
        >
          {!isLogin ? "Login" : "Logout"}
        </button>
      </ul>
    </div>
  );
};

export default NavBarItems;
