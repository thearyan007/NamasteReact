import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ catagory }) => {
  const [showItems, setShowItems] = useState(false);
  const clickHandle = () => {
    setShowItems(!showItems);
  };
  //   console.log("data", catagory);
  return (
    <div className="">
      <div className="w-8/12 mx-auto my-4 font-normal  shadow-md bg-[#ddd7cc]">
        <div
          className="flex justify-between my-2 py-2 shadow-md cursor-pointer"
          onClick={clickHandle}
        >
          <span className="font-normal text-xl mx-1 font-semibold ">
            {catagory.title} ({catagory.itemCards.length})
          </span>
          <span className="font-normal text-xl">🔽</span>
        </div>
        <div className="text-center">
          {/* accordian body */}
          {showItems && <ItemList data={catagory.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
