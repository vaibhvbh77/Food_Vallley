import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import useOnline from "../utils/hooks/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const NavBarItems = (props) => {
  const [isLogin, setLogin] = useState(true);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="nav-items">
      <ul>
        <li>{isOnline ? "Online✅" : "Offline🚫"}</li>
        <li>{user.name}</li>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart {cartItems.length}</Link>
        </li>
        <li>
          <Link to="/instamart">Insta Mart</Link>
        </li>
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
