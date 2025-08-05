import { useEffect, useState,useContext } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header=()=>{
    let [btnName,setbtnNAme]=useState("Login",[]);/**special local variable which makes 
    function component dynamic,that means if a variable in js is updated wherever that variable is used in 
    our ui it will get updated automatically and reflected in our app and website with updated data.*/
    console.log("header rendered");//with this in console of output i can clearly see that header component is rendered again. 

    useEffect(()=>{
        console.log("useEffect called");
    }); 
    const onlineStatus=useOnlineStatus();
    //if there is no dependency array=>useEffect is called on every render
    //if dependency array is empty =[]=>useEffect is called on initial render(just once)
    //if dependency array is [btnNamReact]=>called everytime btnNameReact is updated.

    //const data=useContext(UserContext);
    const {loggedInUser}=useContext(UserContext);
    //console.log(data);

    //subscribing to the store using a selector
    //useSelector gives access to the store
    const cartItems=useSelector((store) => store.cart.items);//reading the items
    //store.cart.items(here cart is a slice name and then items is a variable i think)
    //this  cartItems will have the data of cart items.
    console.log(cartItems);

    return(
        <div className="flex justify-between h-[70] bg-black text-white shadow-lg m-2">{/**tailwind css */}
            <div className="logo-container">
                <img className="w-15 m-2" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{onlineStatus ? "🟢":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li className="px-4">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                    

                    <button className="login" onClick={()=>
                        {
                            setbtnNAme("Logout");/**whenever this function is called react will rerender this
                            header component(this is all because of usestate in react)(it trigger the reconsiliation algorithm)*/
                        }}>{btnName}</button>
                    {/**<li className="px-4">{data.loggedInUser}</li>*/}
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;