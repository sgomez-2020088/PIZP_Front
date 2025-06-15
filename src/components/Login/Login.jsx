import React, { useState } from 'react'
import { useLogin } from '../../shared/hooks/useLogin'
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, WarningTwoIcon } from '@chakra-ui/icons'

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
        <Box  display='flex' alignItems='center' justifyContent='center' flexDirection='column' width='100vw' height='90vh' >
            <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column' bg='black' width='55rem' height='30rem' borderRadius='2.5rem'>
                <form onSubmit={handleSubmit}>
                     <Box  marginBottom='0.5rem' marginLeft='12rem' >  
                        <Text fontSize='4xl'  color='#DE4B4B' as='b'>Iniciar Sesión</Text>
                    </Box>
                    
                    <FormControl marginTop='2rem' >
                        <FormLabel  fontSize='1.2rem' color='#DE4B4B' >DPI</FormLabel>
                        <Input size='md' type='text' bg='white' value={DPI} onChange={handleChangeDPI}/>
                        <span style={{color:'#DE4B4B'}} > {formValidation.DPI && <WarningTwoIcon style={{ marginRight: '6px' }} />}{formValidation.DPI}</span>
                    </FormControl>

                    <FormControl marginBottom='4rem' marginTop='2rem'>
                        <FormLabel  fontSize='1.2rem' color='#DE4B4B' >Password</FormLabel>
                        <InputGroup>
                             <Input size='md'  type={showPasswword ? 'text' : 'password'} bg='white' value={password} onChange={handleChangePassword}/>
                             <InputRightElement>
                                <Button color='#DE4B4B' h='1.75rem' marginRight='1rem' size='lg' onClick={handleClickShowPassowrd}>{showPasswword?<ViewIcon/>:<ViewOffIcon/>}</Button>
                             </InputRightElement>
                        </InputGroup>
                        <span style={{color:'#DE4B4B'}} > {formValidation.password && <WarningTwoIcon style={{ marginRight: '6px' }} />}{formValidation.password}</span>
                    </FormControl>

                    <Button  disabled={!isDisabled}  width='40rem' height='4rem' bg='#DE4B4B' color='white' _hover={{bg:'#ee5757'}} borderRadius='2.5rem' _active={{bg:'#c54040'}}type='submit'>Iniciar Sesión</Button>
                </form>
            </Box>
        </Box>
  )
}
