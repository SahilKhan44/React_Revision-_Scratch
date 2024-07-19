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
// const heading2 = <h1>Hii this is jsx</h1>

// //React components
// //Class based components old way
// //functional way new 
// When you write components then yopu have to start with capital letter 

// Functional Components
// const Card = () => {
//   return (
//   <div>
//   <h1>This is other one</h1>
//   </div>
// )}

// const HeadingComponents = () => {
// return <div>
//   <Card/>
//   <h1>Sahil khan</h1>
 
//  </div> 
// }

const Header = () => {
  return(
    <div className="header">
    <div className="logo-container">
    <img src="data:image/png;base64,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" width= "100px" height= "100px"alt="LOGO" />
    </div>
    <div className="nav-items">
      <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Cart</li>
      </ul>
    </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div className= "app">
   <Header/>
   
    </div>
  )
}





//when we render our functional components then we reander like that
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
// root.render(heading)
