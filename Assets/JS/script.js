var search = document.querySelector("#city-search");
var searchButton = document.querySelector(".result");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uv = document.getElementById("uv");
var searchButton = document.getElementById("search");

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=1b9f4d048e97e2bc095ae46ebcee2a71"
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=1b9f4d048e97e2bc095ae46ebcee2a71"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        displayInfo(data);
      });
  });

var displayInfo = function (data) {
  searchButton.addEventListener("click", function () {
    city.textContent = data.name;
    temp.textContent = "Temp: " + data.main.temp + " \u00B0 F ";
    wind.textContent = "Wind: " + data.wind.speed + " MPH";
    humidity.textContent = "Humidity: " + data.main.humidity + " %";
    uv.textContent = "10";
  });
};

var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var city = city.value.trim();

  if (city) {
    getUserRepos(city);

var getUserRepos = function(user) {
  // format the api url
  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=1b9f4d048e97e2bc095ae46ebcee2a71";

  // make a get request to url
  fetch(apiUrl)
    .then(function(response) {
      // request was successful
      if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
          console.log(data);
          displayRepos(data, user);
        });
      } else {
        alert("Error: " + response.statusText);
      }
    })
    .catch(function(error) {
      alert("error");
    });
}
  }} //I can't figute it out//