import { Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
import Logo from '../../assets/PIZPLogo.png'
import React from 'react'

export const AboutUs = () => {
  return (
    <Box bg="#12101C" color="white" minH="100vh" px={8} py={6} >
      <Flex mt={10} direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        <VStack align="start" spacing={4}>

          <Flex justify="center" mt={10}>
            <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={10}>
              

              <Box textAlign={{ base: 'center', md: 'left' }} marginLeft="5rem">
                <Heading fontSize="9xl" fontWeight="bold"> PIZP </Heading>
                <Text fontSize="4xl" mt={2}> Plataforma Informativa de Zonas Peligrosas </Text>
              </Box>
            </Flex>
          </Flex>

          <Box mt={10} marginLeft="5rem">
          <Heading fontSize="4xl" mb={2}>Te damos la bienvenida</Heading>
            
            <Box mt={5}>
              <Text maxW="300px">
                Ve en nuestra página para que veas las zonas peligrosas a donde quieras ir.
              </Text>
            </Box>
          </Box>
        </VStack>

        <Box p={6} rounded="full" marginRight={12}>
          <Image src={Logo} boxSize='30rem' />
        </Box>
      </Flex>
    </Box>
  )
}
