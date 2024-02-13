import React from "react";
import ReactDOM from "react-dom/client";

/**
 * !Step 1 : Creating a react element using JSX--> JSX is not html inside js
 * ?JSX is a HTMl like syntax
 */

const jsxHeadding = (
  <h1 id="heading" className="hie" tabIndex="2">
    This is from JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * ? Creating a React Functional Component  ---> It is just a normal js function which return    some piece of JSX OR a React Element
 *
 * ! React Functional Component (RFC) uses an arrow function
 * ? Name of the Component should start with a capital letter only
 * TODO We can also use single line arrow function with {}
 * ? For multi line return in arow function use (), just like you use in JSX
 */

const FirstComponent = () => {
  return (
    <h1 className="firstComponent">
      This is my first React Functional Component
    </h1>
  );
};

const element = <div className="ReactEle">This is a Rect Element</div>;

//? Writing a react element inside another react element
const element2 = <div>{element}</div>;

/**
 * ! Writing a component inside a component as a function using {}
 * ? You can also write it as <FirstComponent /> or <FirstComponent></FirstComponent>
 * Todo Writing a react element inside a react component using {}
 * ! Component inside a component is called "Component Composition"
 */

const SecondComponent = () => (
  <div>
    {/* FirstComponent is a RFC*/}
    {FirstComponent()} <h2>Single line arrow function</h2>
    <SecondComponent />
    <SecondComponent></SecondComponent>
    {/* {SecondComponent} This won't work */}
    {element} {/* element is a react element */}
  </div>
);

//! Inside any react component you can write any piece of js code inside {} even console.log()

const ThirdComponent = () => (
  <div>
    {100 + 99}
    <h1 className="thirdComponent">Third Component</h1>
  </div>
);

// Converting jsx into component

/**
 * const JsxHeadding =(
  <h1 id="heading" className="hie" tabIndex="2">
    This is from JSX
  </h1>
);
 */

const JsxHeadding = () => (
  <h1 id="heading" className="hie" tabIndex="2">
    This is from JSX
  </h1>
);

root.render(<ThirdComponent />);

// TODO React.createElement => React Element (JS Object) => With help of ReactDOM ---> During rendering it will be conevrting into HTML element or DOM element

// ! Babel is transpiling JSX into react element
// TODO JSX => React.createElement => React Element (JS Object) => With help of ReactDOM ---> During rendering it will be conevrting into HTML element or DOM element
