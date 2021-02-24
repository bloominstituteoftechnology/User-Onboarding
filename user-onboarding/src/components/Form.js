import React, { useState } from 'react'

// IMPORT CUSTOM COMPONENTS
import TextInput from './TextInput'
import Checkbox from './Checkbox'

const INITIAL_USER_FORM_DATA = {
    name: '',
    email: '',
    password: '',
    acceptedTerms: false
}


export default function Form(props) {
    const [formValues, setFormValues] = useState(INITIAL_USER_FORM_DATA)
    const onChange = (inputName, inputValue) => {
        setFormValues({
            ...formValues,
            [inputName]: inputValue
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(formValues)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextInput 
                name="name"
                label="Name"
                value={formValues.name}
                handleChange={onChange}
            />
            <TextInput 
                name="email"
                type="email"
                label="Email"
                value={formValues.email}
                handleChange={onChange}
            />
            <TextInput 
                name="password"
                type="password"
                label="Password"
                value={formValues.password}
                handleChange={onChange}
            />
            <Checkbox 
                name="acceptedTerms"
                checked={formValues.acceptedTerms}
                label="Accpet Terms"
                handleChange={onChange}
            />
            <button type="submit">JOIN!</button>
        </form>
    )
}