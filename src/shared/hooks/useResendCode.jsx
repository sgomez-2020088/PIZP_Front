import React, { useState } from 'react'
import { resendCodeRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useResendCode = () => {
    const [loading, setLoading] = useState(false)

    const resendCode = async(DPI) =>{
        setLoading(true)
        const rCode={
            DPI

        }
        const response = await resendCodeRequest(rCode)
        setLoading(false)

         if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al reenviar el codigo. Intente mas tarde'
            )
        }

         return toast.success('Codigo renviado correctamente',{
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
        resendCode,
        loading
    }
}
