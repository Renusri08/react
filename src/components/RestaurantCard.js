import { CDN_URL } from "../utils/constant";
import { useEffect, useState,useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const{resData}=props;
          /** we can store name ,cuisines,rating */
    const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime,costForTwo}=resData;
    const {loggedInUser}=useContext(UserContext);
    
    return(
        <div className="my-2 mx-4 p-4 w-[300px] h-[400] bg-gray-100 hover:bg-white hover:shadow-2xl rounded-xl border border-solid border-black" >{/** like this we can specify size[] */}
            <img className=" w-[280] h-[200] rounded-xl" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <div className="m-4">
            {/**<h3>{resData.name}</h3>
            <h4 className="cuisines">{resData.cuisines.join(",")}</h4>
            <h4>5 stars</h4>
            <h4>38 minutes</h4>*/}
            <h3 className="font-bold">{name}</h3>
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            <h4>user:{loggedInUser}</h4>
            </div>
        </div>
    )
}
//higher order component(which is returning a component)
//input -RestaurantCard ==>>RestaurantCardPromoted
export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white mx-1 p-1 rounded-lg">promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
}


export default RestaurantCard;