export const filterRestaurant = (searchText, list) => {
  const newRestaurantList = list?.filter((curr) =>
    curr.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return newRestaurantList;
};
