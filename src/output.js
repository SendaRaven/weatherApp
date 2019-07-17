function outputCurrent(content) {
    const outputField = document.querySelector("h1");
    outputField.innerText = `${content.name} ${(content.main.temp - 273.15).toFixed(2)}°C`;
    console.log(content);
    const dateOutput = document.querySelector("#date")
    dateOutput.innerText = time();
    const weatherData = document.querySelector("#weatherData");
    weatherData.innerText = `Wind: ${content.wind.speed} m/s
    Humidity: ${content.main.humidity}%
    ${content.weather[0].description}
    `;
}

function outputForecast(content) {
    console.log(content);
    let i = 0;
   let substrDate = content.list[0].dt_txt.slice(8,10);
    // while (i<=6) {
        
        let result = content.list.filter(date => date.dt_txt.slice(8,10) == substrDate)
        console.log(result);
        
        console.log("MIN:"+ Math.min(...result) + "MAX:"+ Math.min(...result));
    // }
    
}

function time() {
    const currentDate = new Date()
    const daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday" ]
    return `${daysOfWeek[currentDate.getDay()]} ${currentDate.getHours()}:${(currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes() }`;
}



export { outputCurrent, outputForecast }
