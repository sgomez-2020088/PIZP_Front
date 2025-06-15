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
    <Box >
        <Box   >
            <form onSubmit={handleSubmit}>
                 <Box  marginBottom='0.5rem' marginLeft='12rem' >  
                    <Text fontSize='4xl'  color='#DE4B4B' as='b'>Crear Reporte</Text>
                </Box>

                <FormControl>
                    <FormLabel>Tipo de delito</FormLabel>
                    <Select placeholder='Tipo de delito' value={typeCrime} onChange={handleChangeTypeCrime}>
                        <option value='asalto'>Asalto</option>
                        <option value='secuestro'>Secuestro</option>
                        <option value='asesinato'>Asesinato</option>
                    </Select>
                </FormControl>

                <FormControl>
                    <FormLabel>Dirección</FormLabel>
                    <Input type='text' placeholder='Dirección' onChange={handleChangeAddress}/>
                </FormControl>

                <FormControl>
                    <FormLabel>Descripción del delito</FormLabel>
                    <Textarea placeholder='Escribe lo sucedido aquí' onChange={handleChangeDescription}/>
                </FormControl>
                <Button type='submit'> Enviar</Button>

                <Box display="flex" 
                alignItems="center" 
                justifyContent="center" 
                flexDirection="column" 
                width="70rem" 
                height="34rem"  
                style={{ margin: '5rem auto' }} >
                    <Maps marker={marker} handleClickChangeMarker={handleClickChangeMarker}/>
                </Box>
               
            </form>
        </Box>
    </Box>
    </>
  )
}
