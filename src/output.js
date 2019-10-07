import { weatherUnitConverter as converter } from "./weatherUnitConverter.js";
import { weatherSwitch } from "./weatherUnitConverter.js";

function outputCurrent(content) {
    console.log(content);
    const outputField = document.querySelector("h1");
    outputField.innerText = `${content.name},${content.sys.country} ${converter(content.main.temp)}`;
    console.log(content.main.temp);

    const weatherData = document.querySelector("#weatherData");
    weatherData.innerText = `Wind: ${content.wind.speed} m/s
    Humidity: ${content.main.humidity}%
    ${content.weather[0].description}`;

    let icon = document.querySelector("[alt='weather icon']");
    let iconID = content.weather[0].icon;
    icon.setAttribute("src", `http://openweathermap.org/img/wn/${iconID}@2x.png`)
    icon.classList.toggle("hidden", false);

    const dateOutput = document.querySelector("#date");
    dateOutput.innerText = time();
}

function outputForecast(content) {
    console.log(content);
    let i = 0;
    let substrDate = Number(content.list[0].dt_txt.slice(8, 10));
    let minArray = [];
    let maxArray = [];
    while (i <= 4) {
        //let resultArray = [];
        let result = content.list.filter(date => date.dt_txt.slice(8, 10) == substrDate);
        let mapedResult = result.map(data => data.main.temp);
        minArray.push(Math.min(...mapedResult));
        maxArray.push(Math.max(...mapedResult));
        //console.log(result);
        substrDate++;
        i++;

    }
    //console.log(minArray);
    //console.log(maxArray);
    let minRow = document.getElementsByClassName("min");
    let maxRow = document.getElementsByClassName("max");
    //console.log(minRow);

    for (let i = 1; i < 5; i++) {
        //console.log(minRow[0])
        minRow[i].innerText = converter(minArray[i]);
        maxRow[i].innerText = converter(maxArray[i]);
    }
}

function time() {
    const currentDate = new Date()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return `${daysOfWeek[currentDate.getDay()]} ${currentDate.getHours()}:${(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()}`;
}



export { outputCurrent, outputForecast }
