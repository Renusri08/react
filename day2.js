import React from "react";
import { createRoot } from "react-dom/client";

//React.createElement ==> object ==>HTML element(when we render on to DOM)
//REACT ELEMENT
const heading= React.createElement(
    "h1",
    {'id':"heading"},
    "created React element"
);//we can call this part of code as javascript still. but used react library.(it can be run by browser)
console.log(heading);
// creating element in react like above which we can simply create in html is not developer friendly.

/**  so to help all the developers facebook developer community created JSX(JAVA SCRIPT SYNTAX)
 * WHICH IS EASIER TO CREATE REACT ELEMENTS*/

//JSX (it is just a syntax uses in react) ==>HTML LIKE or XML LIKE syntax.
// jsx is not html in javascript (we can call it as html like syntax)
const elem = <h3>chusma</h3>;

const jsxheading = (
    <>
    <h1 id="heading" className="head">
      created react element using jsx
    </h1>
    {elem}
     {/**ou do need one single parent wrapper around multiple JSX elements.*/}
    </>
   
);

//jsx is not normal javascript which browser can execute directly.
//this jsx code is transpiled to the code that browsers can understand (parcel do's this)
//parcel means parcel not directly involves(there is a package called BABEL which converts this jsx to react)
//JSX ==> REACTelement -JS object ==>HTML element.
console.log(jsxheading);
//here both are objects (heading ad jsxheading)



//react functional component
const HeadingComponent=()=>{
    return <h1>namasthe adham</h1>
};
//it is nothing but a js arrow function that return a piece of jsx code.
//we can create above function like this also
const HeadingComponent2=()=> <h1>namasthe adham</h1>;
const HeadingComponent3=()=>(
     <h1>namasthe adham</h1>
     
);
// all above 3 are valid. 
const name="Renusri";
//we can create a function that returns any jsx code like below
const Hii=()=>(
   <div id="container">
    <h1 className="hi">hi friends</h1>
   {jsxheading}
   {elem}
   {/** here i can use {componentname()} similar to function call in js and like this also <componentname></componentname> */}
    </div>
);
/**like in above function we have rendered and used headingcomponent (react component) 
  in component called Hii.and like {name} in above function we can add any javascript code in {} curly braces and put it in 
return of functioal component.
and here we inserted react element {jsxheading} also in react component above we can see like
 this we can use element in component, in same way we can put element inside element,component
 inside component,element inside component,component inside element*/
//we can use javscript code anywhere writting it in {} inside any jsx code.
//here creating element also we create with jsx code.

const fn=()=> true//when it is a single line to return no need of curly braces and return keyword.
const root=createRoot(document.getElementById("root"));


root.render(<Hii/>) /** this render function converts react element(js object) into html element and 
replace everything in that root with what ever we are rendering */
//here what we rendered last is only rendered here that is Hii (react component)
