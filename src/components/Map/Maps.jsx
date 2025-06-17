import { Text } from '@chakra-ui/react';
import { AdvancedMarker, APIProvider, InfoWindow, Map } from '@vis.gl/react-google-maps';
import React, { useState } from 'react';

export const Maps = ({ marker, handleClickChangeMarker, id, children }) => {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState('');  
  const position = { lat: 14.60178208398095, lng: -90.54235243138898 };

  
  const handleClickBox = () => {
    setOpen(!open);
    if (marker) {
      getAddress(marker);  
    }
  };

  
  



  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <Map defaultCenter={position} defaultZoom={12} maxZoom={21} minZoom={8} mapId={import.meta.env.VITE_ID_MAP} onClick={handleClickChangeMarker}>
        {children}

        {marker && (
          <>
            <AdvancedMarker key={id} position={marker} onClick={handleClickBox}></AdvancedMarker>
          </>
        )}
      </Map>
    </APIProvider>
  );
};
