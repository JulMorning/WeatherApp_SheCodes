function formatDate() {
  let now = new Date();
  console.log(now);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[now.getDay()];
  console.log(currentDay);
  let currentHour = now.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let formatedDate = `Last Update: ${currentDay}, ${currentHour}:${currentMinutes}`;
  console.log(formatedDate);
  let lastUpdate = document.querySelector("#lastUpdate");
  lastUpdate.innerHTML = formatedDate;
  return formatedDate;
}
formatDate();

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector(".search-button");
form.addEventListener("submit", search);

function convertToFahrenheit(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = 66;
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();

  let temperatureElement = document.querySelector("#temperature");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function displayWeatherCondition(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "5dd071644aff4379355022a20839a99e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "5dd071644aff4379355022a20839a99e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector(".current-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Kyiv");

// function convertToFahrenheit(event) {
//   event.preventDefault();

//   let temperatureElement = document.querySelector("#temperature");
//   let temperature = temperatureElement.innerHTML;
//   temperature = Number(temperature);
//   temperatureElement.innerHTML = 66;
// }
// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);

// function convertToCelsius(event) {
//   event.preventDefault();

//   let temperatureElement = document.querySelector("#temperature");
//   let temperature = temperatureElement.innerHTML;
//   temperature = Number(temperature);
//   temperatureElement.innerHTML = 19;
// }
// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);

// function showTemperature(response) {
//   console.log(response.data.main.temp);
//   let temperature = Math.round(response.data.main.temp);
//   let localTemperature = document.querySelector("#temperature");
//   localTemperature.innerHTML = `${temperature}`;
// }
// function showLocation(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;
//   let units = "metric";
//   let apiKey = "5dd071644aff4379355022a20839a99e";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
//   console.log(apiUrl);

//   axios.get(apiUrl).then(showTemperature);
// }
// navigator.geolocation.getCurrentPosition(showLocation);
