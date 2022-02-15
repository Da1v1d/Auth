import React from 'react'
import { Paper } from '@mui/material'
import '../../main.css'



const FormComponent = ({children}) => {

    const formStyles = {
        paper:{
            width:'70%',
            height:'600px',
            minHeight:'400px',
            display:'flex',
            justifyContent:'space-around',
        },
        leftSide:{
            width:'120%',
            height:'100%',
            backgroundColor:'#1F1F1F'
        }
    }

    return (
        <div className='main-form-container'>
            <Paper 
                elevation={8}
                sx={formStyles.paper}
                >
                <div style={formStyles.leftSide}>
                </div>
                    {children}
            </Paper>
        </div>
    )
}

export default FormComponent