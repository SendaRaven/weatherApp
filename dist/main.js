!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o="8df1edc16c64b894ea5f51944ca9d512";let r=document.querySelector('input[type="checkbox"]');function c(e){let t=document.querySelector("input[type='checkbox']");return t.checked?(console.log(t.checked),`${(e-273.15).toFixed(1)}°C`):`${(1.8*(e-273.15)+32).toFixed(1)} °F`}function u(e){console.log(e),document.querySelector("h1").innerText=`${e.name},${e.sys.country} ${c(e.main.temp)}`,console.log(e.main.temp),document.querySelector("#weatherData").innerText=`Wind: ${e.wind.speed} m/s\n    Humidity: ${e.main.humidity}%\n    ${e.weather[0].description}`;let t=document.querySelector("[alt='weather icon']"),n=e.weather[0].icon;t.setAttribute("src",`http://openweathermap.org/img/wn/${n}@2x.png`),t.classList.toggle("hidden",!1),document.querySelector("#date").innerText=function(){const e=new Date;return`${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]} ${e.getHours()}:${(e.getMinutes()<10?"0":"")+e.getMinutes()}`}()}function i(e){fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${e}&APPID=${o}`).then(e=>e.json()).then(e=>{!function(e){console.log(e);let t=0,n=Number(e.list[0].dt_txt.slice(8,10)),o=[],r=[];for(;t<=4;){let c=e.list.filter(e=>e.dt_txt.slice(8,10)==n).map(e=>e.main.temp);o.push(Math.min(...c)),r.push(Math.max(...c)),n++,t++}let u=document.getElementsByClassName("min"),i=document.getElementsByClassName("max");for(let e=1;e<5;e++)u[e].innerText=c(o[e]),i[e].innerText=c(r[e])}(e)}).catch(e=>console.log(e))}r.addEventListener("change",function(){r.checked?outputfield.innerText="1":outputfield.innerText=`${(1.8*(content.main.temp-273.15)+32).toFixed(1)} °F`}),document.querySelector(".btn").addEventListener("click",()=>{let e=document.querySelector('[placeholder="Please, enter city!"]').value;!function(e){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&APPID=${o}`).then(e=>e.json()).then(e=>{u(e)}).catch(e=>console.log(e))}(e),i(e)})}]);