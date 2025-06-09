import React from 'react'
import { Map } from '../Map/Map';

export const Reports = () => {
        const defaultCenter = { lat: 37.7749, lng: -122.4194 };  
        const defaultZoom = 11;
  return (
    <>
        <Map center={defaultCenter} zoom={defaultZoom}/>
    </>
  )
}
