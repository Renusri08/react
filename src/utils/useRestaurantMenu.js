//import {useEffect} from "react";
import mockData from "./mockData";
const useRestaurantMenu=(resId)=>{
    //fetchdata
    const index = mockData.findIndex(item => item.id === resId);
    const data=mockData[index];
    return data;
};
export default useRestaurantMenu;