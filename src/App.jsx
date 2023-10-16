import {  TextField } from "@mui/material"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {
  return <div className="container">
<div className="bg_img">
    <TextField variant="filled" label="Bucar.." className="input"/>
    <h1 className="city"> Buenos Aires</h1>
    <div className="group">

{/* Llamo al componente */}
<FontAwesomeIcon icon={faSun} style={{color: "#e1ac19", height:"60px"}} />
     
    
    <img src="" alt="" />
    <h1>Clear</h1>
    </div>

    <h1 className="temp">5 °C</h1>

    {/* <Slide direction="right" timeout={800} > */}
    <div className="box_container">
      <div className="box">
        <p>Humedad</p>
        <h1>12%</h1>
      </div>

      <div className="box">
        <p>Vientos</p>
        <h1>5 km/h</h1>
      </div>

      <div className="box">
        <p>Sensacion termica</p>
        <h1> 4 °C</h1>
      </div>

      {/* </Slide> */}

    </div>

  </div>
  </div>
  
  
  
}

export default App;
