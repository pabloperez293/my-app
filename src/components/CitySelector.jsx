import React, { useState }  from "react";

function CitySelector({ onSelectCity }) {

    const preselectedCities = ["Argentina","Francia", "Mexico", "Paris", "Tokyo"];
    const [selectedCity, setSelectedCity] = useState("");

    const handleCitySelect = (city) => {
      setSelectedCity(city);
      onSelectCity(city); // Llama a la función pasada como prop
    };

  return (
    <div>
      <label htmlFor="citySelector">Seleccionar Pais: </label>
      <select id="citySelector" onChange={(evt) => onSelectCity(evt.target.value)}>
        <option value="">Select a city</option>
        {preselectedCities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      </div>
  );
}
export default CitySelector;
