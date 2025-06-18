import React, { useEffect, useState } from 'react';
import { useAddReport } from '../../shared/hooks/useAddReport';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { Maps } from '../Map/Maps';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const Report = () => {
  const DPI = localStorage.getItem('DPI');
  const [typeCrime, setTypeCrime] = useState('');
  const [description, setDescription] = useState('');
  const [user, setUser] = useState(DPI);
  const [marker, setMarkerPosition] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [address, setAddress] = useState('');

  const [formValidation, setFormValidation] = useState({
    typeCrime: undefined,
    description:undefined,
    marker: undefined

  })

  const { addReport } = useAddReport();


  const disabled = formValidation.typeCrime === '' && formValidation.description === '' && formValidation.marker === ''

  
  const handleClickChangeMarker = (e) => {
    const value = e.detail.latLng
    setMarkerPosition(e.detail.latLng);
    setLat(e.detail.latLng.lat);
    setLng(e.detail.latLng.lng);
    setFormValidation({...formValidation, marker: value.length === 0?'Ingrese la dirección':''})
  };

  useEffect(() => {
    if (!marker) return;
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: marker }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setAddress('No se pudo obtener la dirección');
      }
    });
  }, [marker]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addReport(typeCrime, address, lat, lng, description, user);
  };



  const handleChanegTypeCrime = (e)=>{
      const value = e.target.value
      setFormValidation({...formValidation, typeCrime: value.length === 0?'Ingrese el tipo de delito':''})
      setTypeCrime(value)
  }


  const handleChanegDescription = (e)=>{
      const value = e.target.value
      setFormValidation({...formValidation, description: value.length === 0?'Ingrese las descripción':''})
      setDescription(value)
  }



  const handleChanegAddress = (e)=>{
      const value = e.target.value
      setAddress(value)
  }

  const formBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('red.400', 'red.600');
  const buttonBg = useColorModeValue('#DE4B4B', 'red.500');
  const buttonHover = useColorModeValue('#c23434', 'red.600');

  return (
    <MotionBox display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginTop="3rem" px={{ base: '1rem', md: '3rem' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} minH="80vh" bg={useColorModeValue('gray.50', 'gray.900')}>

      <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: '2rem', md: '4rem' }} maxW="1200px" w="100%" justify="center"  align="flex-start">

        <Box flex="1" bg={formBg} border={`2px solid ${borderColor}`} borderRadius="1rem" p={{ base: '1.5rem', md: '2.5rem' }}  maxW="600px" boxShadow="md" >
          <Text fontSize={{ base: '2xl', md: '3xl' }} color={borderColor} fontWeight="extrabold" textAlign="center" mb="2rem" letterSpacing="wide">
            Crear Reporte
          </Text>

          <form onSubmit={handleSubmit}>
            <VStack spacing="1.5rem" align="stretch">
              <FormControl isRequired>
                <FormLabel fontWeight="semibold" fontSize="md">
                  Tipo de delito
                </FormLabel>
                <Select placeholder="Seleccione un tipo" value={typeCrime} onChange={handleChanegTypeCrime} size="md" focusBorderColor={borderColor}>
                  <option value="Asalto">Asalto</option>
                  <option value="Secuestro">Secuestro</option>
                  <option value="Homicidio">Asesinato</option>
                  <option value="Trafico de drogas">Trafico de drogas</option>
                  <option value="Desaparición forzada">Desaparición forzada</option>
                  <option value="Extorsión">Extorsión</option>
                  <option value="Acoso">Acoso</option>
                  <option value="Violencia doméstica">Violencia doméstica</option>
                  <option value="Amenazas">Amenazas</option>
                  <option value="Violación">Violación</option>
                </Select>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold" fontSize="md">
                  Dirección
                </FormLabel>
                <Input value={address} disabled={true} onChange={handleChanegAddress} placeholder="Seleccione la dirección en el mapa o escriba aquí" size="md" focusBorderColor={borderColor}/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="semibold" fontSize="md">
                  Descripción
                </FormLabel>
                <Textarea value={description} onChange={handleChanegDescription} placeholder="Describe lo sucedido..." resize="vertical" minH="100px" focusBorderColor={borderColor}/>
              </FormControl>

              <Button type="submit" bg={buttonBg} disabled={!disabled} color="white" size="lg" borderRadius="1rem" fontWeight="bold" _hover={{ bg: buttonHover }} _active={{ bg: buttonHover }} transition="background-color 0.2s">
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>

        <Box flex="1" maxW="600px" height={{ base: '300px', md: '480px' }} borderRadius="1rem" boxShadow="xl" overflow="hidden">
          <Maps marker={marker} handleClickChangeMarker={handleClickChangeMarker} />
        </Box>
      </Flex>
    </MotionBox>
  );
};
