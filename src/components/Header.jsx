import React from "react";
import NavBarItems from "./NavBarItems";

const Header = (props) => {
  return (
    <div className="header">
      <img
        src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"
        alt="logo"
        className="logo"
      ></img>
      <h1>Food Bazaar</h1>
      <NavBarItems />
    </div>
  );
};

export default Header;
