import React from 'react'
import { Register } from '../../components/Register/Register'
import Icon from '../../assets/PIZPIcon.png'
import { Navbar } from '../../components/navbar'
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router'

export const RegisterPage = () => {
    const navigate = useNavigate()
    return (
        <>
         <Navbar>
                <Box display='flex' alignItems='center' justifyContent='flex-start' flexGrow={1} padding="0.5% 0% 0.5% 0%">
                    <Image boxSize='3rem' src={Icon} alt='Icon PIZP'/>
                </Box>
                <ButtonGroup size='md' spacing='4'>
                    <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={()=>{navigate('/login')}}>Iniciar Sesión</Button>
                </ButtonGroup>
            </Navbar>
            <Register/>
        </>
    )
}
