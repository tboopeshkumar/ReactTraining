//main.js
import React from "react";
//hosting react into real dom/html
import {render} from "react-dom";
//import {App} from "./app/App";
import Routes from "./app/Routes";
import "./app/Store";

render(
   <Routes></Routes>, 
    document.getElementById("root"),
    ()=>console.log("render is done"));