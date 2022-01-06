import { Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';

const BaseButton = (
    {
        buttonTitle
    }
) => {

    return (
        <Button
            variant='contained'
            size='medium'
            
        >
            {buttonTitle}
        </Button>
    )
}

BaseButton.propTypes={
    buttonTitle:PropTypes.string.isRequired
}

export default BaseButton