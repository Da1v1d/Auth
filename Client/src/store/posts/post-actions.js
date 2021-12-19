import { OPEN_POST_DIALOG , CLOSE_POST_DIALOG } from "./post-action-types"

export const openPostDialog = () => (dispatch) =>{
    dispatch({
        type:OPEN_POST_DIALOG
    })
}

export const closePostDialog = () => (dispatch) => {
    dispatch({
        type:CLOSE_POST_DIALOG
    })
}