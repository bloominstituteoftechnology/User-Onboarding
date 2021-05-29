import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const initialFormValues = {
    name: '',
    email: '',
    password:'',
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
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form