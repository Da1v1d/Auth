import { ADD_ACCOUNT, GET_USERS , LOGIN_USER , IS_LOGINING } from "./user-action-types"

const initialstate={
    data:{
        login:null,
        password:null
    },
    endRequest:true,
    users:[],
    accounts:[],
    isLoggining:null,
    isLogined:localStorage.getItem('isLogined')
}


const reducer=(state=initialstate,action)=>{
    switch (action.type){
        case GET_USERS :
            return {
                ...state,
                users:action.payload
            }
        case LOGIN_USER :
            return {
                ...state,
                data:action.payload,
            } 
        case IS_LOGINING:
            return {
                ...state,
                isLoggining:action.payload
            }
            default:
                return state

    }
}
export default reducer