import React, { useState } from 'react'
import { registerRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    let navigate =useNavigate()
    const register = async(name,surname,phone,DPI,email,password )=>{
        setLoading(true)
        const user={
            name,
            surname,
            phone,
            DPI,
            email,
            password
        }
        const response = await registerRequest(user)
        setLoading(false)
        if (response.error) {
            setError(true)
            
            if(response?.err?.response?.data?.errors){


                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response?.data?.message ||
                response?.err?.data?.message ||
                'Error general al intentar registrase'
            )
        }
        setError(false)
        
        localStorage.setItem('DPIVerifycationCode',DPI)
        navigate('/verify')
        return toast.success('Codigo de verificación enviado',{
                style: {
                    border: '1px solid #DE4B4B',
                    padding: '16px',
                    color: '#DE4B4B',
                },
                iconTheme: {
                    primary: '#DE4B4B',
                    secondary: '#F6C388',
                },
        })
    }
    return {
        register,
        loading,

    }
}
