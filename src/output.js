function outputCurrent(content) {
    console.log(content.name);
    const outputField = document.querySelector("h1");
    outputField.innerText = `${content.name} ${(content.main.temp - 273.15).toFixed(2)}°C`;
    console.log(content);
}

function outputForecast(content) {
    console.log(content);
    
}

export { outputCurrent, outputForecast }
