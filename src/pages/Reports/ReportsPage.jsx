import React from 'react'

import Icon from '../../assets/PIZPIcon.png'
import { Box, Button, ButtonGroup, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { removeItem } from 'framer-motion'
import { Reports } from '../../components/Reports/Reports'
import { DoNotAccess } from '../../components/DoNotAccess/DoNotAccess'

export const ReportsPage = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')


  const handleClickLogOut = ()=>{
    navigate('/')
    localStorage.removeItem('DPI')
    localStorage.removeItem('token')
  }
  return (
    <>
      {token ?
      (
        <>
          < nav style={{display:'flex',justifyContent:"flex-end",padding:"0.8% 5%", backgroundColor:'#12101C', w:'100%' ,height:'4rem' }}>
            <Box display='flex' alignItems='center' justifyContent='flex-start' flexGrow={1} padding="0.5% 0% 0.5% 0%">
              <Image boxSize='3rem' src='https://res.cloudinary.com/ddkdbwjnw/image/upload/v1750296800/PIZPIcon_wch4tj.png' alt='Icon PIZP'/>
            </Box>
            <ButtonGroup size='md' spacing='4'>
              <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={()=>{navigate('/')}}>Home</Button>
              <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={()=>{navigate('/report')}}>Reportar</Button>
              <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}} onClick={handleClickLogOut}>Cerrar Sesión</Button>
            </ButtonGroup>
          </nav>
          <Reports/>
        </>
      ) : (<DoNotAccess/>)}
    </>
  )
}
