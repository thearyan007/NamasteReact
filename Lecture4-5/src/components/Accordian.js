import { useState } from "react";

const Accordian = (cat) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  //   console.log("categories", cat);

  return (
    <div className="relative mb-3 ">
      <h6 className="mb-0">
        <button
          className={`relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500 ${
            isOpen ? "group-open" : ""
          }`}
          onClick={toggleAccordion}
        >
          <span className="text-lg">{cat?.catagory?.card?.card.title}</span>
          <i
            className={`absolute right-0 pt-1 text-base transition-transform fa fa-chevron-down ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </button>
      </h6>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="p-4 text-sm leading-normal text-blue-gray-500/80">
          <ol className="flex-col justify-center items-center">
            {cat?.catagory?.card?.card?.itemCards?.map((dish) => {
              return (
                <li className=" p-2 m-2">
                  <p>{dish?.card?.info?.name}</p>
                  <p>
                    Price:{" ₹"}
                    {dish?.card?.info?.price / 100 ||
                      dish?.card?.info?.defaultPrice / 100}
                  </p>
                  <hr className="my-2 border-gray-300" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
