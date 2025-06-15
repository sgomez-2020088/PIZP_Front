import React from 'react'
import { verifyCodeRequest } from '../../services/api'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export const useVerifyCode = () => {
    let navigate = useNavigate()
    const sendVerifyCode = async(DPI,verificationCode)=>{

        const code = {
            DPI,
            verificationCode
        }

        const response = await verifyCodeRequest(code)
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al ingresar codigo de verificación. Intente mas tarde'
            )
        }

        navigate('/login')
        return toast.success('Usuario verificado correctamente',{
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
    sendVerifyCode
  }
}
