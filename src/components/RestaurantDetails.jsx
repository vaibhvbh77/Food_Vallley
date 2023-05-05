import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantDetails = (props) => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  const getRestaurantInfo = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8136466&lng=75.76440269999999&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await response.json();
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    setRestaurant(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  };

  return (
    <div className="menu">
      Details :{resId}
      {restaurant.map((curr) => (
        <div>
          <h1>{curr.card.card.title + "tt"}</h1>
          {console.log(curr.card.card)}
          {/* {curr.card.map((c1) => {
            return <h1>{c1.vegOnlyDetails}</h1>;
          })} */}
          {curr?.card?.card?.categories?.map((curr2) => {
            return (
              <div>
                {/* <h2>{curr2.title}</h2> */}
                {console.log(curr2.itemCards[0].card.info.name)}
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
      ))}
      <></>
    </div>
  );
};

export default RestaurantDetails;
