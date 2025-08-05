import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

//we cannot use hooks in class based components.
class AboutUs extends React.Component {
 
  constructor(props){
    super(props);
    console.log("Parent constructor");

    this.state={
      userInfo:{
        name:"Dummy",
        location:"default",
        avatar_url:"http://.com"
      }
    }
  }
  
  async componentDidMount(){
   
    //console.log("Parent Render");
    //api call

    const data=await fetch("https://api.github.com/users/Renusri08");
    const json=await data.json();
    this.setState({
      userInfo:json
    });
    
  console.log(json);
}

  render() {
    //console.log("Parent Render");

    const {name,location,avatar_url}=this.state.userInfo;

    return (
      <div className="user-card">
        {/**<h1>About</h1>
        <h2>This is Namasthe react series</h2>
        {/**<User name={"Renusri(function)"} /> {//functional component }
        <UserClass name={"FIRST CHILD(class)"} location={"class based component1"} />
        <UserClass name={"SECOND CHILD(class)"} location={"class based component2"} />
        {/**REACT BATCH THE RENDER PHASE FOR THESE TWO COMPONENTS,SO FIRST RENDER PAHASE OF
         * BOTH CLASSES WILL BE COMPLETED THEN COMMIT PHASE IN WHICH FIRST CHILD COMPONENTDIDMOUNT()
         * IS CALLED AND THEN SECOND CHILD COMPONENTDIDMOUNT IS CALLED AFTER THAT THIS ABOUT US COMPONENTDIDMOUNT()
         * IS CALLED.
         */}   
         <img src={avatar_url}/>
         {/**using usercontext in class based component*/}
         <div>
          LoggedIn User
          <UserContext.Consumer>
            {/**(data)=>{
                console.log(data);
            }*/}
            {({loggedInUser})=>
               <h1>{loggedInUser}</h1>
            }
          </UserContext.Consumer>
         </div>
         <h2>Name:{this.state.userInfo.name}</h2>
         <h3>Location:{location}</h3>
         <h4>Contact:@renusri</h4>

      </div>
    );
  }
}
/**
 * 
 * --MOUNTING---
 * constructor(with dummy data)
 * Render(dummy)
 *    <HTML Dummy>
 * Component Did Mount
 *    <Api call>
 *    <this.setState>
 * 
 * --UPDATE--CYCLE
 * 
 *  render(API data)
 *  <HTML (new API data)>
 *   --Component Did Update
 * 
 * --UNMOUNTING CYCLE
 *   component Did Mount is called and then that component will be disappeared from DOM.
 *    FOR EXAMPLE: when we are in about us now and if we click on contact link in header then
 *    about us component will be unmounted and contact us component is mounted.
 */

export default AboutUs;
