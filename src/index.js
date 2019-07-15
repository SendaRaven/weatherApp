import {config} from "./config.js";

const createElement = message => {
    const element = document.createElement("div");
    element.innerHTML = message; 
    return element;
  };
  
  document.body.appendChild(createElement("Hello, World!"));