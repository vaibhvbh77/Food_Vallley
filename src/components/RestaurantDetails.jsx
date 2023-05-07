import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";
const RestaurantDetails = (props) => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  return (
    <div className="menu">
      Details :{resId}
      {restaurant ? (
        restaurant?.map((curr) => (
          <div>
            <h1>{curr.card.card.title + "tt"}</h1>
            {curr?.card?.card?.categories?.map((curr2) => {
              return (
                <div>
                  {curr2.itemCards.map((curr3) => (
                    <div className="card" key={curr3.card.info.id}>
                      <h3>{curr3.card.info.name}</h3>
                      <h3>Price: Rs {curr3.card.info.price}</h3>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))
      ) : (
        <Shimmer />
      )}
      <></>
    </div>
  );
};

export default RestaurantDetails;
