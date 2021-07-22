import React, { useState } from 'react'

export default function App() {
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
    }
    return(
        
        <form>
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