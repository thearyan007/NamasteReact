import { useEffect, useState } from "react";

const useRestroList = () => {
  const [restroList, setRestroList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const list =
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setRestroList(list);
        console.log(list); // Logging inside fetchData
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    };

    fetchData(); // Call fetchData inside useEffect
  }, []); // Empty dependency array to run only once

  return restroList;
};

export default useRestroList;
