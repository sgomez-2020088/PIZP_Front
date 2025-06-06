import { Box } from '@chakra-ui/react'
import React from 'react'

export const Navbar = ({children}) => {
    return (
        <Box display='flex' justifyContent="flex-end" padding="0.8% 5%" bg='#000000' w='100%' height='4rem'>{children}</Box>
    )
}
