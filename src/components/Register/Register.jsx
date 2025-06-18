import React, { useState } from 'react'
import { useRegister } from '../../shared/hooks/useRegister';
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftAddon, InputLeftElement, InputRightElement, Text } from '@chakra-ui/react';
import { ArrowForwardIcon, EmailIcon, InfoIcon, LockIcon, UnlockIcon, WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { color, motion } from 'framer-motion';
import { FaIdCard, FaPersonBooth } from 'react-icons/fa';


const MotionBox = motion(Box)

export const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [DPI, setDPI] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [show, setShow] = useState(false)

    const [validationErrors, setValidationErrors] = useState({
        name: undefined,
        surname: undefined,
        phone: undefined,
        DPI: undefined,
        email: undefined,
        password: undefined,
        confirmPassword: undefined
    });

    const {register,loading} = useRegister()
    
    const handleClick = ()=>{
        setShow(!show)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        register(name,surname,phone,DPI,email,password)
    }

    const handleChangeName = (e)=>{
        let value = e.target.value
        setValidationErrors({...validationErrors, name: value.length === 0?'No puedes dejar campos vacios':''})
        setName(value)
    }

    const handleChangeSurname = (e)=>{
        let value = e.target.value
        setValidationErrors({...validationErrors, surname: value.length === 0?'No puedes dejar campos vacios':''})
        setSurname(value)
    }

    const handleChangePhone = (e)=>{
        let value = e.target.value
        const regex = /^\d+$/
        setValidationErrors({...validationErrors, phone: value.length ===  0?'No puedes dejar campos vacios' : value.length > 8
            ? 'No puede tener más de 8 dígitos':regex.test(value)?'':'No puedes ingresar letras o caracteres especiales'})
        setPhone(value)
        
    }

    const handleChangeDPI = (e)=>{
        let value = e.target.value
        const regex = /^\d{1,13}$/
        setValidationErrors({...validationErrors, DPI: regex.test(value)?'':'Ingrese un DPI valido'})
        setDPI(value)
    }

   
    
    const handleChangeEmail = (e)=>{
        let value = e.target.value
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        setValidationErrors({...validationErrors, email: regex.test(value)?'':'Ingrese un correo valido'})
        setEmail(value)
    }

    const handleChangePassword = (e)=>{
        let value = e.target.value
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/
        setValidationErrors({...validationErrors, password: regex.test(value)?'':'Ingrese una contraseña segura (Una mayuscula,minuscula, un numero, un caracter especial y 8 digitos como minimo)'})
        setPassword(value)
    }

    const handleChangeConfirmPassword = (e)=>{
        let value = e.target.value
        setValidationErrors({...validationErrors, confirmPassword: value === password?'':'La contraseña no coincide'})
        setConfirmPassword(value)
    }
    
    const disabled = validationErrors.name === '' && validationErrors.surname === '' &&  validationErrors.phone === '' && 
                    validationErrors.DPI === '' && validationErrors.email === '' && validationErrors.password === '' && 
                    validationErrors.confirmPassword === '' 
 
    return (
    <>
    <Box  bg="linear-gradient(to right, rgba(222, 75, 75, 1), rgba(233, 94, 95, 0.7), rgba(255, 182, 193, 0.5))"backdropFilter="blur(10px)">
        <MotionBox  display="flex" alignItems="center" justifyContent="center" flexDirection="column"   height='100vh' initial={{ opacity: 0, y: 50 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.6 }}  >
            <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='column'  marginTop='1rem'> 
                    <Box  bg='white' display='flex' alignItems='center' justifyContent='center' flexDirection='column' border="2px solid #ff5757" width='46rem' borderRadius='2.5rem ' > 
                        <form onSubmit={handleSubmit}>
                                            
                        <FormControl  display="flex" flexDirection="column" alignItems="center" justifyContent="center"width="100%"textAlign="left" maxWidth="500px">
            
                            <Box  marginTop='5%' marginBottom='4%'>  
                                <Text fontSize='3xl'  color='#DE4B4B' as='b'> REGISTRATE EN PIZP</Text>
                            </Box>
                            <Text marginBottom='1.5rem' color='#c54040'>Ya tienes cuenta?<Link to='/login'> Inicia sesión aquí<ArrowForwardIcon mb='0.1rem' ml='0.1rem'/></Link></Text>

                            <Box display='flex' flexDirection='row'  gap='0.5rem' alignItems='flex-start'>
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <InputGroup>
                                        <InputLeftElement><InfoIcon color='#DE4B4B'/></InputLeftElement>
                                        <Input placeHolder='Nombre' size='md' value={name} width='20rem' onChange={handleChangeName} mb='3' mr='5'
                                        _focus={{outline: 'none',borderColor: '#DE4B4B',boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}
                                        _hover={{outline: 'none',borderColor: '#DE4B4B',boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                                    </InputGroup>
                                    <span style={{ color: '#DE4B4B', marginTop: '0.5rem', marginLeft:'1rem', marginBottom:'0.5rem' }}>{validationErrors.name && <WarningTwoIcon style={{ marginRight: '6px', marginBottom:'0.1rem' }} />}{validationErrors.name}</span>
                                </Box>

                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <InputGroup>
                                        <InputLeftElement><InfoIcon color='#DE4B4B'/></InputLeftElement>
                                        <Input placeHolder='Apellidos' size='md' value={surname} width='20rem' onChange={handleChangeSurname} mb='3'
                                        _focus={{outline: 'none',borderColor: '#DE4B4B',boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)',}}
                                        _hover={{outline: 'none',borderColor: '#DE4B4B',boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}
                                        />
                                    </InputGroup>
                                    <span style={{ color: '#DE4B4B', marginTop: '0.5rem',marginBottom:'0.5rem'}}>{validationErrors.surname && <WarningTwoIcon style={{ marginRight: '6px', marginBottom:'0.1rem'}} />}{validationErrors.surname}</span>
                                </Box>
                            </Box>

                            
                            <Box display='flex' flexDirection='row' marginTop='1rem' gap='0.5rem' alignItems='flex-start'>
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <InputGroup  width='20rem' mr='5'>
                                        <InputLeftAddon>+502</InputLeftAddon>
                                        <Input  placeHolder='Numero de telefono' size='md' value={phone}  onChange={handleChangePhone}mb='3'  
                                        _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                        _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                                    </InputGroup>
                                    <span style={{color:'#DE4B4B', marginBottom:'1rem', marginLeft:'1rem'}} > {validationErrors.phone && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.phone}</span>
                                </Box>
                                
                                <Box display="flex" flexDirection="column" alignItems="flex-start">
                                    <InputGroup>
                                    <InputLeftElement><FaIdCard color='#DE4B4B'/></InputLeftElement>
                                        <Input placeHolder='DPI' size='md' value={DPI} width='20rem' onChange={handleChangeDPI}mb='3' 
                                            _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                            _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                                        <span style={{color:'#DE4B4B', marginBottom:'1rem'}} > {validationErrors.DPI && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.DPI}</span>
                                    </InputGroup>
                                </Box>
                            </Box>

                            <InputGroup width='41.3rem'>
                            <InputLeftElement> <EmailIcon color='#DE4B4B'/></InputLeftElement>
                                <Input  placeHolder='Email' size='md' value={email}  onChange={handleChangeEmail}mb='3'
                                    _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                    _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                            </InputGroup>
                            <span style={{color:'#DE4B4B', marginBottom:'1rem'}} > {validationErrors.email && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.email}</span>

                            
                            <InputGroup width='41.3rem'>
                                <InputLeftElement>{show?(<UnlockIcon color='#DE4B4B'/>):(<LockIcon color='#DE4B4B'/>)}</InputLeftElement>
                                <Input placeHolder='Contraseña' type={show?'text':'password'} size='md'  width='130%'  value={password} onChange={handleChangePassword}mb='3' 
                                _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                            </InputGroup>
                            <span style={{color:'#DE4B4B', marginBottom:'1rem'}} > {validationErrors.password && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.password}</span>

                            
                            <InputGroup width='41.3rem'>
                            <InputLeftElement>{show?(<UnlockIcon color='#DE4B4B'/>):(<LockIcon color='#DE4B4B'/>)}</InputLeftElement>
                                <Input  placeHolder='Confirmar Contraseña' type={show?'text':'password'} size='md'  value={confirmPassword} onChange={handleChangeConfirmPassword} mb='3'
                                _focus={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}} 
                                _hover={{outline:'none', borderColor:  '#DE4B4B', boxShadow: '0 0 8px 2px rgba(222, 75, 75, 0.3)'}}/>
                            </InputGroup>
                            <span style={{color:'#DE4B4B', marginBottom:'1rem'}} > {validationErrors.confirmPassword && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.confirmPassword}</span>
                            <br/>
                            <Checkbox  colorScheme='red' color='#DE4B4B' onChange={handleClick} mb='3' paddingBottom='1rem'>Ver contraseña</Checkbox>
                            <Button disabled={!disabled} isLoading={loading?true:false}width='40rem' bg='#DE4B4B'  marginBottom='2rem' color='white' _hover={{bg:'#ee5757'}} borderRadius='0.5rem' _active={{bg:'#c54040'}}type='submit'>Crear cuenta</Button>
                        </FormControl>
                        </form>
                    </Box>
                </Box>
        </MotionBox>
      </Box>
    </>
  );
};
