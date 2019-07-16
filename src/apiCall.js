import { config as key } from "./config.js";

function apiCall(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;
    fetch(url)
        .then(data => data.json())
        .then(result => console.log(result))
        .catch(error => console.log(error))
}

export { apiCall }