import React from 'react'
import { addReportRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useAddReport = () => {
    const navigate = useNavigate()

    const addReport = async(typeCrime, address,lat,lng, description,user)=>{
        
        const report={
            typeCrime,
            address,
            lat,
            lng,
            description,
            user
        }

        const response = await addReportRequest(report)

        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al crear reporte. Intente mas tarde'
            )
        }
        navigate('/reports')
        return toast.success('Reporte creado',{
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
    addReport
  }
}
