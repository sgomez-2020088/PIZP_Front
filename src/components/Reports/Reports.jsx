import React, { useState } from 'react'
import { Map } from '../Map/Map';
import { Box } from '@chakra-ui/react';
import { Maps } from '../Map/Maps';


export const Reports = () => {
        const [marker, setMarkerPosition]=  useState(null)


        const handleClickChangeMarker = (e)=>{
        setMarkerPosition(e.detail.latLng)
        console.log(e.detail.latLng)
       
    }
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
  <Maps marker={marker} handleClickChangeMarker={handleClickChangeMarker}/>
</Box>
    </>
  )
}
