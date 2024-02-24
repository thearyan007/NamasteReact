import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../util/constants";

const RestaurantInfo = () => {
  const [basicRestroInfo, setBasicRestroInfo] = useState(null);
  const [menu, setMenu] = useState([]);
  const { restroId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + restroId);
    const json = await data.json();
    const rInfo = json?.data?.cards[2]?.card?.card?.info;
    const mnu =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    console.log(json);
    console.log(mnu);
    console.log(rInfo);
    setBasicRestroInfo(rInfo);
    setMenu(mnu);
  };
  if (basicRestroInfo == null || menu.length == 0) return <Shimmer />;
  return (
    <div className="restroInfo">
      <div className="basicInfo">
        <h1>{basicRestroInfo.name}</h1>
        <h3>Rating: {basicRestroInfo.avgRating}</h3>
        <h3>{basicRestroInfo.cuisines.join(", ")}</h3>
        <h3>Cost For Two: {basicRestroInfo.costForTwo / 100}</h3>
      </div>
      <div className="menu">
        <h1>Menu:</h1>
        <ol>
          {menu.map((dish) => {
            return (
              <li key={dish.card.info.id}>
                {dish.card.info.name}, Price: ₹
                {dish.card.info.price / 100 ||
                  dish.card.info.defaultPrice / 100}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantInfo;
