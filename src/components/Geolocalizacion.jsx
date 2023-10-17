import React, { useState, useEffect } from "react"

function Geolocalizacion() {

  const [position, setPosition] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      console.log(position);

      navigator.geolocation.getCurrentPosition((position) => {
        setPosition(position);
      },
        (error) => {
          console.error("No se encuentra Localizacion", error)
        });
    }else{
      console.log("La Geolocalizacion no esta disponible");
    }
  }, []);

  return (
    <div>
    {position ? (
      <div>
        <p>Latitud: {position.coords.latitude}</p>
        <p>Longitud: {position.coords.longitude}</p>
      </div>
    ) : (
      <p>Obteniendo la geolocalización...</p>
    )}
  </div>
  )
}
export default Geolocalizacion;