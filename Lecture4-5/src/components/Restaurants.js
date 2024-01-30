import { Link } from "react-router-dom";
import { CDN_LINK_IMAGEURL } from "../util/constants";

const Restaurants = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, id, cuisines, avgRating, areaName } =
    restData?.info; //destructuring
  return (
    <Link to={"/restaurant/" + id}>
      <div className="restaurant">
        <img src={CDN_LINK_IMAGEURL + cloudinaryImageId} alt="resto-Image" />
        <h2>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating:{avgRating} </h4>
        <h4>{areaName}</h4>
      </div>
    </Link>
  );
};

export default Restaurants;
