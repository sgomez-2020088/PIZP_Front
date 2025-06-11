import React from 'react'
import { Map } from '../Map/Map';
import { Box } from '@chakra-ui/react';

export const Reports = () => {
        const defaultCenter = { lat: 14.6349, lng: -90.5069 };  
        const defaultZoom = 14;
  return (
    <>
    <Box 
    display="flex" 
    alignItems="center" 
    justifyContent="center" 
    flexDirection="column" 
    width="70rem" 
    height="34rem"  
    style={{ margin: '5rem auto' }} 
>
  <Map 
    center={defaultCenter} 
    zoom={defaultZoom} 
    
  />
</Box>
    </>
  )
}
