import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../config";
import Search from "./Search";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Body = (props) => {
  const [restaurantListState, setRestaurantList] = useState(restaurantList);
  const [isLoading, setIsLoading] = useState(true);
  const [restaurantListStateAll, setRestaurantListAll] = useState([]);
  const { user, setUser } = useContext(UserContext);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8136466&lng=75.76440269999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantListAll(json?.data?.cards[2]?.data?.data?.cards);
    setRestaurantList(json?.data?.cards[2]?.data?.data?.cards);
    console.log(json.data.cards[2].data.data.cards[1].data.id);
    setIsLoading(false);
  };
  const newRestaurnatHandler = (newList) => {
    setRestaurantList(newList);
  };

  const contextChangeHandler = (e) => {
    setUser({ name: e.target.value, email: user.email });
  };
  const changeHandler = (e) => {
    e.preventDefault();
    setUser(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const online = useOnline();
  if (!online) {
    return <h1>Check your Interent connection 🔴</h1>;
  }
  return (
    <>
      {isLoading === true ? (
        <h1>
          <Shimmer />
        </h1>
      ) : (
        <>
          <Search
            list={restaurantListStateAll}
            onRestaurantChange={newRestaurnatHandler}
          />
          <input
            type="text"
            onChange={contextChangeHandler}
            value={user.name}
          />
          <button onClick={changeHandler}>User Name</button>

          <div className="restaurant-list">
            {restaurantListState.map((curr) => {
              return (
                <Link to={"/restaurant/" + curr.data.id}>
                  <RestaurantCard key={curr?.data?.id} {...curr.data} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
