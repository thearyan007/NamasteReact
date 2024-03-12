import { useEffect, useState } from "react";
import { MENU_API } from "../util/constants";

const useFetchData = (restroId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(MENU_API + restroId);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return data;
};

export default useFetchData;
