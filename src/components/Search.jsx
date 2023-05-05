import React from "react";
import { useState } from "react";
import restaurantList from "../../config";

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
    console.log(props.list);
    event.preventDefault();
    const newRestaurantList = props.list?.filter((curr) =>
      curr.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(newRestaurantList);
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
