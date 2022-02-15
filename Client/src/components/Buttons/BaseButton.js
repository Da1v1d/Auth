import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const BaseButton = (
    {
        buttonTitle,
        buttonStyle,
        ...props
    }
) => {


    const buttonStyles = {
        background:'black',
        borderRadius: '10px',
        padding:'6px 15px',
        '&:hover':{
            background:'#101010'
        },
    }

    return (
        <Button
            variant='contained'
            size='medium'
            sx = {{...buttonStyles, ...buttonStyle}}
            {...props}
        >
            {buttonTitle}
        </Button>
    )
}


export default BaseButton