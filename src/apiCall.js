import { config as key } from "./config.js";
import { output } from "./output";

function apiCall(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;

    fetch(url)
        .then(data => data.json())
        .then(result => {
            console.log(result);

            output(result)
        })
        .catch(error => console.log(error))
}

export { apiCall }