const weatherImg = document.querySelector("#weather img");
const temperature = document.querySelector("#weather span");
const city = document.querySelector("#city span");

const API_KEY = config.API_KEY;

function getSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const imgSrc = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      weatherImg.src = imgSrc;
      temperature.innerText = `${parseInt(data.main.temp)}°`;
      city.innerText = data.name;
      console.log(temperature, city);
    });
}

function getFail() {
  alert("Fail to get your location!");
}

navigator.geolocation.getCurrentPosition(getSuccess, getFail);
