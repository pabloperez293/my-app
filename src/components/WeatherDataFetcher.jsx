import React, { useEffect, useState } from "react";

function WeatherDataFetcher({ cityName, apiKey, onError, onData, onLoadingComplete }) {
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
    )
      .then((res) => {
        if (res.status === 200) {
          onError(false);
          return res.json();
        } else {
          throw new Error("Esta colocando un caracter/pais invalido");
        }
      })
      .then((data) => {
        onData(data);
      })
      .catch(() => onError(true))
      .finally(() => onLoadingComplete());
  }, [cityName, apiKey, onError, onData, onLoadingComplete]);

  return null;
}

export default WeatherDataFetcher;
