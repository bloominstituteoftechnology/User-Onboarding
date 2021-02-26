import React, { useEffect, useState } from 'react'
import { Alert } from 'reactstrap'

import TextInput from './TextInput'
import Checkbox from './Checkbox'

const FormInput = (props) => {
    const { 
        type,
        name,
        label,
        value,
        checked,
        handleChange,
        error
    } = props

    const [showError, setShowError] = useState(false)

    const onChange = (inputName, inputValue) => {
        handleChange(inputName, inputValue)
    }

    useEffect(() => {
        if (!error) {
            setShowError(false)
        } else if (error) {
            setShowError(true)
        }
    }, [error])

    const dismissError = () => {
        setShowError(false)
    }


    const Component = type === 'checkbox'
        ? Checkbox
        : TextInput

    return (
        <>
            <Component 
                type={type}
                name={name}
                label={label}
                value={value}
                checked={checked}
                handleChange={onChange}
            />
            <Alert 
                color="danger"
                isOpen={showError}
                toggle={dismissError}
            >
                {error}
            </Alert>
        </>
    )
}

export default FormInput