import React from 'react'
import { addReportRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useAddReport = () => {

    const addReport = async(typeCrime, address, description,user)=>{
        
        const report={
            typeCrime,
            address,
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

        cons
        return toast.success('Reporte creado')
    }
  return {
    addReport
  }
}
