import React from 'react'
import { FormGroup, Label, Input } from 'reactstrap'

const TextInput = (props) => {
    const { 
        name,
        label,
        type,
        value,
        handleChange
    } = props

    const onChange = (evt) => {
        const { name, value } = evt.target
        handleChange(name, value)
    }

    return (
        <FormGroup>
            <Label htmlFor={name}>
                {label}:
            </Label>
            <Input name={name} type={type} value={value} onChange={onChange} />
        </FormGroup>
    )
}

export default TextInput