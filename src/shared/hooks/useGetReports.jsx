import React, { useState } from 'react'
import { getReportsRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useGetReports = () => {

    const [reports, setReports] = useState(null)

    const getReports = async()=>{
        const response = await getReportsRequest()

        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message ||
                'Error al crear reporte. Intente mas tarde'
            )
        }

        setReports(response.data.updatedReports)
    }
    return {
        reports,
        isFetching: !reports,
        getReports
    }
}
