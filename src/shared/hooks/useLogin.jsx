import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useLogin = () => {

    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const login = async(DPI, password) =>{
        setLoading(true)
        
        const user = {
            DPI,
            password
        }

        const response = await loginRequest(user)
        setLoading(false)

        if(response.error){
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
                'Error general al intentar logearse. Intenta de nuevo'
            )
        }
        setError(false)

        localStorage.setItem('DPI',response.data.DPI)

        localStorage.setItem('token',response.data.token)
        navigate('/reports')
        return toast.success('Inicio de sesión exitoso',{
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
    login,
    loading
  }
}
