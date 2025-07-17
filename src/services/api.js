import axios  from "axios";


const apiClient = axios.create(
    {
        baseURL:'http://localhost:3641',
        setTimeout:10000
    }
)
//prueba

apiClient.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = token
        }
        return config
    }
    
)



export const registerRequest = async(user)=>{
    try {
        return await apiClient.post('/v1/auth/register',user)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const loginRequest = async(user) =>{
    try {
        return await apiClient.post('/v1/auth/login',user)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const addReportRequest = async(report) =>{
    try {
        return await apiClient.post('/v1/report/add', report)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const verifyCodeRequest = async(code) =>{
    try {
        return await apiClient.post('/v1/auth/verifyCode', code)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const resendCodeRequest = async(resendCode)=>{
    try {
        return await apiClient.post('/v1/auth/resendCode', resendCode)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const getReportsRequest = async()=>{
    try {
        return await apiClient.get('/v1/report/get')
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const deleteReportRequesty = async(id)=>{
    try {
        return await apiClient.delete(`/v1/report/delete/${id}`)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}