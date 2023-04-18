import React from "react";
import NavBarItems from "./NavBarItems";

const Title = (props) => {
  return (
    <div className="header">
      {/* <h1>Food Villa</h1> */}
      <img
        src="https://marketplace.canva.com/EAFYecj_1Sc/1/0/1600w/canva-cream-and-black-simple-elegant-catering-food-logo-2LPev1tJbrg.jpg"
        alt="logo"
        className="logo"
      ></img>
      <h1>Frauget</h1>
      <NavBarItems />
    </div>
  );
};

export default Title;
