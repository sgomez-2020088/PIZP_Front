import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => (
  <div>
    <img
      src="https://c0.klipartz.com/pngpicture/396/299/gratis-png-pin-de-google-maps-fabricante-de-google-map-pin-logo-de-ubicacion-de-google-thumbnail.png"
      alt="marker"
      style={{ width: '30px', height: '30px' }}
    />
  </div>
);

export const Map = ({ center, zoom }) => {
  const [markerPosition, setMarkerPosition] = useState(null);  // Guardar la posición del marcador

  // Manejar el clic en el mapa
  const handleMapClick = ({ lat, lng }) => {
    setMarkerPosition({ lat, lng });
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBwvz7czj_xp-zvC8GM_xIv9Xb2Hlfe59Y' }} 
        defaultCenter={center}
        defaultZoom={zoom}
        onClick={handleMapClick}  
      >
       
        {markerPosition && (
          <Marker
            lat={markerPosition.lat}
            lng={markerPosition.lng}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};
