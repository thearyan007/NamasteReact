import { Link } from "react-router-dom";
import { CDN_LINK_IMAGEURL } from "../util/constants";

const Restaurants = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, id, cuisines, avgRating, areaName } =
    restData?.info; //destructuring
  return (
    <Link to={"/restaurant/" + id}>
      <div className=" border shadow-md flex-row justify-center items-center border-black w-[215px] h-[450px] m-1 p-1 rounded-lg bg-[#ddd7cc] hover:bg-[#d8d0c3] ">
        <img
          className="m-1 p-1 w-[200px] h-[200px] rounded-lg"
          src={CDN_LINK_IMAGEURL + cloudinaryImageId}
          alt="resto-Image"
        />
        <h2 className="p-1 m-1 font-bold">{name}</h2>
        <h4 className="p-1 m-1 text-wrap">{cuisines.join(", ")}</h4>
        <h4 className="m-1 p-1">Rating:{avgRating} </h4>
        <h4 className="m-1 p-1">{areaName}</h4>
      </div>
    </Link>
  );
};

export default Restaurants;
