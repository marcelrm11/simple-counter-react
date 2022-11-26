//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
// if tick is a functional component
setInterval(() => ReactDOM.render(<Home />, document.querySelector("#app")), 1000);

// if tick is a class component
// ReactDOM.render(<Home />, document.querySelector("#app"));