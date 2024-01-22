import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Restaurants from "./Restaurants";
import restroData from "../util/restroData";

const Body = () => {
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
      <div className="restaurants-container">
        {restroData.map((restro) => {
          return <Restaurants key={restro.info.id} restData={restro} />;
        })}
      </div>
    </div>
  );
};

export default Body;
