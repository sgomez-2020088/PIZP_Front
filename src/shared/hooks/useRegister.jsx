import React, { useState } from 'react'
import { registerRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

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
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrase'
            )
        }
        setError(false)
        return toast.success('Usuario registrado correctamente')
    }
    return {
        register,
        loading
    }
}
