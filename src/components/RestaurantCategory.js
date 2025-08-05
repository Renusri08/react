import { useState } from "react";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    const { categoryName, items } = data;

    // Boolean to toggle visibility
   

    const handleClick = () => {
        setShowIndex();
    }

    const dispatch=useDispatch();


    const handleAddItem=(item)=>{
        //Dispatch an action
        dispatch(addItem(item));
        /**
            here the data is passes as
            {
                payload:"pizza"
            }
            so action.payload="pizza"
            */


    }

    return (
        <div className="w-6/12 m-auto my-4 bg-gray-50 shadow-lg p-4">
            <div
                className="flex justify-between font-bold cursor-pointer"
                onClick={handleClick}
            >
                <span>{categoryName} ({items.length})</span>
                <span>▼</span>
            </div>

            {showItems && (
                <div>
                    {items.map((item, index) => (
                        <div key={index} className="p-2 m-2 border-gray-200 border-b-2">
                            <div className="flex justify-between">
                                <span>{item.itemName}</span>
                                <span>{item.price}</span>
                                <button className="p-0.5 bg-black shadow-lg text-white" onClick={()=>handleAddItem(item)}>ADD+</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default RestaurantCategory;
