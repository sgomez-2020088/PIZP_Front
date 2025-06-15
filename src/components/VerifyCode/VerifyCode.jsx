import { Box, Button, Flex, FormLabel, HStack, PinInput, PinInputField, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useVerifyCode } from '../../shared/hooks/useVerifyCode'
import { WarningTwoIcon } from '@chakra-ui/icons'
import { useResendCode } from '../../shared/hooks/useResendCode'

export const VerifyCode = () => {

    const DPICODE = localStorage.getItem('DPIVerifycationCode')
    
    const [DPI, setDPI] = useState(DPICODE)
    const [verificationCode, setVerificationCode] = useState('')

    const [timer, setTimer] = useState(120)

    const [formValidation, setFormValidation] = useState({
        verificationCode:undefined
    })
    
    const disabled = formValidation.verificationCode === ''


    useEffect(()=>{
        if (timer <= 0) return
            setTimeout(() => {
                setTimer(timer-1)
            }, 1000)
        },[timer]
    )

     const clockTimer = (timePass) => {
        const minutes = Math.floor(timePass / 60);
        const seconds = timePass % 60;
        const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        return `${minutes}:${paddedSeconds}`;
    }


    console.log(timer)
    const {sendVerifyCode} = useVerifyCode()
    const {resendCode,loading} = useResendCode()

    const handleSubmti = (e)=>{
        if(timer >0){
            e.preventDefault()
            sendVerifyCode(DPI, verificationCode)
        }else{
            e.preventDefault()
            resendCode(DPI)
            setTimer(120)
        }
    }
    
    
    const handleChangeCode = (value)=>{
        setVerificationCode(value.toUpperCase())
        setFormValidation({...formValidation, verificationCode: value.length <6?'Ingrese el todo el codigo':''})
    }


  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" width="100vw"height="90vh"  >
        <Box   width="50rem" height="20rem" border="2px solid #DE4B4B" borderRadius="1rem" boxShadow="0px 10px 25px rgba(0, 0, 0, 0.15)" display="flex"
            alignItems="center" justifyContent="center"flexDirection="column"> 
        <FormLabel fontSize="1.2rem" textAlign="center" marginLeft='1rem'>Tiempo restante: {timer === 0?'Tu codigo ha expirado':clockTimer(timer)}</FormLabel>
        <form onSubmit={handleSubmti}>
            <FormLabel fontSize='1.2rem' marginLeft='7.5em' marginTop='2rem'>Codigo de Verificación</FormLabel>

            <HStack justify="center">
            <PinInput type="alphanumeric" value={verificationCode} onChange={handleChangeCode}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            </HStack>

            <Stack spacing={3} align="center">
                <span style={{color:'#DE4B4B', marginBottom:'0.5rem', marginTop:'0.5rem'}} > {formValidation.verificationCode && <WarningTwoIcon style={{ marginRight: '6px' }} />}{formValidation.verificationCode}</span>
                <Button disabled={timer === 0?false:!disabled}  isLoading={loading?true:false} width="30rem" height="4rem" bg="#DE4B4B" color="white" _hover={{ bg: '#ee5757' }} borderRadius="2.5rem"  _active={{ bg: '#c54040' }}  type="submit" >
                   {timer === 0?'Reenviar Codigo' :'Enviar'}
                </Button>
            </Stack>
        </form>
      </Box>
    </Box>
  );

}
