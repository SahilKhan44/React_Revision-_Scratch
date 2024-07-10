// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // const headingStyle ={
// //     color:"red",
// //     backgroundColor : "black"
// // }
// // const heading = React.createElement("h1", {id: "id",style: headingStyle} , "Hii This is hello");
// // root.render(heading);


// import React from 'React';
// import ReactDOM from 'react-dom/client'


// // const heading = React.createElement("div", {}, [
// //   React.createElement("div", { id: "parent1" }, [
// //     React.createElement("h3", { id: "child3" }, "Hii This is child"),
// //     React.createElement("h3", { id: "child4" }, "Hii This is child2"),
// //   ]),
// //   React.createElement("div", { id: "parent2" }, [
// //     React.createElement("h3", { id: "child3" }, "Hii This is child"),
// //     React.createElement("h3", { id: "child4" }, "Hii This is child2"),
// //   ]),
// // ]);

// // console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);




// const root = ReactDOM.createRoot(document.getElementById("root"));
// const headingStyle ={
//     color:"red",
//     backgroundColor : "black"
// }
// const heading = React.createElement("h1", {id: "id",style: headingStyle} , "Hii This is hello");
// root.render(heading);

// scratch to new 

import React from 'React';
import ReactDOM from 'react-dom/client'


// const heading = React.createElement("h1", {id:"heading"},"Hello Sahil");


//Jsx
// its transpiled before it reaches the JS engine -> parcel -> babel job to compile engine language
const heading2 = <h1>Hii this is jsx</h1>

// //React components
// //Class based components old way
// //functional way new 
// When you write components then yopu have to start with capital letter 

// Functional Components
const Card = () => {
  return (
  <div>
  <h1>This is other one</h1>
  </div>
)}

const HeadingComponents = () => {
return <div>
  <Card/>
  <h1>Sahil khan</h1>
 
 </div> 
}


//when we render our functional components then we reander like that
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponents/>);
// root.render(heading)
