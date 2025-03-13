const apiKey = "b5ebee98722217c92b5a82631f27c0c8";
const locationInput = document.getElementById("location");
const searchButton = document.getElementById("search");
const locationElement = document.getElementById("cityname");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchButton.addEventListener("click", (e) => {
  const address = locationInput.value;
  e.preventDefault();
  fetchWeather(address);
});

async function fetchWeather(address) {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response not ok!");
    }
    const weatherData = await response.json();
    console.log(weatherData);
    locationElement.innerHTML = weatherData.name;
    temperatureElement.innerHTML = `${weatherData.main.temp} °C`;
    descriptionElement.innerHTML = weatherData.weather[0].description;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert(
      "An error occurred while fetching weather data. Please try again later."
    );
  }
}
