import React from 'react'
import { Navbar } from '../../components/navbar'
import Icon from '../../assets/PIZPIcon.png'
import { useNavigate } from 'react-router-dom'
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { Login } from '../../components/Login/Login'

export const LoginPage = () => {
    const navigate = useNavigate()
  return (
          <>
           <Navbar>
                  <Box display='flex' alignItems='center' justifyContent='flex-start' flexGrow={1} padding="0.5% 0% 0.5% 0%">
                      <Image boxSize='3rem' src={Icon} alt='Icon PIZP'/>
                  </Box>
                  <ButtonGroup size='md' spacing='4'>
                      <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={()=>{navigate('/register')}}>Registrate</Button>
                  </ButtonGroup>
              </Navbar>
              <Login/>
          </>
      )
}
