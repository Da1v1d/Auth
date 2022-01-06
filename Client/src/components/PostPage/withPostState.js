import React , {useCallback} from  'react'
import { useDispatch } from 'react-redux'
import { usePostState } from '../../customHooks/usePostState'
import { useRedux } from '../../customHooks/useRedux'
import { closePostDialog } from '../../store/posts/post-actions'


const withPostState = (Component) => (props)=> {
    const postState = useRedux('postReducer')
    const dispatch = useDispatch()
    
    const closePostDialogHandler = useCallback(()=>{
        dispatch(closePostDialog())
    },[])

    return (
        <Component 
            {...props}
            postState={postState}
            closeDialog = {closePostDialogHandler}
        />
    )
} 

export default withPostState