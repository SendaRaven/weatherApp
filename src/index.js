
import { apiCallCurrent, apiCallForecast } from "./apiCall.js"


const btn = document.querySelector(".btn");
console.log(btn);

btn.addEventListener("click", () => {
  // const keyValue = event.key;
  // console.log(event);
  // console.log(keyValue === "Enter");

  // if (event.keyCode === 13) {}
  let userInputFieldValue = document.querySelector('[placeholder="Please, enter city!"]').value;
  //console.log(userInputFieldValue);
  apiCallCurrent(userInputFieldValue);
  apiCallForecast(userInputFieldValue);
})
