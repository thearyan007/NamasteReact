import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useFetchData from "../util/useFetchData";
import Accordian from "./Accordian.js";

const RestaurantInfo = () => {
  const { restroId } = useParams();
  const fetchedData = useFetchData(restroId);

  const basicRestroInfo = fetchedData?.data?.cards[0]?.card?.card?.info;
  const menu =
    fetchedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card?.itemCards;

  // console.log(fetchedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR);
  const catagories =
    fetchedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(catagories);

  if (basicRestroInfo == null || menu.length == 0) return <Shimmer />;
  return (
    <div className="restroInfo ">
      <div className="basicInfo flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl font-bold my-3">{basicRestroInfo.name}</h1>
        <h3 className="text-2xl">Rating: {basicRestroInfo.avgRating}</h3>
        <h3 className="text-xl">{basicRestroInfo.cuisines.join(", ")}</h3>
        <h3 className="text-xl">
          Cost For Two: {basicRestroInfo.costForTwo / 100}
        </h3>
      </div>

      <div className="menu text-3xl my-2">
        <h1 className="m-1 font-semibold">Menu</h1>
        <ol>
          {catagories.map((cat) => {
            return <Accordian catagory={cat} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantInfo;
