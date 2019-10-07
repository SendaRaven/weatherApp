let toggleSwitch = document.querySelector('input[type="checkbox"]');
//console.log(toggleSwitch);
toggleSwitch.addEventListener("change", weatherSwitch)

function weatherSwitch() {

    if (toggleSwitch.checked) {

        //console.log(toggleSwitch.checked);
        outputfield.innerText = `1`;
    } else {
        outputfield.innerText = `${((content.main.temp - 273.15) * (9 / 5) + 32).toFixed(1)} °F`;
    }
}

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



export { weatherUnitConverter, weatherSwitch }