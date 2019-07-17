import { config as key } from "./config.js";
import { outputForecast, outputCurrent } from "./output";

function apiCallCurrent(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`;

    fetch(url)
        .then(data => data.json())
        .then(result => {
            //console.log(result);

            outputCurrent(result)
        })
        .catch(error => console.log(error))
}

function apiCallForecast(city) {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key}`;

    fetch(url)
        .then(data => data.json())
        .then(result => {
            //console.log(result);

            outputForecast(result)
        })
        .catch(error => console.log(error))
}


export { apiCallCurrent, apiCallForecast}
