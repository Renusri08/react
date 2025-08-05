import React, { Suspense, useEffect ,useState} from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";/**no need of Header.js just Header is enough (it's our choice) */
import Body from "./components/Body";
import About from "./components/AboutUs";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import ContactUS from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { lazy } from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
//import Grocery from "./components/Grocery";

//chunking
//code splitting
//Dynamic Bundling
//Lazy loading
//on demand loading(for example we will see the pages contact ,grocery when we click on the header items )

const Grocery=lazy(()=>import("./components/Grocery"));//dynamic import
//with this all the code does not come at once, it will be loaded only on demand.
const AppLayout=()=>{
   
    const [userName,setUserName]=useState("hi");
     //authentication
     useEffect(()=>{
        const data={
            name:"RenuSri",
        };
        setUserName(data.name);
     },[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            <Header/>
            <Outlet/>
            {/**this outlet takes the element according to path from children*/};
        </div>
        </UserContext.Provider>
        </Provider>
    );

};

/**const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout />,
    errorElement:<Error/>,
},
{
    path:"/about",
    element:<About />,
},
{
    path:"/contact",
    element:<ContactUS/>
}
]);*/ // it is initially without using children routes.

//using children routes making header stick on the top
const appRouter=createBrowserRouter([
{
    path:"/",
    element:<AppLayout />,
    children:[
        {
            path:"/",
            element:<Body/>,
        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<ContactUS/>
        },
        {
            path:"/restaurants/:resId",//here in this path that resId is dynamic(which varies for each restaurant info)
            element:<RestaurantMenu/>
        },
        {
            path:"/grocery",
            element:(<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>),
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ],
    errorElement:<Error/>,
},
]);



const root = createRoot(document.getElementById("root"));
//root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>);



