import React from "react";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId }) => {
  const srx =
    "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    cloudinaryImageId;
  return (
    <div className="card">
      <img src={srx} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>$40</h4>
      <h4>4 stars</h4>
      <button>Add To Cart</button>
    </div>
  );
};

export default RestaurantCard;
