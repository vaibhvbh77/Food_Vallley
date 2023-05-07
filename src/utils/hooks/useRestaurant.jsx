import { useState } from "react";
import { useEffect } from "react";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const getRestaurantInfo = async () => {
    console.log("RERENDERIMG");
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8136466&lng=75.76440269999999&restaurantId=" +
        resId +
        "&submitAction=ENTER"
    );
    const json = await response.json();
    setRestaurant(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
  };
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return restaurant;
};
export default useRestaurant;
