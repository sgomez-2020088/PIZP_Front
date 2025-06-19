import React from 'react'
import { Navbar } from '../../components/navbar'
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { Report } from '../../components/Report/Report'
import { DoNotAccess } from '../../components/DoNotAccess/DoNotAccess'

export const ReportPage = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    const handleClickLogOut = ()=>{
        navigate('/')
        localStorage.removeItem('DPI')
        localStorage.removeItem('token')
      }
return (
    <> 
        {token?
        (
            <>
                <Navbar>
                    <Box display='flex' alignItems='center' justifyContent='flex-start' flexGrow={1} padding="0.5% 0% 0.5% 0%">
                        <Image boxSize='3rem' src='https://res.cloudinary.com/ddkdbwjnw/image/upload/v1750296800/PIZPIcon_wch4tj.png' alt='Icon PIZP'/>
                </Box>
                <ButtonGroup size='md' spacing='4'>
                        <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={()=>{navigate('/reports')}}>Reportes</Button>
                        <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={handleClickLogOut}>Cerrar Sesión</Button>
                        
                </ButtonGroup>
                </Navbar>
                <Report/>
            </>
        ):(<DoNotAccess/>)}
    </>
  )
}
