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
let form = document.querySelector(".search-bar");
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
