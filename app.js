const heading= React.createElement("h1",{id:"heading"},"Hello world from react!");
//above heading is the react element (javascript object)
//and here everything in () of createElement are props(properties) of that object)
//{} in this braces in above function createElement we can add attriburtes we want to that tag

/** for this react element we are passing three arguments
 *  first argument tag name or element.
 *  second argument properties to that element(like attributes of that html  tag etc).
 *  third argument is children tags or text in that html tag.
 */

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(heading); //object

root.render(heading) //render method converts this object heading into html tag.
//heading tag is added to root dom

/** 
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *      </div>
 * </div>
 * 
 */

//creating this above nested dom or html code with react

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement
    ("div",
        {id:"child"},
        React.createElement("h1",{},"I'm an h1 tag")
    )
);
root.render(parent);

//ReacElement(object) ==> HTML(Browser understands)

/** 
 * 
 * <div id="parent2">
 *      <div id="child2">
 *          <h1>I'm an second h1 tag</h1>
 *          <h2>I'm an h2 tag</h2>
 *      </div>
 * </div>
 * 
 */

/**to add more than one children like there are two heading tags in div tag with child id,
 *  we pass array as the third argument to our object*/

const parent2=React.createElement(
    "div",
    {id:"parent2"},
    React.createElement
    ("div",
        {id:"child2"},
        [React.createElement("h1",{},"I'm an second h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
    )
);
root.render(parent2);

//ONLY ONE OBJECT I RENDERED TO THE ROOT OF HTML DOCUMENT WHICH IS RENDERED LAST,OR HERE WE CAN
//UNDERSTAND LIKE THIS,HERE WE RENDERED DIFFERENT OBJECTS TO THE ROOT(REFERING TO ANY TAG IN HTML)
//IF WE RENDER TWO OBJECTS TO THE SAME ONE, FIRST ONE IS OVERRIDED BY SECOND ONE.

//THIS IS THE CORE OF THE REACT.

// TO SIMPLIFY THIS REACT WE USE JSX WHUICH MAKES ALL THIS REACT CODE EVEN MODE SIMPLER.

/** AND IF WE HAVE ALREAD ANY TAGS OR CHILDREN IN THE TAG IF WE RENDER SOME JS OBJECT TO THAT 
 * THEN THE CHILD TAGS ALL IN THAT TAG ARE REPLACED BY THIS OBJECT*/

