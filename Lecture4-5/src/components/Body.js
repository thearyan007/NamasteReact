import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../util/useOnlineStatus";

const Body = () => {
  let [RestroList, setRestroList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  let [filteredRestro, setFilteredRestro] = useState([]);

  const [searchText, setSearchText] = useState("");

  const getData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const fetchedRestro =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(fetchedRestro);
    setFilteredRestro(fetchedRestro);
    setRestroList(fetchedRestro);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline!!, Please Check Your connection.</h1>;
  }
  return RestroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search">
        <input
          className="search-bar"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          onClick={() => {
            const updatedRestro = RestroList.filter((restro) => {
              return restro.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRestro(updatedRestro);
          }}
        >
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
            setFilteredRestro(FilteredList);
            // console.log(RestroList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {filteredRestro.map((restro) => {
          return <Restaurants key={restro.info.id} restData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
