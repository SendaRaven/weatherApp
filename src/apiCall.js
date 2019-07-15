function apiCall(city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=" + key)
    .then(data => data.json() )
    .then(result => result)
    console.log(result);
}



export{apiCall}