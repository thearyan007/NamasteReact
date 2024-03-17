import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Restaurants from "./Restaurants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../util/useOnlineStatus";
import useRestroList from "../util/useRestroList";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const RestroList = useRestroList();
  const [filteredRestro, setFilteredRestro] = useState([]);

  useEffect(() => {
    setFilteredRestro(RestroList);
  }, [RestroList]);

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you are offline!!, Please Check Your connection.</h1>;
  }

  return RestroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search m-1 p-1 flex justify-center">
        <input
          className="search-bar m-2 px-3 rounded-lg border border-solid border-black"
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          type="submit"
          className="mx-2"
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
      <div className="flter m-1 p-1 flex justify-center">
        <button
          className="filter-btn m-1 px-3 rounded-lg bg-red-400 text-white  border-2 border-black"
          onClick={() => {
            const FilteredList = RestroList.filter(
              (restro) => restro.info.avgRating > 4
            );
            setFilteredRestro(FilteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container flex flex-wrap m-1 p-1 text">
        {filteredRestro.map((restro) => {
          return <Restaurants key={restro.info.id} restData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
