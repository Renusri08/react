import RestaurantCard from "./RestaurantCard";
import reslist from "../utils/mockData";
import {useState} from "react";


    
const Body=()=>{
    //let listOfRestaurants=reslist;(normal js variable)
    const [listOfRestaurants,setListOfRestaurants]=useState(reslist);//normal localstate variable
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    console.log("button clicked")
                    const filteredList=listOfRestaurants.filter(
                        (res)=>res.avgRating>4
                    );
                    setListOfRestaurants(filteredList);
                    console.log(listOfRestaurants);
                }}
                >Top Rated restaurants</button>
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
                {listOfRestaurants.map((restaurant)=>(
                  <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))}
                {/**here map filter reduce is used
                 * map function in javascript we used 
                 */}
                
            </div>  
        </div>
    )
}
export default Body;