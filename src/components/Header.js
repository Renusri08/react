import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
const Header=()=>{
    let [btnName,setbtnNAme]=useState("Login",[]);/**special local variable which makes 
    function component dynamic,that means if a variable in js is updated wherever that variable is used in 
    our ui it will get updated automatically and reflected in our app and website with updated data.*/
    console.log("header rendered");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>cart</li>
                    <li>Contact us</li>
                    <button className="login" onClick={()=>
                        {
                            setbtnNAme("Logout");/**whenever this function is called react will rerender this
                            header component(this is all because of usestate in react)(it trigger the reconsiliation algorithm)*/
                        }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;