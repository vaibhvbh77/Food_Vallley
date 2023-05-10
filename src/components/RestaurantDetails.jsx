import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/hooks/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantDetails = (props) => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="menu">
      Details :{resId}
      {restaurant ? (
        restaurant?.map((curr) => (
          <div>
            {curr?.card?.card?.categories?.map((curr2) => {
              return (
                <div className="menu">
                  {curr2.itemCards.map((curr3) => (
                    <div className="card">
                      <h3>{curr3.card.info.name}</h3>
                      <h3>Price: Rs {curr3.card.info.price / 100}</h3>
                      <div>
                        <button
                          className="cartButton"
                          onClick={() => handleAddItems(curr3.card.info)}
                        >
                          Add To Cart
                        </button>
                      </div>
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
