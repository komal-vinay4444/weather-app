const button = document.getElementById("getWeatherBtn");
const result = document.getElementById("weatherResult");
const speed = document.createElement('p')
const temp = document.createElement('p')
const weth = document.createElement('p')
const weatherIcon = document.getElementById('weatherIcon');


result.appendChild(temp)
result.appendChild(speed)
result.appendChild(weth)

async function getWeather() {

    const cityInput = document.getElementById("cityInput").value;

    // console.log(cityInput);
    const API_KEY = "d7be331a606c6a431511cd1da0203303"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${API_KEY}&units=metric`;

    const response = await fetch(URL);

    const data = await response.json();

    console.log(data);

    windSpeed = data.wind.speed;
    temperature = data.main.temp;
    weather=data.weather[0].main;
    let path="";

    if (weather==="Clear") {
        document.body.className="sunny";
        path="https://img.icons8.com/color/50/sun--v1.png";
    }
    else if (weather==="Clouds"){
        document.body.className="cloudy";
        path="https://img.icons8.com/color/50/partly-cloudy-day.png";
    }
    else if (weather==="Rain"){
        document.body.className="rainy";
        path="https://img.icons8.com/emoji/48/cloud-with-lightning-and-rain.png";
    }
    else if (weather==="Snow") {
        document.body.className="snowy";
        path="https://img.icons8.com/color/50/sleet.png";
    }

    speed.innerText = `Wind Speed = ${windSpeed}`;
    temp.innerText = `Temperature = ${temperature}°C`;
    weth.innerText = `Weather = ${weather}`;
    weatherIcon.src = path;
    }
                                                   