import axios from "axios"
import { useUserData } from "../customHooks/useUserData"


const baseApi = axios.create({
    baseURL:'http://localhost:5000/v1',
    withCredentials:true
})


baseApi.interceptors.request.use(req=>{
    req.headers = {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
    }
    return req
})
export default  baseApi