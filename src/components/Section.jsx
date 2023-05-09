import React from "react";

const Section = ({ title, description, isVisible, onShowHide }) => {
  const showHideHandler = () => {
    onShowHide(title);
  };
  return (
    <div className="section">
      <b className="title"> {title}</b>
      <button onClick={showHideHandler}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <div>{description}</div>}
    </div>
  );
};

export default Section;
