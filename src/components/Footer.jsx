import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const user = useContext(UserContext);
  return <div className="footer">Created by {user.user.name}</div>;
};

export default Footer;
