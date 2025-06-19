import { Box, Button, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const MotionBox = motion(Box)

export const NotFound = () => {

    const navigate = useNavigate()
  return (
    <>
        <Box bg='#fdf1e2'> 
            <MotionBox  display="flex" alignItems="center" justifyContent="center" flexDirection="row"   height='100vh' initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 1 }} >
                    <Box  >
                        <Text fontSize='10rem' ml='2rem' color='#12101C'>404</Text>
                        <Text fontSize='5xl' color='#12101C' mb='2rem'>Page Not Found</Text>
                        <Button  marginLeft='3rem' width='15rem' height='4rem' bg='#DE4B4B' color='white' fontSize='3xl' onClick={()=>{navigate('/')}} _hover={{bg:'#ee5757'}} borderRadius='1rem' _active={{bg:'#c54040'}}type='submit'>
                            Go back home
                        </Button>
                    </Box>
                    <Box boxSize='md' marginBottom='15rem'>
                        <Image src='https://res.cloudinary.com/ddkdbwjnw/image/upload/v1750301448/NotFoundImage_o2lxcx.png' alt='Not Found Image' />
                    </Box>
            </MotionBox>
        </Box>
    </>
  )
}
