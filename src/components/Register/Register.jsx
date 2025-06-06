import React, { useState } from 'react'
import { useRegister } from '../../shared/hooks/useRegister';
import { Button, Input } from '@chakra-ui/react';

export const Register = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [DPI, setDPI] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [validationErrors, setValidationErrors] = useState({
        name: '',
        surname: '',
        phone: '',
        DPI: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {register,loading} = useRegister()

    const handleSubmit = (e) =>{
        e.preventDefault()
        register(name,surname,phone,DPI,email,password)
    }



    return (
        <>
            <form onSubmit={handleSubmit}>

                <label>Nombre</label>
                <Input size='md'/>
                <Button isLoading={loading?true:false}>Enviar</Button>
            </form>
        </>
    )
}
