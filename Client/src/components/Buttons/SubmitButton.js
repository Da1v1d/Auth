import React from 'react'
import PropTypes from 'prop-types'
import BaseButton from './BaseButton'

const SubmitButton = ({
    buttonTitle,
    disabled,
    ...props
}) => {
    return (
        <BaseButton
            type='submit'
            disabled={disabled}
            fullWidth
            buttonTitle={buttonTitle}
            {...props}
        />
    )
}

SubmitButton.propTypes={
    buttonTitle:PropTypes.string.isRequired
}

export default SubmitButton