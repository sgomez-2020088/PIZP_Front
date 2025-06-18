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
    <APIProvider apiKey='AIzaSyAhoC1Gjnmo2AYoJ8gFN5u_Lwnvumbida8'>
      <Map defaultCenter={position} defaultZoom={12} maxZoom={21} minZoom={8} mapId='d83b2bfcb134e57b5d056f3b' onClick={handleClickChangeMarker}>
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
