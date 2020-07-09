let cityData, userInput;

const $city = $("#city");
const $temperature = $("#temperature");
const $feels = $("#feels");
const $weather = $("#weather");
const $input = $("input[type='text']");

$("form").on("submit", handleGetData);
function handleGetData(event) {
  event.preventDefault();
  userInput = $input.val();
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=09856b87418c53545fcf2c54e776fac7&units=imperial`,
  }).then(
    (data) => {
      console.log(data);
      cityData = data;
      render();
    },
    (error) => {
      console.log("ERROR IS ", error);
    }
  );
}

function render() {
  $city.html(cityData.name);
  $temperature.html(parseInt(cityData.main.temp) + "&deg;");
  $feels.html(parseInt(cityData.main.feels_like) + "&deg;");
  $weather.html(cityData.weather[0].main);
  $("span").html(
    `<img src="http://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png">`
  );
}

// api key
// 09856b87418c53545fcf2c54e776fac7

// http://openweathermap.org/img/wn/10d@2x.png
