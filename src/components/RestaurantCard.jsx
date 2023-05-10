import React from "react";
import { ImageId } from "../../config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId }) => {
  const srx = ImageId + cloudinaryImageId;
  return (
    <div className="card">
      <img src={srx} />
      <h2>{name}</h2>
      <h3>{cuisines?.join(",")}</h3>
      <h4>$40</h4>
      <h4>4 stars</h4>
    </div>
  );
};

export default RestaurantCard;
