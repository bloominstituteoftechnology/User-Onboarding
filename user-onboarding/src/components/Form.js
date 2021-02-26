import React, { useEffect, useState } from 'react'
import * as yup from 'yup'

import { Form as ReactStrapForm, Button } from 'reactstrap'

// IMPORT CUSTOM COMPONENTS
import FormInput from './FormInput'

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
    acceptedTerms: yup.boolean().required("Please accept the terms").oneOf([true], "Please accept the terms")
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
        setFormValues(INITIAL_USER_FORM_DATA)
        // Needed for reactstrap styling :(
        const _checkbox = document.querySelector('input[name=acceptedTerms]')
        _checkbox.checked = false
    }

    return (
        <ReactStrapForm onSubmit={handleSubmit}>
            <FormInput 
                name="name"
                label="Name"
                value={formValues.name}
                handleChange={onChange}
                error={formErrors.name}
            />
            <FormInput 
                name="email"
                type="email"
                label="Email"
                value={formValues.email}
                handleChange={onChange}
                error={formErrors.email}
            />
            <FormInput 
                name="password"
                type="password"
                label="Password"
                value={formValues.password}
                handleChange={onChange}
                error={formErrors.password}
            />
            <FormInput
                name="acceptedTerms"
                value={formValues.acceptedTerms}
                checked={formValues.acceptedTerms}
                label="Accept Terms"
                handleChange={onChange}
                error={formErrors.acceptedTerms}
                type="checkbox"
            />
            <Button style={{ marginTop: '1rem' }} type="submit" disabled={buttonDisabled}>JOIN!</Button>
        </ReactStrapForm>
    )
}