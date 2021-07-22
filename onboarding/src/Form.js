import React, { useState, useEffect } from 'react'
import axios from 'axios'
import schema from './validation/formSchema'
export default function App({ submit }) {
    const initial = {
        name: '',
        email: '',
        password: '',
        tos: false
    }
    const [formValues, setFormValues] = useState(initial)

    const handleChange = (evt) => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormValues({...formValues, [name]: valueToUse})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post(`https://reqres.in/api/users`, formValues)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
        submit(formValues)
        setFormValues(initial)
    }
    useEffect(() =>{
        schema.isValid(formValues).then(valid => console.log(valid))
    }, [formValues])
    return(
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name
            <input type="text" id='name' name='name'  onChange = {handleChange} />
            </label>

            <label htmlFor="email">Email
             <input type="email" id='email' name='email' onChange = {handleChange} />
            </label>

            <label htmlFor="password">Password
            <input type="password" id='password' name='password' onChange= {handleChange} />
            </label>
            <label htmlFor="tos">I agree to the terms of service
                <input type="checkbox" id='tos' name='tos' onChange={handleChange} checked={formValues.tos} />
            </label>

            <button>Submit!</button>
        </form>
    )
}