import Rescards from "./Rescards";
//import resObj from "../utils/data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
let swiggiAPIURL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.77390&lng=76.64870&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const Body = () => {
  const [listRestaurant, setlistRestaurant] = useState([]);
  const [btnName, setbtnName] = useState("Filter");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(swiggiAPIURL);
    const data = await resp.json();
    resObj =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistRestaurant(resObj);
  };
 function clearfilter() {
    if (btnName === "Filter") {
      const filterList = listRestaurant.filter(
        (res) => res.info.avgRating > 4.2
      );
      setlistRestaurant(filterList);
    } else if (btnName === "Clear") {
      setlistRestaurant(resObj);
    }
    if (btnName === "Filter") {
      setbtnName("Clear");
    } else if (btnName === "Clear") {
      setbtnName("Filter");
    }
  }

  return listRestaurant.length===0?(
    <Shimmer/>
  ):(
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
        <button
          className="filter-btn"
          onClick={() => {
            clearfilter();
          }}
        >
          {btnName}
        </button>
      </div>

      <div className="res-container">
        {listRestaurant.map((restaurant) => (
          <Rescards key={restaurant.info.id} resdata={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
