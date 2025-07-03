import React, { useEffect, useState } from 'react'
import { Map } from '../Map/Map';
import { Box, Icon, Text } from '@chakra-ui/react';
import { Maps } from '../Map/Maps';
import { useGetReports } from '../../shared/hooks/useGetReports';
import { BounceLoader } from 'react-spinners';
import { AdvancedMarker, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import { motion } from 'framer-motion';
import { InfoIcon } from '@chakra-ui/icons';
import { FilterBar } from '../FilterBar/FilterBar';

const MotionBox = motion(Box)

const InfoDelito = ({description, typeCrime, address})=>{
  return (
    <Box bg="white" p="4" borderRadius="lg" boxShadow="0 5px 20px rgba(0,0,0,0.25)" border="1px solid #DE4B4B" minW="250px">
      <Text fontSize="md" fontWeight="bold" color="#DE4B4B" mb="2" display="flex" alignItems="center">
        <Icon as={InfoIcon} mr="2" /> Información del Reporte
      </Text>
      <Text fontSize="sm" mb="1">
        <strong>Dirección:</strong> {address}
      </Text>
      <Text fontSize="sm" mb="1">
        <strong>Descripción:</strong> {description}
      </Text>
      <Text fontSize="sm">
        <strong>Tipo de Delito:</strong> {typeCrime}
      </Text>
    </Box>
  )
}

export const Reports = () => {
        const [marker, setMarkerPosition]=  useState(null)

        const [open, setOpen] = useState(null)
        const [filter, setFilter] = useState(['all'])


        const {reports, isFetching,getReports}=useGetReports()

        useEffect(() => {
          getReports()
        }, [])
        console.log(reports)
        
        if(isFetching){
          return(
            <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" marginTop='20%'>
              <BounceLoader  color="#DE4B4B" size={100} speedMultiplier={1}/>
            </Box>
          )
        }

        console.log(reports)

        const filteredPublications = filter.includes( 'all')
        ? reports
        : reports.filter(reports => filter.includes(reports.typeCrime))
       
  return (
    <>
        <Box  display="flex" alignItems="center" justifyContent="center" bg='#12101C' width='100%'>
          <FilterBar filter={filter} setFilter={setFilter}/>
        </Box>
       <MotionBox display="flex" alignItems="center" justifyContent="center" flexDirection="column"  initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  >
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="99.5vw" height="92.5vh">
        <Maps position={{ lat: 14.60178208398095, lng: -90.54235243138898 }}  reports={filteredPublications}>
          
          {filteredPublications.map((report) => (<><AdvancedMarker key={report._id} position={{ lat: report.lat, lng: report.lng }}  onClick={() => { setOpen(open === report._id ? null : report._id); }}>
           <Pin background={report.severityColor} borderColor={report.severityColor}/>
          </AdvancedMarker>
            {open === report._id&&(<InfoWindow  position={{ lat: report.lat, lng: report.lng }} onCloseClick={()=>{setOpen(null)}}><InfoDelito  address={report.address} description={report.description} typeCrime={report.typeCrime}/></InfoWindow>)} </>))}
            
        </Maps>
      </Box>
      </MotionBox>
    </>
  )
}
