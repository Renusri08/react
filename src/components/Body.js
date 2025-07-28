import { useEffect, useState } from "react";
import reslist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
  const [filteredRestaurant,setFilteredRestaurant]=useState(reslist,[]);

  const [searchText,setSearchText]=useState("",[]);
 {/**  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await res.json();
      console.log(json);
    };
  
    fetchData();
  }, []);*/}//here we are unable to fetch data from that api(due to some restrictions of swiggy)
  console.log("hi");
 return (
    <div className="body">
            <div className="filter">
              <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                  console.log(searchText);
                  const filteredList=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredList);
                }}>Search</button>
              </div>
              <button className="filter-btn" onClick={()=>{
                
                const filteredList=listOfRestaurants.filter(
                  (res)=>res.avgRating>4
                );
                setListOfRestaurants(filteredList);
              }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {/**<RestaurantCard resname="Renu foods" cuisine="Biriyani,North india"/>
                <RestaurantCard resname="Chusma foods" cuisine="Burger,fast foods"/>{/**here we passed props to component */}
                 {/**here we are passing many arguments passing data like this is some what clumpsy way
                 * so we can pass data in object form(in javascript object is like dictionary)
                 * for example
                 * {<RestaurantCard resData={objectname}/>}
                */}
               {/**  <RestaurantCard resData={reslist[0]}/>
                <RestaurantCard resData={reslist[1]}/>
                <RestaurantCard resData={reslist[2]}/>
                <RestaurantCard resData={reslist[3]}/>
                <RestaurantCard resData={reslist[4]}/>
                <RestaurantCard resData={reslist[5]}/>
                <RestaurantCard resData={reslist[6]}/>*/}
                {filteredRestaurant.map((restaurant)=>(
                  <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                {/**here map filter reduce is used
                 * map function in javascript we used 
                 */}    
            </div>
        </div>
  );
};

export default Body;
