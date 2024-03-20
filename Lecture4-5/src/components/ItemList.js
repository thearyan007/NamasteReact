import { CDN_LINK_IMAGEURL } from "../util/constants";
const ItemList = ({ data }) => {
  console.log("data:::", data);

  return (
    <div>
      {data.map((dis, index) => (
        <div className="shadow-sm" key={index}>
          <div className="flex justify-center  flex-wrap items-center justify-between ">
            <div className="flex-col flex-wrap text-wrap text-left w-3/6">
              <p className="font-normal text-sm m-2 font-semibold">
                {dis?.card?.info?.name}
              </p>
              <p className="font-normal text-left text-sm m-2">
                Price: ₹
                {dis?.card?.info?.price / 100 ||
                  dis?.card?.info?.defaultPrice / 100}
              </p>
            </div>

            <div className="image">
              <button className="bg-black text-sm absolute text-white rounded-md">
                Add+
              </button>
              <img
                className="w-[80px] h-[80px]  mx-2 rounded-md shadow-sm"
                src={CDN_LINK_IMAGEURL + dis?.card?.info?.imageId}
              ></img>
            </div>
          </div>

          <div className="text-xs text-left p-2">
            <p className="pb-1">{dis?.card?.info?.description}</p>
          </div>
          {/* {console.log("name:  ", dis?.card?.info?.name)} */}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
