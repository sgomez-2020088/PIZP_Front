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
         
            <Register/>
        </>
    )
}
