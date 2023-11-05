

//Create variables to store references to your input field, button, and weather info div.
var apiKey = 'a86448f2d316df97a80ebbb47f529c49';
var cityInput = document.getElementById('cityInput');
var getWeatherBtn = document.getElementById('btn2');
var weatherInfo = document.getElementById('weather-info');


getWeatherBtn.addEventListener('click', () => {
    // Get the value of the input field (city name).
    var cityName = cityInput.value;

    if (cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    //Makeing an HTTP request to the OpenWeatherMap API to fetch the weather data.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Parse the data and update the weather info div with the weather details.
            var weatherDescription = data.weather[0].description;
            var mainTemperature = data.main.temp;
            var windSpeed = data.wind.speed;

            var weatherDetails = `
        <p>The weather in ${cityName} is  ${weatherDescription}.</p>
        <p>The temperature is ${mainTemperature}°C with a wind speed of ${windSpeed} m/s</p>
       
      `;

            weatherInfo.innerHTML = weatherDetails;
        })

        //error handeling
        .catch((error) => {
            console.error(error);
            weatherInfo.innerHTML = 'An error occurred while fetching weather data.';
        });
});
