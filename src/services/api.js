import axios  from "axios";


const apiClient = axios.create(
    {
        baseURL:'http://localhost:3641',
        setTimeout:10000
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