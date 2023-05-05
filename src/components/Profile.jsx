import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("TImer");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      Welcome this page is created by vaibhav.
      <h2>count:{count}</h2>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Incease
      </button>
    </div>
  );
};

export default Profile;
