import React from 'react'
import BaseDialog from '../reuzable-components/Modal/BaseDialog'
import withPostState from './withPostState'


const PostDialog = ({
    postState,
    closeDialog
}) => {
    return (
        <>
            <BaseDialog 
                isOpen={postState.isOpenPostDialog}
                closeDialog={closeDialog}
            />
        </>
    )
}

export default withPostState(PostDialog)