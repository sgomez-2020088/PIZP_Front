import React, { useEffect, useState } from 'react'
import { Map } from '../Map/Map';
import { Box, Text } from '@chakra-ui/react';
import { Maps } from '../Map/Maps';
import { useGetReports } from '../../shared/hooks/useGetReports';
import { BounceLoader } from 'react-spinners';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';


const InfoDelito = ({description, typeCrime})=>{
  return(
    <>
      <Text> Descripción: {description}</Text>
      <Text>Tipo de Delito: {typeCrime}</Text>
    </>
  )
}

export const Reports = () => {
        const [marker, setMarkerPosition]=  useState(null)

        const [open, setOpen] = useState(null)


        const {reports, isFetching,getReports}=useGetReports()

        useEffect(() => {
          getReports()
        }, [])
        
        if(isFetching){
          return(
            <BounceLoader  color="#DE4B4B" size={100} speedMultiplier={1}/>
          )
        }

        console.log(reports)

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="70rem" height="34rem"  style={{ margin: '5rem auto' }}>
        <Maps>
          {reports.map((report) => (<><AdvancedMarker key={report._id} position={{ lat: report.lat, lng: report.lng }} description={report.description}  onClick={() => { setOpen(open === report._id ? null : report._id); }}/>
            {open === report._id&&(<InfoWindow  position={{ lat: report.lat, lng: report.lng }} onCloseClick={()=>{setOpen(null)}}><InfoDelito description={report.description} typeCrime={report.typeCrime}/></InfoWindow>)} </>))}
        </Maps>
      </Box>
    </>
  )
}
