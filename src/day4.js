import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";/**no need of Header.js just Header is enough (it's our choice) */
import Body from "./components/Body";



const AppLayout=()=>{
    console.log(<Body/>);
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);



