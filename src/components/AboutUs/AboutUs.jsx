import { Box, Flex, Heading, Image, Text, VStack, HStack, SimpleGrid, Container, Icon, Circle } from "@chakra-ui/react"
import { FaShieldAlt, FaMapMarkedAlt, FaUsers, FaUserCircle } from "react-icons/fa"
import Logo from "../../assets/PIZPLogo.png"

export const AboutUs = () => {
  return (
    <Box bg="#12101C" color="white" minH="100vh">
      <Container maxW="7xl" px={8} py={6}>
        <Flex mt={10} direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <VStack align="start" spacing={4} flex={1}>
            <Flex justify="center" mt={10}>
              <Flex direction={{ base: "column", md: "row" }} align="center" gap={10}>
                <Box textAlign={{ base: "center", md: "left" }} marginLeft="5rem">
                  <Heading fontSize="9xl" fontWeight="bold">
                    {" "}
                    PIZP{" "}
                  </Heading>
                  <Text fontSize="4xl" mt={2}>
                    {" "}
                    Plataforma Informativa de Zonas Peligrosas{" "}
                  </Text>
                </Box>
              </Flex>
            </Flex>

            <Box mt={10} marginLeft="5rem">
              <Heading fontSize="4xl" mb={2}>
                Te damos la bienvenida
              </Heading>
              <Box mt={5}>
                <Text maxW="500px" fontSize="lg">
                  Siéntete seguro de navegar y denunciar con PIZP.{" "}{" "}
                </Text>
              </Box>
            </Box>
          </VStack>

          <Box p={6} rounded="full" marginRight={12}>
            <Image src={'https://res.cloudinary.com/ddkdbwjnw/image/upload/v1750300373/PIZPLogo_i7rvho.png' || "/placeholder.svg"} boxSize="30rem" />
          </Box>
        </Flex>
      </Container>

      <Box bg="rgba(255, 255, 255, 0.05)" py={16}>
        <Container maxW="6xl">
          <VStack spacing={12} textAlign="center">
            <Box>
              <Heading fontSize="5xl" mb={6}>
                Nuestro Objetivo
              </Heading>
              <Text fontSize="xl" maxW="4xl" lineHeight="tall" color="gray.300">
                Crear un espacio seguro y confiable donde las personas puedan denunciar delitos sin temor, acceder a
                información actualizada sobre zonas de riesgo, y contribuir a la construcción de comunidades más seguras
                a través de la transparencia y la colaboración ciudadana.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <Box
                bg="rgba(255, 255, 255, 0.1)"
                p={8}
                borderRadius="xl"
                textAlign="center"
                _hover={{ transform: "translateY(-5px)", transition: "all 0.3s" }}
              >
                <Circle size="80px" bg="red.600" mx="auto" mb={4}>
                  <Icon as={FaShieldAlt} boxSize={8} />
                </Circle>
                <Heading fontSize="2xl" mb={4}>
                  Denuncia Segura
                </Heading>
                <Text color="gray.300">Reporta incidentes de forma anónima y segura, sin miedo a represalias</Text>
              </Box>

              <Box
                bg="rgba(255, 255, 255, 0.1)"
                p={8}
                borderRadius="xl"
                textAlign="center"
                _hover={{ transform: "translateY(-5px)", transition: "all 0.3s" }}
              >
                <Circle size="80px" bg="red.600" mx="auto" mb={4}>
                  <Icon as={FaMapMarkedAlt} boxSize={8} />
                </Circle>
                <Heading fontSize="2xl" mb={4}>
                  Zonas de Riesgo
                </Heading>
                <Text color="gray.300">
                  Visualiza áreas con alta incidencia delictiva para tomar mejores decisiones
                </Text>
              </Box>

              <Box
                bg="rgba(255, 255, 255, 0.1)"
                p={8}
                borderRadius="xl"
                textAlign="center"
                _hover={{ transform: "translateY(-5px)", transition: "all 0.3s" }}
              >
                <Circle size="80px" bg="red.600" mx="auto" mb={4}>
                  <Icon as={FaUsers} boxSize={8} />
                </Circle>
                <Heading fontSize="2xl" mb={4}>
                  Comunidad Unida
                </Heading>
                <Text color="gray.300">
                  Construye una red de apoyo ciudadano para prevenir y combatir la delincuencia
                </Text>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box py={16}>
        <Container maxW="6xl">
          <VStack spacing={12} textAlign="center">
            <Box>
              <Heading fontSize="5xl" mb={4}>
                ¿Cómo crear una denuncia?
              </Heading>
              <Text fontSize="xl" color="gray.300" mb={12}>
                Proceso simple y rápido en solo 4 pasos
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={8} w="full">
              <VStack spacing={4}>
                <Circle size="80px" bg="red.600" fontSize="2xl" fontWeight="bold">
                  1
                </Circle>
                <Heading fontSize="xl">Crea una cuenta</Heading>
                <Text color="gray.300" textAlign="center">
                  Regístrate de forma rápida y segura en nuestra plataforma
                </Text>
              </VStack>

              <VStack spacing={4}>
                <Circle size="80px" bg="red.600" fontSize="2xl" fontWeight="bold">
                  2
                </Circle>
                <Heading fontSize="xl">Ve a Reportes</Heading>
                <Text color="gray.300" textAlign="center">
                  Dirígete a la pestaña de reportes desde el menú principal
                </Text>
              </VStack>

              <VStack spacing={4}>
                <Circle size="80px" bg="red.600" fontSize="2xl" fontWeight="bold">
                  3
                </Circle>
                <Heading fontSize="xl">Describe el incidente</Heading>
                <Text color="gray.300" textAlign="center">
                  Proporciona una descripción detallada de lo sucedido
                </Text>
              </VStack>

              <VStack spacing={4}>
                <Circle size="80px" bg="red.600" fontSize="2xl" fontWeight="bold">
                  4
                </Circle>
                <Heading fontSize="xl">Marca y reporta</Heading>
                <Text color="gray.300" textAlign="center">
                  Señala la ubicación en el mapa y genera tu reporte
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      <Box bg="black" py={8}>
        <Container maxW="6xl">
          <VStack spacing={4} textAlign="center">
            <HStack spacing={3}>
              <Circle size="40px" bg="red.600">
                <Icon as={FaShieldAlt} boxSize={4} />
              </Circle>
              <Heading fontSize="xl">PIZP</Heading>
            </HStack>
            <Text color="gray.400">
              © 2025 PIZP - Plataforma Informativa de Zonas Peligrosas. Todos los derechos reservados.
            </Text>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}
