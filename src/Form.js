import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactDOM from 'react-dom'
import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string().required('User must have a name!').min(5, 'Five character minimum.'),
    password: yup.string().required('Password required!').min(10, "Ten character password minimum."),
    email: yup.string().required('E-Mail needed for verification.'),
    agree: yup.boolean().oneOf([true], 'All Users must agree to the Terms of Service.')
})

function Form({ setTeamValues, teamValues }){
    const [formValues, setFormValues] = useState({name:'', password:'', email:'', agree: false,})
    const [errors, setErrors] = useState({name:'', password:'', email:'', agree: '',})
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...setErrors, [name]: ''}))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
    }
    const onValueChange = event => {
        const { checked, value, name, type } = event.target
        console.log(value)
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setFormValues({ ...formValues, [name]: valueToUse})
    }

    const onFormSubmit = event => {
        
        event.preventDefault() //this information's not going anywhere real, so i'm preventing the page from reloading when hitting the send button
        const newUser = {name: formValues.name.trim(), password: formValues.password.trim(), email: formValues.email.trim(), agree: formValues.agree}
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                setFormValues({name: '', password: '', email: '', agree: false})
            })
            .catch(err => {
                console.log('ERROR!')
                debugger
            })
        setTeamValues([...teamValues, formValues])
    }

    useEffect(() => {
        console.log('whats this?')
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])


    return (
        <form className="formComponent" onSubmit={onFormSubmit}>
            <input 
                type='text'
                value={formValues.name}
                placeholder="User Name"
                onChange={onValueChange}
                name='name'
            />
            <br />
            <input 
                type="password"
                value={formValues.password}
                placeholder="Password"
                onChange={onValueChange}
                name='password'
            />
            <br />
            <input 
                type='email'
                value={formValues.email}
                placeholder="User E-Mail"
                onChange={onValueChange}
                name='email'
            />
            <br />
            <label> Do you agree to our Terms of Service?
                <input 
                onChange={onValueChange} 
                checked={formValues.agree}
                name="agree"
                type="checkbox"
                />
            </label>
            <br />
            <button disabled={disabled}>Submit!</button>
        </form>
    )
}

export default Form;