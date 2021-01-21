import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

export default function Form() {
    //set default state
    const defaultState = {
        username: '',
        email: '',
        password: '',
        terms: false,
    }
    const [formState, setFormState] = useState(defaultState)
    const [errors, setErrors] = useState({...defaultState, terms: ''})
    const [buttonDisabled, setButtonDisabled] = useState(true)
  
    //formState schema
    const formSchema = yup.object().shape({
        username: yup
            .string()
            .required('Username is required'),
        email: yup
            .string()
            .email('Must be a valid email address')
            .required('Email is required'),
        password: yup
            .string()
            .required('Password is required')
            .min(5, 'Password must be at least 5 characters long'),
        terms: yup
            .boolean()
            .oneOf([true], 'You must agree to the terms of service')
    })

    //disable button if state doesn't match schema
    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => setButtonDisabled(!valid))
    }, [formState, formSchema])

    //validate function (asyncronous operation)
    //1. persist so we can reuse this event
    //2. reach grabs a specific part of the schema and validates it
    //3. validate if matches schema
    //4. if valid, set errors as empty string
    //5. if fails, set errors as errors
    const validateChange = e => {
        e.persist()
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(() => setErrors({
            ...errors, 
            [e.target.name]: ''
        }))
        .catch(err => setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
        }))
    }

    //onChange function
    //1. ternary operator to determine value
    //2. set state to value
    //3. validate change will meet schema
    const inputChange = e => {
        const value = 
            e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setFormState({
            ...formState,
            [e.target.name]: value
        })
        validateChange(e)
        }

    //onSubmit function
    //1. prevent default
    //2. post to server
    //3. print that post submitted
    //4. catch any errors
    const formSubmit = e => {
        e.preventDefault()
        axios
            .post(`https://reqres.in/api/users`, formState)
            .then(() => console.log('Post Submitted'))
            .catch(err => console.log(err))
    }

   return(
       <form onSubmit={formSubmit}>

        <Input
            type='text'
            name='username'
            onChange={inputChange}
            value={formState.username}
            label='Username'
            errors={errors}
        />

        <Input
            type='email'
            name='email'
            onChange={inputChange}
            value={formState.email}
            label='Email'
            errors={errors}
        />

        <Input
            type='text'
            name='password'
            onChange={inputChange}
            value={formState.password}
            label='Password'
            errors={errors}
        />

        <label className="terms" htmlFor="terms">
            <input name="terms" type="checkbox" onChange={inputChange} />
            Terms & Conditions
        </label>

        <button disabled={buttonDisabled}>
            Submit
        </button>

       </form>
   )
}