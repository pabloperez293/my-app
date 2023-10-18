import React from "react";
import { faSun, faCloud, faSnowflake, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function WeatherIcon({ weatherData }) {
  let weatherIcon = faSun;

  if (weatherData && weatherData.length > 0) {
    switch (weatherData[0].main) {
      case "Clear":
        weatherIcon = faSun;
        break;
      case "Clouds":
        weatherIcon = faCloud;
        break;
      case "Snow":
        weatherIcon = faSnowflake;
        break;
      case "Rain":
        weatherIcon = faCloudRain;
        break;
      default:
        weatherIcon = faSun;
    }
  }
  return <FontAwesomeIcon icon={weatherIcon} style={{ height: "60px" }} /> 
}
export default WeatherIcon;
