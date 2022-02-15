export const baseDialogStyles = {
    dialog:{
        '& .MuiDialog-paper':{
            background:'#26262A',
            color:'white',
            borderRadius: '7px'
        },
        '&.MuiDialogTitle-root':{
            display:'flex',
            justifyContent:'space-between', 
            alignItems:'center'
        }
    },
    dialogTitle:{
        display:'flex',
        justifyContent:'space-between'
    },
    dialogIcon:{
        color:'white',
        '&:hover': {
            cursor:'pointer'
        }
    },
    dialogAction:{
        float:'right',
        padding:'10px 40px 20px 0'
    }
    
}