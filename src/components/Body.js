import { useEffect, useState ,useContext} from "react";
import reslist from "../utils/mockData";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(reslist);
  const [filteredRestaurant,setFilteredRestaurant]=useState(reslist,[]);

  const [searchText,setSearchText]=useState("",[]);
  const {setUserName}=useContext(UserContext);
  const {loggedInUser}=useContext(UserContext); 
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
 {/**  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.50330&lng=80.64650&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const json = await res.json();
      console.log(json);
    };
  
    fetchData();
  }, []);*/}//here we are unable to fetch data from that api(due to some restrictions of swiggy)

 // console.log("hi");
 const status=useOnlineStatus();
 if(status===false){
  return(
    <h1>Looks like you are offline! please check your internet connection</h1>
  );
}
 
 return (
    <div className="body">
            <div className="filter flex">
              <div className="search m-4 p-4">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="p-2 bg-pink-200 m-4 rounded-xl" onClick={()=>{
                  console.log(searchText);
                  const filteredList=listOfRestaurants.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredList);
                }}>Search</button>
              </div>
              <div className="m-4 p-4">
              <button className="px-4 py-2 bg-blue-200 m-4 rounded-xl " onClick={()=>{
                
                const filteredList=listOfRestaurants.filter(
                  (res)=>res.avgRating>4
                );
                setListOfRestaurants(filteredList);
              }}>Top Rated Restaurants</button></div>
            <div className="search m-4 p-4">
                <label>UserName: </label>
                <input type="text" className="border border-solid border-black" value={loggedInUser} onChange={(e)=>{
                    setUserName(e.target.value);
                }}/>
                
              </div>
              
            </div>

            <div className="flex flex-wrap mx-2">
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
                  <Link  key={restaurant.id} to={"/restaurants/"+restaurant.id}>
                    {/** if the restaurant is promoted then add a promoted label to it*/
                    restaurant.promoted? (<RestaurantCardPromoted resData={restaurant} /> ): (<RestaurantCard resData={restaurant}/> )}
                   
                  </Link>

                ))}
                {/**here map filter reduce is used
                 * map function in javascript we used 
                 */}    
            </div>
        </div>
  );
};

export default Body;
