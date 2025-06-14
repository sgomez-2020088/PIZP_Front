import React, { useState } from 'react';
import IconMarker from '../../assets/IconMarker.png';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text, onMouseEnter, onMouseLeave }) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    style={{ cursor: 'pointer' }}
  >
    <img
      src={IconMarker}
      alt="marker"
      style={{ width: '3rem', height: '3rem' }}
    />
    {text && (
      <div style={{
        position: 'absolute',
        top: '50px',  
        left: '-50%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '5px',
        borderRadius: '3px',
        fontSize: '14px',
      }}>
        {text}
      </div>
    )}
  </div>
);

export const Map = ({ center, zoom }) => {
  const [markerPosition, setMarkerPosition] = useState(null);
  const [isHovered, setIsHovered] = useState(false); 

  const handleMapClick = ({ lat, lng }) => {
    setMarkerPosition({ lat, lng });
    console.log(lat, lng);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);  
  };

  const handleMouseLeave = () => {
    setIsHovered(false);  
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
            text={isHovered ? '¡Hola!' : ''}  
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </GoogleMapReact>
    </div>
  );
};