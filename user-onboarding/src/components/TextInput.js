import React from 'react'

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
        <label htmlFor={name}>
            {label}
            <input name={name} type={type} value={value} onChange={onChange} />
        </label>
    )
}

export default TextInput