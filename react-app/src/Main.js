//main.js
import React from "react";
//hosting react into real dom/html
import {render} from "react-dom";
import {App} from "./app/App";

render(<App></App>, document.getElementById("root"));