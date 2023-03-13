let now = new Date();

let h2 = document.querySelector("h2");

let date = now.getDate();
let year = now.getFullYear();
let minutes = String(now.getMinutes()).padStart(2, "0");
let hours = now.getHours();
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

h2.innerHTML = `${day}, ${month} ${date}, ${year} ${hours}:${minutes}`;

function showTemperature(response) {
  let currentDegree = Math.round(celsiusTemperature);
  let currentDay = response.data.weather[0].description;
  let temperature = document.querySelector("#temperatureToday");
  temperature.innerHTML = `${currentDegree}°C ${currentDay}`;
  let currentCity = response.data.name;
  let h1 = document.querySelector("h1");
  h1.innerHTML = currentCity;
}

function search(event) {
  event.preventDefault();
  let apiKey = "17ad6e67aa629189f73b053634668b20";
  let city = document.querySelector("#currentPlace").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function displayFahrenheit(event) {
  event.preventDefault;
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperatureToday");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let celsiusTemperature = null;

let form = document.querySelector("form");
form.addEventListener("submit", search);

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", displayFahrenheit);
