function outputCurrent(content) {
    const outputField = document.querySelector("h1");
    outputField.innerText = `${content.name} ${(content.main.temp - 273.15).toFixed(2)}°C`;
    console.log(content);
    const dateOutput = document.querySelector("#date")
    dateOutput.innerText = time();

}

function outputForecast(content) {
    console.log(content);

}

function time() {
    let currentDate = new Date()
    let daysOfWeek = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday", "Saturday" ]
    return `${daysOfWeek[currentDate.getDay()]} ${currentDate.getHours()}:${(currentDate.getMinutes()<10?'0':'') + currentDate.getMinutes() }`;
}



export { outputCurrent, outputForecast }
