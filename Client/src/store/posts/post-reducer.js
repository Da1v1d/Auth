import { OPEN_POST_DIALOG , CLOSE_POST_DIALOG } from "./post-action-types"

const initialState = {
    isOpenPostDialog:false,

}

const postReducer = (state=initialState,action) => {
    switch(action.type){
        case OPEN_POST_DIALOG:
            return {
                ...state,
                isOpenPostDialog:true
            }
        case CLOSE_POST_DIALOG:
            return {
                ...state,
                isOpenPostDialog:false
            }
        default:
            return state
    }
}

export default postReducer