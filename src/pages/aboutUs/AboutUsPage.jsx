import React from 'react'
import { Navbar } from '../../components/navbar'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const AboutUsPage = () => {
    return (
        <>
        <Navbar>
            <ButtonGroup size='md' spacing='4'>
                <Button  bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}}>Iniciar Sesión</Button>
                <Button bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} _active={{bg:'#c54040'}}>Registrar</Button>
            </ButtonGroup>
        </Navbar>
        <div>AboutUsPage</div>
        </>
    )
}
