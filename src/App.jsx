import { TextField, Slide ,CircularProgress} from "@mui/material";
// Importaciones de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloud, faSnowflake ,faCloudRain } from "@fortawesome/free-solid-svg-icons";
// linkeado el componente
import "./App.css";
import React,{ useEffect, useState } from "react";
import Geolocalizacion from "./components/Geolocalizacion";
// Integrando comp al principal
import CitySelector from "./components/CitySelector";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherDataFetcher from "./components/WeatherDataFetcher";


function App({ onSelectCity }) {
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
  }
  const handleCitySelect = (city) => {
    setCityName(city);
  }

  const handleDataError = (hasError) => {
    setError(hasError);
  }

  const handleDataLoadComplete = () => {
    setLoading(false);
  }

  const handleWeatherData = (data) => {
    setData(data);
  }

  // Agregando los iconos 
let weatherIcon;

if (data.weather && data.weather.length > 0){
  switch (data.weather[0].main) {
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
  }}else{
    weatherIcon = faSun;
  }

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
              {/* Llamo al componente */}

              <FontAwesomeIcon icon={weatherIcon} style={{                 
                  height: "60px",
                }} />


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
