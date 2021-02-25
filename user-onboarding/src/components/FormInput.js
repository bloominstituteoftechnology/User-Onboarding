import React, { useEffect, useState } from 'react'
import { Alert } from 'reactstrap'

import TextInput from './TextInput'
import Checkbox from './Checkbox'

const useLastAndCurrentValue = (value) => {
    // console.log('useLast', value)
    const [lastValue, setLastValue] = useState(value)
    const [currentValue, setCurrentValue] = useState(value)

    useEffect(() => {
        console.log('update')
        setLastValue(lastValue)
        setCurrentValue(value)
    }, [lastValue, value])

    return [lastValue, currentValue]
}

const FormInput = (props) => {
    const { 
        type,
        name,
        label,
        value,
        handleChange,
        error
    } = props

    const [showError, setShowError] = useState(false)
    const [lastValue, currentValue] = useLastAndCurrentValue(value)

    const onChange = (inputName, inputValue) => {
        handleChange(inputName, inputValue)
    }

    useEffect(() => {
        if (error === '') {
            setShowError(false)
        } else if (error !== '' && lastValue !== currentValue) {
            setShowError(true)
        }
    }, [lastValue, currentValue, error])

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