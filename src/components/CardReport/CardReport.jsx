import { Box, Button, Card, CardBody, Heading, Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Maps } from '../Map/Maps'
import { AdvancedMarker } from '@vis.gl/react-google-maps';

export const CardReport = ({ nombres, apellidos, tipoCrimen,email ,lat, lng, direccion,DPI,handleClick, descripcion,handleClick2}) => {
    
    const [expanded, setExpanded] = useState(false)
    const latitude = lat
    const longitude = lng


    const handleClickExpanded = ()=>{
        setExpanded(!expanded)
    }
    
  return (
    <Card border="1px solid #DE4B4B" borderRadius="2xl" bg="white" width="100%" maxW="50rem" boxShadow="0px 5px 20px rgba(0,0,0,0.15)" p="2rem">
      <CardBody>
        <Stack spacing={4}>
          <Heading size="lg" color="#DE4B4B" textAlign="center">
            Reporte Detallado
          </Heading>


          {expanded && (
            <>
                <Text color="#12101C"><strong>Nombre:</strong> {nombres}</Text>
                <Text color="#12101C"><strong>Apellidos:</strong> {apellidos}</Text>
                <Text color="#12101C"><strong>Email:</strong> {email}</Text>
                <Text color="#12101C"><strong>DPI:</strong> {DPI}</Text>
                <Text color="#12101C"><strong>Tipo de crimen:</strong> {tipoCrimen}</Text>
                <Text color="#12101C"><strong>Descripción:</strong> {descripcion}</Text>
                <Text color="#12101C"><strong>Dirección:</strong> {direccion}</Text>
                <Button mt={4} bg="#DE4B4B" color="white" borderRadius="1rem" _hover={{ bg: '#c54040' }} _active={{ bg: '#a92f2f' }} width="100%" onClick={handleClick} >
                    Ver dirección
                </Button>
                <Button mt={6} bg="#DE4B4B" color="white" borderRadius="1rem" _hover={{ bg: '#c54040' }}  _active={{ bg: '#a92f2f' }} width="100%" onClick={handleClick2}>
                   eliminar
                </Button>
            </>
          )}

          <Button mt={6} bg="#DE4B4B" color="white" borderRadius="1rem" _hover={{ bg: '#c54040' }}  _active={{ bg: '#a92f2f' }} width="100%" onClick={handleClickExpanded}>
            {expanded ? 'Ocultar detalles' : 'Ver más detalles'}
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );

};
