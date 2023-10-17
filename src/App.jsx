import { TextField, Slide } from "@mui/material";
import { CircularProgress } from "@mui/material";

// Importaciones de fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudSun } from "@fortawesome/free-solid-svg-icons";
// linkeado el componente
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;

  // console.log(process.env.REACT_APP_API_KEY)

  const [cityID, setCityName] = useState("3433955");
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${apiKey}`
    )
      .then((res) => {
        if (res.status === 200) {
          error && setError(false);
          return res.json();
        } else {
          throw new Error("Esta colocando un caracter/pais invalido");
        }
      })
      .then((data) => {
        setData(data);
        // console.log(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [cityID, error]);

  // console.log(inputText)

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setCityName(e.target.value);
      setInputText("");
    }
  };

  return (
    <div className='container'>
      <div className='bg_img'>
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

            {/* a11y Accecibilidad  */}
            {/* <TextField variant='filled' label='Bucar..' className='input' /> */}

            <h1 className='city'> {data.name}</h1>
            <div className='group'>
              {/* Llamo al componente */}

              <FontAwesomeIcon
                icon={faCloudSun}
                style={{
                  "--fa-primary-color": "#67828e",
                  height: "60px",
                  "--fa-secondary-color": "#ffdd00",
                }}
              />

              <img src={''} alt='' />
              <h1>Clear</h1>
            </div>

            <h1 className='temp'>5 °C</h1>

            <Slide direction='right' timeout={800} in={!loading}>
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
              </div>
            </Slide>
          </>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
}

export default App;
