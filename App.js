import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = <h1> This is an element.</h1>;

const Heading2 = () => {
  return (
    <div>
      This is a functional component.
      <h2>This is the secnond line</h2>
      {heading1}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
