import React, { useEffect , useState } from 'react'
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'; 
import PropTypes from 'prop-types'
import { baseDialogStyles } from './styles/style';

const BaseDialog = ({
    isOpen,
    title,
    closeDialog,
    dialogContent,
    ...rest
}) =>{

   

    return (
        <Dialog
            open={isOpen}
            fullWidth
            sx={baseDialogStyles.dialog}
        >

            <DialogTitle sx={baseDialogStyles.dialogTitle}>
                {title}
                <CloseIcon 
                    sx={baseDialogStyles.dialogIcon} 
                    onClick={closeDialog} 
                />
            </DialogTitle>

            <DialogContent>
                {dialogContent}
            </DialogContent>

            <DialogActions
                sx={baseDialogStyles.dialogAction}
            >
                <Button variant='contained'>
                    Ok
                </Button>
                <Button variant='contained' color='error'>
                    CANCEL
                </Button>
            </DialogActions>
        </Dialog>
    )
}


BaseDialog.propTypes={
    title:PropTypes.string.isRequired
}

export default BaseDialog