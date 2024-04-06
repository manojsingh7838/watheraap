

//api key "4cd0eee81294c867b4bc4cfc64e998c5"
//const url = https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key};

const inputBox = document.querySelector('#input-box');
const searchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');
//1ea7603f2e104309dc93427c0d4f7cba
 async function checkweather(city){
const api_key='25cc38dbda8a2d6fc3ce93d9e0b6a271'
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const watherdata= await fetch(`${url}`)
const data= await watherdata.json()
console.log(data)
if(data.cod=='404'){
    location_not_found.style.display="flex"
    weather_body.style.display="none"
    return;
}
temperature.innerHTML=`${Math.round(data.main.temp-273.35) }°C`;
description.innerHTML=`${data.weather[0].description
}`
humidity.innerHTML = `${data.main.humidity}%`;
wind_speed.innerHTML = `${data.wind.speed}Km/H`;

switch (data.weather[0].main) {
    case 'Clouds':
        weather_img.src="./img/cloud.png"
        break;
    case 'Clear':
        weather_img.src="./img/clear.png"
            break;
    case 'Rain':
        weather_img.src="./img/rain.png"
         break;
     case 'Mist':
        weather_img.src="./img/mist.png"
        break;
    case 'Snow':
        weather_img.src="./img/snow.png"
        break;
}
}
searchBtn.addEventListener('click',()=>{
    checkweather(inputBox.value)
})