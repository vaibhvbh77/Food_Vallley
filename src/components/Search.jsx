import React from "react";
import { useState } from "react";
import { filterRestaurant } from "../utils/helper";
const Search = (props) => {
  const [searchText, setSearchText] = useState("");
  const searchHandler = (event) => {
    setSearchText(event.target.value);
    const newRestaurantList = props.list?.filter((curr) =>
      curr.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    props.onRestaurantChange(newRestaurantList);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newRestaurantList = filterRestaurant(searchText, props?.list);
    props.onRestaurantChange(newRestaurantList);
  };

  return (
    <div className="searchContainer">
      <input
        type="text"
        value={searchText}
        onChange={searchHandler}
        placeholder="search"
      />
      <button onClick={submitHandler}>Find Restaurant</button>
    </div>
  );
};

export default Search;
