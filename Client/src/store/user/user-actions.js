import { ADD_ACCOUNT , LOGIN_USER, GET_USERS , IS_LOGINING } from "./user-action-types";
import * as api from '../../api/api'
import { routeUrls } from "../../Routes/routeUrls";


export const addAccount = (data) => {
    return (dispatch) => {
        dispatch({
            type:ADD_ACCOUNT,
            payload:data
        })
    }
}

export const isLoading = (logining) =>(dispatch) => {
    return dispatch({
        type:IS_LOGINING,
        payload:logining
    })
}


export const getUsers = () => async (dispatch) => {  
    try {
        const {data} = await api.fetchUsers();
        dispatch({
            type:LOGIN_USER,
            payload:data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser = (user , history) => async (dispatch) =>{
    try {
        dispatch(isLoading(true))
        const data = await api.loginUser(user)
        localStorage.setItem('accessToken', data.accesToken)
        localStorage.setItem('isLogined', true)
        await dispatch({
            type:LOGIN_USER,
            payload:{
                user:data.user,
                accesToken:data.accesToken,
                isLogined:true
            },
        }) 
        dispatch(isLoading(false))
    } catch (error) {
        console.log(error)
    }
}

export const getUserData = () => async (dispatch) => {
    try {
        dispatch(isLoading(true))
        const {data} = await api.userData()
        dispatch ({
            type:LOGIN_USER,
            payload:data
        })
        dispatch(isLoading(false))
    } catch (error) {
        console.log(error)
    }
}