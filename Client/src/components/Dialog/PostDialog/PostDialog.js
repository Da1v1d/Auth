import React from 'react'
import BaseDialog from '../BaseDialog/BaseDialog'
import withPostState from '../../PostPage/withPostState' 


const PostDialog = ({
    postState,
    closeDialog
}) => {
    return (
        <>
            <BaseDialog 
                title='title'
                isOpen={postState.isOpenPostDialog}
                closeDialog={closeDialog}
            />
        </>
    )
}

export default withPostState(PostDialog)