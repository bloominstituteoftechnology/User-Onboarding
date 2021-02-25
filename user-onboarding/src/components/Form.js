import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

// IMPORT CUSTOM COMPONENTS
import TextInput from './TextInput'
import Checkbox from './Checkbox'

const INITIAL_USER_FORM_DATA = {
    name: '',
    email: '',
    password: '',
    acceptedTerms: false
}

const INITIAL_USER_FORM_ERRORS = {
    name: '',
    email: '',
    password: '',
    acceptedTerms: ''
}

const schema = yup.object().shape({
    name: yup.string().required("Please tell us your name"),
    email: yup.string().email("I don't think that's an email address").required("Without your email we can't contact you"),
    password: yup.string().required("Passwords keep you secure!"),
    acceptedTerms: yup.boolean().required("Please accept the terms")
})

export default function Form(props) {
    const { onSubmit } = props

    const [formValues, setFormValues] = useState(INITIAL_USER_FORM_DATA)
    const [formErrors, setFormErrors] = useState(INITIAL_USER_FORM_ERRORS)
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        schema.isValid(formValues).then(valid => {
            setButtonDisabled(!valid)
        })
    })

    const onChange = (inputName, inputValue) => {
        setFormValues({
            ...formValues,
            [inputName]: inputValue
        })

        yup.reach(schema, inputName)
            .validate(inputValue)
                .then(_ => {
                    setFormErrors({ ...formErrors, [inputName]: '' })
                })
                .catch(err => {
                    setFormErrors({ ...formErrors, [inputName]: err.errors[0] })
                })

    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        
        onSubmit(formValues)
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
            <button type="submit" disabled={buttonDisabled}>JOIN!</button>
        </form>
    )
}