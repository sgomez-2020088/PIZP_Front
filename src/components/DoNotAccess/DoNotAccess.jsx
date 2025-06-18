import { Box, VStack, Text, Button, Icon, Badge, Divider, Container, useColorModeValue, Circle } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { FiLock, FiArrowLeft, FiHome } from "react-icons/fi"
import { useNavigate } from "react-router-dom"

const MotionCircle = motion(Circle)
const MotionBox = motion(Box)

export const DoNotAccess = () =>{
  const bgCard = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(26, 32, 44, 0.9)")
  const textColor = useColorModeValue("gray.800", "white")
  const subtitleColor = useColorModeValue("gray.600", "gray.300")

  const navigate = useNavigate()

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.2, 0.3, 0.2],
  }

  const cardAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  }

  return (
    <Box minH="100vh" bgGradient="linear(135deg, brand.50 0%, orange.50 50%, yellow.50 100%)" display="flex" alignItems="center" justifyContent="center"  p={4} position="relative" >
      <MotionCircle size="80px" bg="brand.200" position="absolute" top="40px" left="40px" animate={pulseAnimation} transition={{ duration: 2, epeat: Number.POSITIVE_INFINITY, ease: "easeInOut", }} />
      
      <MotionCircle size="64px" bg="orange.200" position="absolute" bottom="40px" right="40px" animate={pulseAnimation} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1, }} />
      <MotionCircle size="48px" bg="yellow.200" position="absolute" top="50%" left="20px" animate={pulseAnimation} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5, }} />

      <Container maxW="md">
        <MotionBox bg={bgCard} backdropFilter="blur(10px)"  borderRadius="2xl" boxShadow="2xl"  p={8} textAlign="center" border="1px solid" borderColor="whiteAlpha.200" {...cardAnimation}>
          <VStack spacing={6}>
            
            <Box>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} >
                <Circle size="80px" bgGradient="linear(135deg, brand.500, orange.500)" boxShadow="lg">
                  <Icon as={FiLock} w={10} h={10} color="black" />
                </Circle>
              </motion.div>
            </Box>


            <VStack spacing={2}>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <Text fontSize="3xl" fontWeight="bold" color={textColor} letterSpacing="tight">
                  Acceso Denegado
                </Text>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Text color={subtitleColor} fontSize="md" lineHeight="tall" maxW="sm">
                  Lo sentimos, no tienes permisos para acceder a esta página. Contacta al administrador si crees que
                  esto es un error.
                </Text>
              </motion.div>
            </VStack>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} >
              <Badge colorScheme="red" variant="subtle" px={4} py={2} borderRadius="full" fontSize="sm" fontWeight="semibold">
                Error 403 - Forbidden
              </Badge>
            </motion.div>

            {/* Botones de acción */}
            <VStack spacing={3} w="full">
              <motion.div style={{ width: "100%" }} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} >
              <Button size="lg" w="full" bgGradient="linear(to-r, #DE4B4B, #F37C57)" color="white" _hover={{ bgGradient: "linear(to-r, #F37C57, #DE4B4B)", 
                transform: "translateY(-1px)", boxShadow: "lg" }}
                 _active={{ bgGradient: "linear(to-r, #D63F3F, #E7584B)", transform: "translateY(1px)", boxShadow: "none" }} 
                 leftIcon={<Icon as={FiHome} />} transition="all 0.2s" onClick={()=>{navigate('/')}}>
                Ir al Inicio
              </Button>


              </motion.div>

            </VStack>

            <motion.div style={{ width: "100%" }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <Box w="full">
                <Divider />
                <Text fontSize="xs" color="gray.500" mt={4}>
                  Si necesitas ayuda, incluye el código de error:
                  <Badge ml={2} fontFamily="mono" bg="gray.100" color="gray.700" fontSize="xs">
                    403-FORBIDDEN-{new Date().getTime().toString().slice(-6)}
                  </Badge>
                </Text>
              </Box>
            </motion.div>
          </VStack>
        </MotionBox>
      </Container>
    </Box>
  )
}