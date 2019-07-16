
import { apiCall } from "./apiCall.js"

const userInputField = document.querySelector('[placeholder="Please, enter city!"]');

userInputField.addEventListener("click", () => {
  // const keyValue = event.key;
  // console.log(event.key);
  // console.log(keyValue === "Enter");

  // if (event.keyCode === 13) {}
  let userInputFieldValue = document.querySelector('[placeholder="Please, enter city!"]').value;
  console.log(userInputFieldValue);
  apiCall(userInputFieldValue);
})
