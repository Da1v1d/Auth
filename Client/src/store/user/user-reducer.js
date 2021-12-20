import { ADD_ACCOUNT, GET_USERS , LOGIN_USER , IS_LOGINING } from "./user-action-types"

const initialstate={
    data:{
        user:null,
        accesToken:null,
        isLogined:false
    },
    endRequest:true,
    users:[],
    accounts:[],
    isLoading:null,
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
                isLoading:action.payload
            }
            default:
                return state

    }
}
export default reducer