import { TextField } from "@mui/material";
// Importaciones de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
// linkeado el componente
import "./App.css";
import { useEffect, useState } from "react";

function App() {

  const apiKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY)

  const [cityID, setCityName] = useState("3433955");

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`
    //   `https://api.openweathermap.org/data/2.5/weather?q=?${cityName}&appid=11f370f6b49545f3442d3ea3858319f9&units=metric`
    // 
    )
      // fetch(` https://api.openweathermap.org/data/2.5/weather?id=${process.env.REACT_APP_API_ID}&appid=${process.env.REACT_APP_API_KEY}`)

      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          throw new Error("Esta colocando un caracter/pais invalido");
        }
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className='container'>
      <div className='bg_img'>
        <TextField variant='filled' label='Bucar..' className='input' />
        <h1 className='city'> Buenos Aires</h1>
        <div className='group'>
          {/* Llamo al componente */}
          <FontAwesomeIcon
            icon={faSun}
            style={{ color: "#e1ac19", height: "60px" }}
          />

          <img src='' alt='' />
          <h1>Clear</h1>
        </div>

        <h1 className='temp'>5 °C</h1>

        {/* <Slide direction="right" timeout={800} > */}
        <div className='box_container'>
          <div className='box'>
            <p>Humedad</p>
            <h1>12%</h1>
          </div>

          <div className='box'>
            <p>Vientos</p>
            <h1>5 km/h</h1>
          </div>

          <div className='box'>
            <p>Sensacion termica</p>
            <h1> 4 °C</h1>
          </div>

          {/* </Slide> */}
        </div>
      </div>
    </div>
  );
}

export default App;
