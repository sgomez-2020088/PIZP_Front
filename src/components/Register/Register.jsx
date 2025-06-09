import React, { useState } from 'react'
import { useRegister } from '../../shared/hooks/useRegister';
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Icon, Input, InputGroup, InputLeftAddon, InputRightElement, Text } from '@chakra-ui/react';
import { WarningIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

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
        setValidationErrors({...validationErrors, password: regex.test(value)?'':'Ingrese una contraseña segura (Un mayuscula,minuscula, un numero y un caracter especial como minimo)'})
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
            <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='column'  > 
                <form onSubmit={handleSubmit}>
                <FormControl  display="flex" flexDirection="column" alignItems="center" justifyContent="center"width="100%"textAlign="left" maxWidth="500px">
    
                    <Box  marginTop='5%' marginBottom='5%'>  
                        <Text fontSize='3xl'  color='#DE4B4B' as='b'> REGISTRATE EN PIZP</Text>
                    </Box>
                    <FormLabel fontSize='1.2rem' size='lg'color='#DE4B4B'width='39rem' textAlign="left">Nombres</FormLabel>
                    <Input id='1'size='md' value={name}   width='40rem' onChange={handleChangeName} mb='3'/>
                    <span style={{color:'#DE4B4B'}} > {validationErrors.name && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.name}</span>
                    
                    <FormLabel  fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">Apellidos</FormLabel>  
                    <Input size='md' value={surname} width='40rem'onChange={handleChangeSurname}mb='3'/>
                    <span style={{color:'#DE4B4B'}} > {validationErrors.surname && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.surname}</span>
                  
                    <FormLabel  fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">Numero de telefono</FormLabel>
                    <InputGroup  width='40rem'>
                        <InputLeftAddon>+502</InputLeftAddon>
                        <Input size='md' value={phone}  onChange={handleChangePhone}mb='3'/>
                    </InputGroup>
                    <span style={{color:'#DE4B4B'}} > {validationErrors.phone && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.phone}</span>

                    <FormLabel fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">DPI</FormLabel>
                    <Input size='md' value={DPI} width='40rem' onChange={handleChangeDPI}mb='3' />
                    <span style={{color:'#DE4B4B'}} > {validationErrors.DPI && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.DPI}</span>
                   
                    <FormLabel fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">Email</FormLabel>
                    <Input size='md' value={email}  width='40rem' onChange={handleChangeEmail}mb='3'/>
                     <span style={{color:'#DE4B4B'}} > {validationErrors.email && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.email}</span>

                    <FormLabel  fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">Contraseña</FormLabel>
                    <InputGroup width='40rem'>
                        <Input type={show?'text':'password'} size='md'  width='130%'  value={password} onChange={handleChangePassword}mb='3'/>
                    </InputGroup>
                    <span style={{color:'#DE4B4B'}} > {validationErrors.password && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.password}</span>

                    <FormLabel  fontSize='1.2rem'  color='#DE4B4B' width='39rem' textAlign="left">Confirmar Contraseña</FormLabel>
                    <InputGroup width='40rem'>
                        <Input  type={show?'text':'password'} size='md'  value={confirmPassword} onChange={handleChangeConfirmPassword} mb='3'/>
                    </InputGroup>
                    <span style={{color:'#DE4B4B'}} > {validationErrors.confirmPassword && <WarningTwoIcon style={{ marginRight: '6px' }} />}{validationErrors.confirmPassword}</span>
                    <br/>
                    <Checkbox  colorScheme='red' color='#DE4B4B' onChange={handleClick} mb='3'>Ver contraseña</Checkbox>
                    <Button disabled={!disabled}width='40rem' bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} borderRadius='2.5rem' _active={{bg:'#c54040'}}type='submit'>Enviar</Button>
                </FormControl>
                </form>
            </Box>
        </>
    )
}
