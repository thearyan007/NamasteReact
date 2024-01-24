import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  let [RestroList, setRestroList] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const fetchedRestro =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(fetchedRestro);
    setRestroList(fetchedRestro);
  };
  if (RestroList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
        ></input>
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
      <div className="flter">
        <button
          className="filter-btn"
          onClick={() => {
            const FilteredList = RestroList.filter(
              (restro) => restro.info.avgRating > 4
            );
            setRestroList(FilteredList);
            console.log(RestroList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {RestroList.map((restro) => {
          return <Restaurants key={restro.info.id} restData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
