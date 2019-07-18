function weatherUnitConverter(degrees) {
    let unitSwitchState = document.querySelector("input[type='checkbox']")
    //unitSwitchState.addEventListener("change",)


    if (unitSwitchState.checked) {
        console.log(unitSwitchState.checked);
        return `${(degrees - 273.15).toFixed(1)}°C`;
    } else {
        return `${((degrees - 273.15) * (9 / 5) + 32).toFixed(1)} °F`;
    }
}

weatherUnitConverter(290)

export { weatherUnitConverter }