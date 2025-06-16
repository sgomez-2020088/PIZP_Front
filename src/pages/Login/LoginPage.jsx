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
            
                <Login/>
        </>
    )
}
