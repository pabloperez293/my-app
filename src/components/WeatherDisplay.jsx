import React, { useState, useEffect } from "react";
import axios from "axios";

function WeatherDisplay({ selectedCity }) {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    if (selectedCity) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=${apiKey}`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [selectedCity]);

  return (
    <div>
      {weatherData && (
        <div>
          <h2> {selectedCity}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          {/* Agrega más detalles según la API de OpenWeather */}
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
