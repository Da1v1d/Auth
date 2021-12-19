import React, { useEffect } from 'react'
import {Dialog, DialogTitle} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'; 

const BaseDialog = ({
    isOpen,
    title,
    closeDialog,
    ...rest
}) =>{


    const dialogStyles = {
        '& .MuiDialog-paper':{
                background:'#26262A',
                color:'white'
            },
        '&.MuiDialogTitle-root':{
            display:'flex',
            justifyContent:'space-between', 
            alignItems:'center'
        }
    }

    return (
        <Dialog
            open={isOpen}
            fullWidth
            sx={dialogStyles}
        >
            <DialogTitle>
                {title}
                <CloseIcon sx={{color:'white'}} onClick={closeDialog} />
            </DialogTitle>

        </Dialog>
    )
}

export default BaseDialog