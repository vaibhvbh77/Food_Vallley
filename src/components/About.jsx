import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      About Page this is .
      <Outlet />
    </div>
  );
};

export default About;
