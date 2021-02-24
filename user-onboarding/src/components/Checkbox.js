import React from 'react'

const Checkbox = (props) => {
    const { name, label, checked, handleChange } = props

    const onChange = (evt) => {
        const { name, checked } = evt.target
        console.log(checked)
        handleChange(name, checked)
    }

    return (
        <label htmlFor={name}>
            {label}
            <input type="checkbox" checked={checked} name={name} onChange={onChange} />
        </label>
    )
}

export default Checkbox