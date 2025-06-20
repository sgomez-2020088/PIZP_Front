import React from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteReportRequesty } from '../../services/api'
import toast from 'react-hot-toast'

export const useDeleteReport = () => {
   let navigate = useNavigate()
    const deleteReport = async(id)=>{
       const response = await deleteReportRequesty(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al eliminar el reporte'
            )
        }
        
        return toast.success('Reporte elimado',{
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
    deleteReport
  }
}
