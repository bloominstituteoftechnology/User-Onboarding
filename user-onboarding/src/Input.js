import React from 'react'

export default function Input(props) {
    const { errors, name, label } = props
    const errorMessage = errors[name]

    return(
        <label htmlFor='name'>
            {label}
            <input {...props} />
            {errorMessage.length !== 0 &&  <p className='error'>{errorMessage}</p>}
        </label>
    )
}