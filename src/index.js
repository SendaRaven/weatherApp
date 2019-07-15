import {config} from "./config.js";
import {apiCall} from "./apiCall.js"
const key = config.key;



const createElement = message => {
    const element = document.createElement("div");
    element.innerHTML = message; 
    return element;
  };
  
  document.body.appendChild(createElement("Hello, World!"));

  apiCall("Berlin")