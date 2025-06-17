import React, { useEffect, useState } from 'react'
import { Map } from '../Map/Map';
import { Box, Text } from '@chakra-ui/react';
import { Maps } from '../Map/Maps';
import { useGetReports } from '../../shared/hooks/useGetReports';
import { BounceLoader } from 'react-spinners';
import { AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

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
            <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" marginTop='20%'>
              <BounceLoader  color="#DE4B4B" size={100} speedMultiplier={1}/>
            </Box>
          )
        }

        console.log(reports)

  return (
    <>
       <MotionBox display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginTop="1rem" initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  >
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="100rem" height="45rem"  style={{ margin: '5rem auto' }}>
        <Maps >
          {reports.map((report) => (<><AdvancedMarker key={report._id} position={{ lat: report.lat, lng: report.lng }} description={report.description}  onClick={() => { setOpen(open === report._id ? null : report._id); }}/>
            {open === report._id&&(<InfoWindow  position={{ lat: report.lat, lng: report.lng }} onCloseClick={()=>{setOpen(null)}}><InfoDelito description={report.description} typeCrime={report.typeCrime}/></InfoWindow>)} </>))}
        </Maps>
      </Box>
      </MotionBox>
    </>
  )
}
