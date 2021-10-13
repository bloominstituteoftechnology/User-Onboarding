import React, { useState, useEffect } from 'react'
import axios from 'axios'
import schema from './validation/formSchema'
import { reach } from 'yup'


export default function App({ users, setUsers}) {
    const initial = {
        name: '',
        email: '',
        password: '',
        tos: false
    }
    const [formValues, setFormValues] = useState(initial)
    
    const [disabled, setDisabled] = useState(true)

    const [formErrors, setFormErrors] = useState({})
    
    const submit = (user) => {
    
        setUsers([...users, user ])
        axios.post(`https://reqres.in/api/users`, formValues)
                .then(res => {
                    setUsers([res.data, ...users])
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setFormValues(initial)
                })
        
        
    }
    const validate = (name, value) => {
        reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({...formErrors, [name]: ''}))
            .catch(err => setFormErrors({[name]: err.errors[0]}))

    }

    
    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
        validate(name, value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        
        submit(formValues)
        
    }

    useEffect(() =>{
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])
    return(
        <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name
            <input type="text" id='name' name='name' value={formValues.name} onChange = {handleChange} />
            </label>

            <label htmlFor="email">Email
             <input type="email" id='email' name='email' value={formValues.email} onChange = {handleChange} />
            </label>

            <label htmlFor="password">Password
            <input type="password" id='password' name='password' value={formValues.password} onChange= {handleChange} />
            </label>
            <label htmlFor="tos">I agree to the terms of service
                <input type="checkbox" id='tos' name='tos' value={formValues.tos} onChange={handleChange} checked={formValues.tos} />
            </label>

            <button disabled={disabled}>Submit!</button>

            
        </form>
        <p>{formErrors.name}</p>
        </div>
    )
}