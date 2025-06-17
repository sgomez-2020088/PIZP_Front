import React, { useEffect, useState } from 'react'
import Fondo from '../../assets/FondoPIZP.png'
import { useLogin } from '../../shared/hooks/useLogin'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Icon, Image, Input, InputGroup, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react'
import { LockIcon, ViewIcon, ViewOffIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { FaBeer, FaIdCard } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

export const Login = () => {

    const [DPI, setDPI] = useState('')
    const [password, setPassword] = useState('')
    const [showPasswword, setShowPassword] = useState(false)
    

    const [formValidation, setFormValidation] = useState({
        DPI: undefined,
        password: undefined
    })


    const {login,loading} = useLogin()


    const isDisabled = formValidation.DPI === '' && formValidation.password ===''
    const handleSubmit = (e)=>{
        e.preventDefault()
        login(DPI, password)
    }

    const handleClickShowPassowrd = ()=>{
        setShowPassword(!showPasswword)
    }

    const handleChangeDPI = (e)=>{
        const value = e.target.value
        const regex = /^\d{1,13}$/
        setFormValidation({...formValidation, DPI: value.length === 0?'No puedes dejar este campo vacio':regex.test(value)?'':'Ingrese un DPI valido'})
        console.log(formValidation.DPI)
        setDPI(value)
    }

    const handleChangePassword = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, password: value.length === 0?'No puedes dejar este campo vacio':''})
        setPassword(value)
    }

    return (
        <>
            <MotionBox display="flex" alignItems="center" justifyContent="center" flexDirection="column" marginTop="1rem" initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  >
                <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='row' width='100vw' height='90vh' >
                    <Box >
                        <Image src={Fondo} alt='Fondo PIZP' size boxSize='30rem' borderLeftRadius='2.5rem'/>
                    </Box>
                    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' border="2px solid #ff5757"  width='30rem' height='30rem' borderEndRadius='2.5rem'>
                        <form onSubmit={handleSubmit}>
                            <Box  marginBottom='0.5rem' marginLeft='6rem' >  
                                <Text fontSize='4xl'  color='#DE4B4B' as='b'>Iniciar Sesión</Text>
                            </Box>
                            
                            <FormControl marginTop='2rem' marginLeft='1rem' >
                                <InputGroup>
                                    <InputLeftElement >
                                        <FaIdCard color='#DE4B4B'/>
                                        
                                    </InputLeftElement>
                                    <Input  placeholder='DPI'width='25rem'size='md' type='text' bg='white' value={DPI} onChange={handleChangeDPI} 
                                    _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                    _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                                </InputGroup>
                                <span style={{color:'#DE4B4B',marginLeft:'0.3rem'}} > {formValidation.DPI && <WarningTwoIcon style={{ marginRight: '6px' }} />}{formValidation.DPI}</span>
                            </FormControl>

                            <FormControl marginBottom='4rem' marginTop='2rem' marginLeft='1rem'>
                                <InputGroup>
                                    <InputLeftElement >
                                        <LockIcon color='#DE4B4B' />
                                    </InputLeftElement>
                                    <Input   placeholder='Password'width='25rem'size='md'  type={showPasswword ? 'text' : 'password'} bg='white' value={password} onChange={handleChangePassword} 
                                    _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                    _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                                    <InputRightElement marginRight='11rem'>
                                        <Button color='#DE4B4B' h='1.75rem' marginLeft='18.5rem' size='lg' onClick={handleClickShowPassowrd}>{showPasswword?<ViewIcon/>:<ViewOffIcon/>}</Button>
                                    </InputRightElement>
                                </InputGroup>
                                <span style={{color:'#DE4B4B', marginLeft:'0.3rem'}} > {formValidation.password && <WarningTwoIcon style={{ marginRight: '8px' }} />}{formValidation.password}</span>
                            </FormControl>

                            <Button  disabled={!isDisabled}  marginLeft='1rem' width='25rem' height='4rem' bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} borderRadius='1rem' _active={{bg:'#c54040'}}type='submit'>Iniciar Sesión</Button>
                        </form>
                        <Text marginTop='1.5rem' color='#c54040'>No tienes cuenta?<Link to='/register'> Registrate aquí</Link></Text>
                    </Box>
                </Box>
            </MotionBox>
        </>
    )
}
