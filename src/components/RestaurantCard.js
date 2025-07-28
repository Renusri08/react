import { CDN_URL } from "../utils/constant";



const RestaurantCard=(props)=>{
    const{resData}=props;
          /** we can store name ,cuisines,rating */
    const{cloudinaryImageId,name,avgRating,cuisines,deliveryTime,costForTwo}=resData;
    
    return(
        <div className="res-card" >
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}></img>
            <div className="resinfo">
            {/**<h3>{resData.name}</h3>
            <h4 className="cuisines">{resData.cuisines.join(",")}</h4>
            <h4>5 stars</h4>
            <h4>38 minutes</h4>*/}
            <h3>{name}</h3>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
            </div>
        </div>
    )
}
export default RestaurantCard;