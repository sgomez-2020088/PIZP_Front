    import React, { useState } from 'react'
    import { useAddReport } from '../../shared/hooks/useAddReport'
    import { Box, Button, FormControl, FormLabel, Input, Select, Text, Textarea } from '@chakra-ui/react'
    import { Maps } from '../Map/Maps'

    export const Report = () => {

        const DPI = localStorage.getItem('DPI')
        const [typeCrime, setTypeCrime] = useState('')
        const [address, setAddress] = useState('')
        const [description, setDescription] = useState('')
        const [user, setUser] = useState(DPI)
        const [marker, setMarkerPosition]=  useState(null)
        const [lat, setLat] = useState(null)
        const [lng, setLng] = useState(null)

        const [formValidation, setFormValidation] = useState({
            typeCrime: undefined,
            address:undefined,
            description: undefined
        })

        const {addReport} = useAddReport()


        const handleClickChangeMarker = (e)=>{
            setMarkerPosition(e.detail.latLng)

            setLat(e.detail.latLng.lat)
            setLng(e.detail.latLng.lng)
            
        }

        

        const handleSubmit = (e)=>{
            e.preventDefault()
            addReport(typeCrime, address,lat,lng,description,user)
        }

        const handleChangeTypeCrime = (e)=>{
            const value = e.target.value
            setTypeCrime(value)
        }

        const handleChangeAddress = (e)=>{
            const value = e.target.value
            setAddress(value)
        }

        const handleChangeDescription = (e)=>{
            const value = e.target.value
            setDescription(value)
        }


    return (
        <>
        <Box display='flex'>
            <Box marginLeft='100px' marginTop='60px' border="2px solid #DE4B4B" borderRadius="1rem" >
                <form onSubmit={handleSubmit}>
                    <Box  marginBottom='0.5rem' marginLeft='13rem' >  
                        <Text fontSize='4xl'  color='#DE4B4B' as='b'  >Crear Reporte</Text>
                    </Box>

                    <FormControl marginLeft='1rem' marginRight='1rem'>
                        <FormLabel fontSize='1.2rem'>Tipo de delito</FormLabel>
                        <Select width='40rem' height= '4rem' placeholder='Tipo de delito'  marginTop='20px' value={typeCrime} onChange={handleChangeTypeCrime}>
                            <option value='asalto'>Asalto</option>
                            <option value='secuestro'>Secuestro</option>
                            <option value='asesinato'>Asesinato</option>
                        </Select>
                    </FormControl>

                    <FormControl marginTop='20px' marginLeft='1rem' marginRight='1rem'>
                        <FormLabel fontSize='1.2rem'>Dirección</FormLabel>
                        <Input width='40rem' height= '4rem'  type='text' placeholder='Dirección' onChange={handleChangeAddress}/>
                    </FormControl>

                    <FormControl marginTop='20px' marginLeft='1rem' marginRight='1rem'>
                        <FormLabel fontSize='1.2rem'>Descripción del delito</FormLabel>
                        <Textarea width='40rem' height= '4rem' placeholder='Escribe lo sucedido aquí' onChange={handleChangeDescription}/>
                    </FormControl>
                    <Button fontSize='1.2rem'marginLeft='1rem' marginRight='1rem' marginTop='50px' width='40rem' height= '4rem' bg='#DE4B4B' color='white' _hover={{bg: '#c23434'}} borderRadius='2.5rem' _active={{bg: '#c54040'}} type='submit'> Enviar</Button>

                    
                </form>
            </Box>
            <Box display="flex" 
                alignItems="center" 
                justifyContent="center" 
                flexDirection="column" 
                width="45rem" 
                height="30rem" 
                boxShadow="0px 10px 25px rgba(0, 0, 0, 0.50)"
                marginTop='10px'
                style={{ margin: '5rem auto' }} >
                    <Maps marker={marker} handleClickChangeMarker={handleClickChangeMarker}/>
            </Box>
        </Box>
        </>
    )
    }
