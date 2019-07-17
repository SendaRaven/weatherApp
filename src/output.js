import { weatherUnitConverter as converter } from "./weatherUnitConverter.js";

function outputCurrent(content) {
    console.log(content);
    const outputField = document.querySelector("h1");
    outputField.innerText = `${content.name} ${converter(content.main.temp)}`;

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

    while (i <= 6) {
        let resultArray = [];
        let result = content.list.filter(date => date.dt_txt.slice(8, 10) == substrDate)
        console.log(result);
        substrDate++;
        i++;

    }

}

function time() {
    const currentDate = new Date()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return `${daysOfWeek[currentDate.getDay()]} ${currentDate.getHours()}:${(currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes()}`;
}



export { outputCurrent, outputForecast }
