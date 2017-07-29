//main.js
import React from "react";
//hosting react into real dom/html
import {render} from "react-dom";
//import {App} from "./app/App";
import Routes from "./app/Routes";
import store from "./app/Store";
import {Provider} from "react-redux";

render(<Provider store={store}>
   <Routes></Routes>
   </Provider>, 
    document.getElementById("root"),
    ()=>console.log("render is done"));