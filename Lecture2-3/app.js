import React from "react";
import ReactDOM from "react-dom/client";

// By React Syntex:
const heading = React.createElement(
  "h1",
  { id: "Heading" },
  "Hello World by React!!"
);

// By JSX Syntex:
const jsxHeading = <h1 id="Heading">Hello World By JSX!!2+2={2 + 2}</h1>; //this is react element
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading); //rendering react element

// react components
const HeadingComponent = () => {
  return (
    <div id="headingCompo">
      <h1>This is the Heading.!!!!</h1>
    </div>
  );
};

//if one line of the code to be returned then the word return can be ommited

const TitleComponent = () => (
  <div id="title">
    <h1>This is the Tittle...!!!</h1>
  </div>
);
// Component composition: composing one or more component inside another component
// dont add ; after the line otherwise it will also print in new line.
// in place of arrow fuunction we can use normal function too, but arrow functions are recommended
// we can add React element inside component using {};
const CoposeComponent = function () {
  return (
    <div id="container">
      <TitleComponent />
      <TitleComponent></TitleComponent>
      {TitleComponent()}
      <HeadingComponent />
      {jsxHeading}
      <h1>...THE END...</h1>
    </div>
  );
};

// rendering component
const rootComponents = ReactDOM.createRoot(
  document.getElementById("components")
);
rootComponents.render(<CoposeComponent />);
