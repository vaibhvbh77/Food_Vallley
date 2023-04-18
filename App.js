import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Title from "./components/Title";

const heading1 = <h1> This is an element.</h1>;

const AppLayout = () => {
  return (
    <React.Fragment>
      <Title />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
