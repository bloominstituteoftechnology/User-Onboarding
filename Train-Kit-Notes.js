import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';

// Below is a schema from yup that sets requirements of our form data using yup methods, the first part explains what the requirements are the second part gives an error message if those requirements are not appeased

const schema = yup.object().shape({
    user: yup.string().required('user is required').min(6, 'user needs to be 6 characters min'),
    star: yup.string().oneOf(['wars', 'trek'], 'you must select a star'),
    language: yup.string().oneOf(['1','2','3'], 'you must choose a language'),
    agree: yup.boolean.oneOf([true], 'you must give away all your data')
});

export default function App() {
    //Form is state driven now due to code below
    const [form, setForm] = useState({user: '', star: '', agree: false, language: '', })
    const [errors, setErrors] = useState({user: '', star: '', agree: false, language: '', })
    // Disabled state sets the submit button below to either be functional or not
    const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name, value) => {
        // Reach into the schema and find the name to validate the value
        yup.reach(schema, name).validate(value)
        // If the validation was successful than we set the error message to an empty string because it was successful
        .then(() => setErrors({...errors, [name]: ''}))
        // If the validation was unsuccessful than we set the error message to the validation error which in yup can be found in the [0] index of the state we are changing from the info we get back from our validation call
        .catch((err => setErrors({...errors, [name]: err.errors[0]})))
    }

    const change = event => {
        // All this info lives on event.target
        const { checked, value, name, type } = event.target
        // Ternary that determines which value to use based on whether the input is a checkbox or not 
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        // Changes the value of our form state based on the name that was changed and the value(above) it changed to
        setForm({...form, [name]: valueToUse})
    }

    // Submit function that prevents default page reload than creates a new object using the data from the form slice of state
    // then post this information to a server using axios.post and sending the server newUser
    // once this is done we can do many things in the .then path but for now we will reset the form state to empty
    const submit = event => {
        event.preventDefault();
        const newUser = { user: form.user.trim(), star: form.star, agree: form.agree, language: form.language}
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                setForm({user: '', star: '', agree: false, language: '', })
            })
            .catch(err => {

            })
    }

    // This useEffect gives us a boolean value inside 'valid', if the schema is true than valid is true and 
    // setDisabled becomes false which enables our submit button and visa versa 
    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid)) 
    }, form)
    
    return (
        <div className='App'>
            {/* Div to display errors based on input name */}
            <div style={{color: 'red'}}>
                <div>{errors.user}</div><div>{errors.star}</div><div>{errors.agree}</div><div>{errors.language}</div>
            </div>
            {/* onSubmit on form element */}
            <form onSubmit={submit}>
                <label>User
                    <input onChange={change} value={form.user} type='text' name='user' />
                </label>

                {/* Naming both radio buttons star means they both can't be true at the same time */}
                {/* For the checked property on our radio button, below it returns true if the name of the button is equal to its value */}

                <label>Star Trek
                    <input onChange={change} checked ={form.star === 'trek'}value='trek' name="star" type='radio' />
                </label>

                <label>
                    Star Wars
                    <input onChange={change} checled={form.star === 'wars'}value='wars' name='star' type='radio' />
                </label>

                <label>
                    Give away your data
                    <input onChange={change} checked={form.agree} name='agree' type='checkbox' />
                </label>

                <label>Language
                    <select value={form.language} name='language'>
                        <option value=''>---Select One---</option>
                        <option value='1'>Javascript</option>
                        <option value='2'>Python</option>
                        <option value='3'>Java</option>
                    </select>
                </label>
                {/* comes from a slice of state with a boolean value */}
                <button disabled={disabled}>submit</button>
            </form>
        </div>
    );
};