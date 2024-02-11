import React from "react";
import ReactDOM from "react-dom/client";

// Step 1 : Creating an h1 element, as it is a part of core react we used react

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Namaste Duniya from React"
);
//console.log(heading);

// Step 2 : We need a root to render our code, so we are telling our react where to render our code, as it is the part of ReactDOM we used ReactDOM

const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);

// Step 3 : Do rendering
// root.render(heading);

//----------------------------------------------------------------------------------

const heading2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I' am Child 1 heading 1"),
    React.createElement("h1", {}, "I' am Child 1 heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I' am Child 1 heading 1"),
    React.createElement("h1", {}, "I' am Child 1 heading 2"),
  ])
]);
//---> We cannot pass 2 react elements in render, it will only execute the first element and ignore the second one

root.render(heading2);