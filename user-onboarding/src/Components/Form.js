import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    // TEXT
    name: '',
    email: '',
    password:'',
    // checkbox
    terms:false
}




function Form() {


    // STATES
    const [formValues, setFormValues] = useState(initialFormValues)

    //Event handlers
    const inputChange = (name, value) => {
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    const formSubmit = () => {
        const newFriend = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
        }
        // postNewFriend(newFriend)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    // Helpers

    const getFriends = () => {

    }


    return (
        <div>
            <h1>This Is The Form</h1>
            <form>
                <label>Name 
                    <input
                        type='text'
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onChange}
                        />
                </label>
                <label>Email
                    <input 
                        type='text'
                        name='email'
                        type='email'
                        value={formValues.email}
                        onChange={onChange}
                        />
                </label>
                <label>Password
                    <input 
                        type='text'
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={onChange}
                        />
                </label>
                <br></br>
                <label> Do You agree to the Terms?
                    <input
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <button onClick={onSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default Form