import React, { useEffect, useState, useRef } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Heading, VStack, Text } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetReports } from '../../shared/hooks/useGetReports';
import { CardReport } from '../CardReport/CardReport';
import { Maps } from '../Map/Maps';
import { AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { useDeleteReport } from '../../shared/hooks/useDeleteReport';

export const ReportDetails = () => {

    const {id} = useParams()
    console.log(id)

  const navigate = useNavigate();
  const [marker, setMarker] = useState(null);
  const [defaultCenter, setDefaulCenter] = useState({ lat: 14.60178208398095, lng: -90.54235243138898 });
  const [deleted,setDeleted] = useState('')
  
  const { reports, isFetching, getReports } = useGetReports();
  const {deleteReport} = useDeleteReport()


  const { isOpen, onOpen, onClose } = useDisclosure();

    
  const isDisabled = deleted === 'ELIMINAR'
  useEffect(() => {
    getReports();
  }, []);

  if (isFetching) {
    return <div>Cargando...</div>;
  }

  console.log('reports',reports)
  const handleChangeDeleted = (e)=>{
    const value = e.target.value
    setDeleted(value)
  }

  const handleChangeSubmit = ()=>{
    if(deleted === 'ELIMINAR'){
        deleteReport(id)
        onClose()
        setDeleted('')
        navigate('/detailsReports')
        window.location.reload()
    }
  }

  const handleCloseModal = () => {
        onClose();       
        setDeleted('');  
    };
  return (
    <>
      <Box display="flex" width="100vw" height="99.5vh" position="absolute">
       
        <Box width="50%" height="100%" position="relative">
          <Maps position={defaultCenter}>
            <AdvancedMarker position={marker} >
            
            </AdvancedMarker>
          </Maps>
        </Box>

       
        { reports.length === 0 ?( 
            <Box display="flex" alignItems="center" justifyContent="center" minHeight="30vh" width="70rem" >
                <VStack spacing={3} textAlign="center">
                    <Text fontSize="4xl" opacity="0.5">
                    📋
                    </Text>
                    <Heading size="md" color="#DE4B4B">
                        No hay reportes
                    </Heading>
                    <Text color="gray.500" fontSize="sm">
                        Aún no hay reportes disponibles
                    </Text>
                </VStack>
            </Box>):
            ( <Box width="50%" height="100%" overflow="auto" padding="1rem">
            <Box display="flex" flexDirection="column" gap="1rem">
            {reports.map((report) => (
              <CardReport key={report._id} nombres={report.user.name} apellidos={report.user.surname} DPI={report.user.DPI} email={report.user.email} 
              tipoCrimen={report.typeCrime} lat={report.lat} lng={report.lng} direccion={report.address} descripcion={report.description}
                handleClick2={() => {
                  navigate(`/detailsReports/${report._id}`);
                  onOpen(); 
                }}
                handleClick={() => {
                  setMarker({ lat: report.lat, lng: report.lng });
                  setDefaulCenter({ lat: report.lat, lng: report.lng });
                }}
              />
            ))}
          </Box>
        </Box>)}
      </Box>

      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Eliminar Reporte</ModalHeader>

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Escribe <strong>ELIMINAR</strong> para eliminar el reporte</FormLabel>
              <Input  value={deleted} onChange={handleChangeDeleted} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleChangeSubmit} isDisabled={!isDisabled} >
              Eliminar
            </Button>
            <Button onClick={handleCloseModal}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
