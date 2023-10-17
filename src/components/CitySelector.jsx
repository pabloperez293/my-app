import React from "react";

function CitySelector({ onSelectCity }) {
    const cities = ["Argentina","Francia", "Mexico", "Paris", "Tokyo"];

  return (
    <div>
      <label htmlFor="citySelector">Seleccionar Pais: </label>
      <select id="citySelector" onChange={(evt) => onSelectCity(evt.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CitySelector;
