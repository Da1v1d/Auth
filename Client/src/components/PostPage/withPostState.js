import React from  'react'
import { useDispatch } from 'react-redux'
import { usePostState } from '../../customHooks/usePostState'
import { closePostDialog } from '../../store/posts/post-actions'


const withPostState = (Component) => (props)=> {
    const postState = usePostState()
    const dispatch = useDispatch()
    const closePostDialogHandler= () => {
        dispatch(closePostDialog())
    }
    return (
        <Component 
            {...props}
            postState={postState}
            closeDialog = {closePostDialogHandler}
        />
    )
} 

export default withPostState