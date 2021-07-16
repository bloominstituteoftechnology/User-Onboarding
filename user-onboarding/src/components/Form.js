import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'

export default function Form () {
    
    // managing state for form inputs
    const defaultState = {
        name: '',
        email: '',
        password: '',
        favMmo: '',
        terms: false
    }
    const [formState, setFormState] = useState(defaultState)
    const [errors, setErrors] = useState({...defaultState, terms: ''})
    const [disableButton, setDisabledButton] = useState(true)

    // formState schema
    let formSchema = yup.object().shape({
        name: yup.string().required('Please provide name'),
        email: yup.string().required('Please provide an email').email('This is not a valid email.'),
        password: yup.string().required('Please enter a valid password').min(6),
        favMmo: yup.string(),
        terms: yup.boolean().oneOf([true], 'Please agree to the Terms and Conditions')
    })

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => setDisabledButton(!valid))
    }, [formState, formSchema])

    // onSubmit function
    const formSubmit = event => {
        event.preventDefault();
        axios.post('https://reqres.in/api/users', formState)
            .then(() => console.log('form submitted, success!'))
            .catch(err => console.log(err))
    }

    // validates if values meet schema
     const setFormErrors = (name, value) => {
         yup.reach(formSchema, name).validate(value)
            .then(() => setErrors({...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
     }

    // onChange function
    const inputChange = event => {
        const { name } = event.target
        const valueTernary = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setFormState({ ...formState, [event.target.name]: valueTernary })
        setFormErrors(name, valueTernary)
    }


    return(
        <form onSubmit={formSubmit}>
            <div style={{ color: 'red' }}>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.favMmo}</div>
                <div>{errors.terms}</div>
            </div>
            <label htmlFor='name'>
                Name:
                <input
                 type='text'
                 name='name'
                 onChange={inputChange}
                 value={formState.name}
                  /><br/>
            </label>
            <label htmlFor='email'>
                Email:
                <input
                 data-cy='email-error-msg'
                 type='text'
                 name='email'
                 onChange={inputChange}
                 value={formState.email}
                /><br/>
            </label>
            <label htmlFor='password'>
                Password:
                <input
                 type='text'
                 name='password'
                 onChange={inputChange}
                 value={formState.password}
                />
            </label><br/>
            <label htmlFor='favMmo'>
                Favorite MMO:
                <select name='favMmo' onChange={inputChange}>
                    <option value=''>-- Select Favorite MMO --</option>
                    <option value='WoW'>World of Warcraft</option>
                    <option value='FF14'>Final Fantasy XIV</option>
                    <option value='GW2'>GuildWars 2</option>
                    <option value='EVE'>EVE Online</option>
                    <option value='BDO'>Black Desert Online</option>
                    <option value='ESO'>The Elder Scrolls Online</option>
                </select>
            </label><br/>
            <label htmlFor='terms'>
                Agree to Terms and Conditions:
                <input
                data-cy='terms'
                 type='checkbox'
                 name='terms'
                 onChange={inputChange}
                 value={formState.terms}
                />
            </label><br/>
            <button id='submit' disabled={disableButton}>Submit</button>
        </form>
    );
}