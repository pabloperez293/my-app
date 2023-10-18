import React, {  useState } from "react";
import { TextField, Slide, CircularProgress } from "@mui/material";
// linkeado el componente
import "./App.css";
// Integrando comp al principal
import Geolocalizacion from "./components/Geolocalizacion";
import CitySelector from "./components/CitySelector";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDataFetcher from "./components/WeatherDataFetcher";
import WeatherIcon from "./components/WeatherIcon";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [cityName, setCityName] = useState("Ciudad Autónoma de Buenos Aires");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Esto sirve para la funcion de busqueda de ciudades
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputText("");
    }
  };
  const handleCitySelect = (city) => {
    setCityName(city);
  };

  const handleDataError = (hasError) => {
    setError(hasError);
  };

  const handleDataLoadComplete = () => {
    setLoading(false);
  };

  const handleWeatherData = (data) => {
    setData(data);
  };

  return (
    <div className='container'>
      <div className='bg_img'>
        <WeatherDataFetcher
          cityName={cityName}
          apiKey={apiKey}
          onError={handleDataError}
          onData={handleWeatherData}
          onLoadingComplete={handleDataLoadComplete}
        />
        {!loading ? (
          <>
            <TextField
              variant='filled'
              label='Bucar..'
              className='input'
              error={error}
              value={inputText}
              onChange={(evt) => setInputText(evt.target.value)}
              onKeyDown={handleSearch}
            />

            <h1 className='city'> {data.name}</h1>
            <div className='group'>              
              <WeatherIcon weatherData={data.weather}/>
              <h1>{data.weather[0].main}</h1>
            </div>

            <h1 className='temp'>{Math.round(data.main.temp)}°C</h1>
            <Slide direction='right' timeout={800} in={!loading}>
              <div className='box_container'>
                <div className='box'>
                  <p>Humedad</p>
                  <h1>{data.main.humidity}%</h1>
                </div>
                {/* Geo */}
                <div className='box'>
                  <p>Localización </p>
                  <Geolocalizacion />
                </div>
                {/* ------------------------ */}
                <div className='box'>
                  <p>Vientos</p>
                  <h1>{data.wind.speed}km/h</h1>
                </div>
                <div className='box'>
                  <p>Sensacion termica</p>
                  <h1>{data.main.feels_like.toFixed()}°C</h1>
                </div>
              </div>
            </Slide>
            {/* Select 5 ciudades prestablecidas. */}
            <div className='box'>
              <CitySelector onSelectCity={handleCitySelect} />
              <WeatherDisplay selectedCity={cityName} />
            </div>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}

export default App;
