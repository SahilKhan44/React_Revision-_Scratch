// const root = ReactDOM.createRoot(document.getElementById("root"));
// const headingStyle ={
//     color:"red",
//     backgroundColor : "black"
// }
// const heading = React.createElement("h1", {id: "id",style: headingStyle} , "Hii This is hello");
// root.render(heading);
import React from 'React';
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = React.createElement("div", {}, [
  React.createElement("div", { id: "parent1" }, [
    React.createElement("h3", { id: "child3" }, "Hii This is child"),
    React.createElement("h3", { id: "child4" }, "Hii This is child2"),
  ]),
  React.createElement("div", { id: "parent2" }, [
    React.createElement("h3", { id: "child3" }, "Hii This is child"),
    React.createElement("h3", { id: "child4" }, "Hii This is child2"),
  ]),
]);

root.render(heading);
