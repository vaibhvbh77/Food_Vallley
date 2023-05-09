import React from "react";
import { useState } from "react";
import Section from "./Section";

const InstaMart = () => {
  const [isVisible, setIsVisible] = useState("");
  const showhideHandler = (title) => {
    if (title === isVisible) {
      setIsVisible("");
    } else {
      setIsVisible(title);
    }
  };
  return (
    <div>
      Insta mart Welcomes you.
      <Section
        title="About"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={isVisible === "About"}
        onShowHide={showhideHandler}
      />
      <Section
        title="Contact"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={isVisible === "Contact"}
        onShowHide={showhideHandler}
      />
      <Section
        title="Help"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        isVisible={isVisible === "Help"}
        onShowHide={showhideHandler}
      />
    </div>
  );
};

export default InstaMart;
