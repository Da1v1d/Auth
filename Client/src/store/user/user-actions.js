import { ADD_ACCOUNT , LOGIN_USER, GET_USERS , IS_LOGINING } from "./user-action-types";
import * as api from '../../api/api'


export const addAccount = (data) => {
    return (dispatch) => {
        dispatch({
            type:ADD_ACCOUNT,
            payload:data
        })
    }
}

export const isLogining = (logining) =>(dispatch) => {
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
        await dispatch(isLogining(true))
        const data = await api.loginUser(user)
        localStorage.setItem('accesToken', data.accesToken)
        localStorage.setItem('isLogined', true)
        dispatch({
            type:LOGIN_USER,
            payload:data.user,
        }) 
        await dispatch(isLogining(false))
    } catch (error) {
        console.log(error)
    }
}

export const getUserData = () => async (dispatch) => {
    try {
        const data = await api.userData()
        dispatch ({
            type:LOGIN_USER,
            payload:data
        })
    } catch (error) {
        
    }
}