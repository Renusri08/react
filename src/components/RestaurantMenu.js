//import {useEffect, useState} from "react";
//import mockData from "../utils/mockData";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {restaurantMenus} from "../utils/mockData2";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";


const RestaurantMenu =()=>{
    const [showIndex,setShowIndex]=useState(null)
    {/**useEffect(()=>{
        { api call to fetch data }//but for it is not working to fetch through api call so we are 
         using mock data here.
    },[])*/}//this will be rendered only once 

    {/**useEffect(() => {
        fetchMenu();
    }, []);
    const corsProxy = "https://corsproxy.io/?key=e2073940&url=";
    const swiggyUrl = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.50330&lng=80.64650&restaurantId=218610&catalog_qa=undefined&query=Biryani&submitAction=ENTER";

    const fetchMenu = async () => {
        try {
            const data = await fetch(corsProxy + encodeURIComponent(swiggyUrl));
            const json = await data.json();
            console.log(json);
        } catch (error) {
            console.error("Fetch error:", error);
        }
    };*/}
    //here i am unable to fetch data using apis so using mockdata available i created baisc info page for each restaurant card.
    const {resId}=useParams();//this is taken from the parameters passed in the url from which we are accessingt his component.
    const resdata=useRestaurantMenu(resId);
    const {name,cuisines,cloudinaryImageId,costForTwo,locality,areaName}=resdata;
    const categories=restaurantMenus[resId];
    console.log(categories);

  

    return(
        <div className="text-center">
            <h1 className="font-bold my-10 text-2xl">{name}</h1>
            <p>{cuisines.join(",")}-{costForTwo}</p>
            {/* categories accordions*/}
            {categories.map((category,index)=>{
                
                return <RestaurantCategory key={index} data={category} showItems={index===showIndex ? true:false} setShowIndex={()=>{showIndex!=index?setShowIndex(index):setShowIndex(null)}} />
            })}
        </div>
    );
};
export default RestaurantMenu;