import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from  'axios';


export default function Form() {

    const initialFormState = {
        username: '',
        email: '',
        password:  '',
        terms: ''
    };

    const [post, setPost] = useState([]);
    const [serverError, setServerError] = useState("");
    const [formState, setFormState] = useState(initialFormState);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [errors, setErrors] = useState(initialFormState);

    const formSchema = yup.object().shape({
        username: yup.string().required("You must choose a username!"),
        email: yup.string().email('Invalid email address').required(),
        password: yup.string().required("Invalid password"),
        terms: yup.boolean().oneOf([true], 'Agree or die')
    });

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: '' });
            })
            .catch(err => {
                console.log('error', err);
                setErrors({ ...errors, [e.target.name]: err.errors[0] });
        });
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            console.log('valid?', valid);
            setIsButtonDisabled(!valid);
        });
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();

        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {
                setPost(response.data);

                setFormState({
                    username: '',
                    email: '',
                    password: '',
                    terms: ''
                });

                setServerError(null);
            })

            .catch(err => {
                setServerError('Something isn\'t working!');
            });
    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === 'checkbox'  ? e.target.checked : e.target.value
        };
        
        validateChange(e);
        setFormState(newFormData)
    }

    return(
        <form onSubmit={formSubmit}>
            {serverError ? <p className='error'>{serverError}</p> : null}
                <label htmlFor='username'>
                    Username: 
                    <input
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    onChange={inputChange}
                    value={formState.username} />
                    {errors.username.length > 0 ? <p className='error'>{errors.name}</p> : null}
                </label>
                <label htmlFor='email'>
                    Email: 
                    <input
                    id='email'
                    type='text'
                    name='email'
                    placeholder='Email'
                    onChange={inputChange}
                    value={formState.email} />
                    {errors.email.length > 0 ? <p className='error'>{errors.email}</p> : null}
                </label>
                <label htmlFor='password'>
                    Password: 
                    <input
                    type='text'
                    name='password'
                    placeholder='Password'
                    onChange={inputChange}
                    value={formState.password} />
                    {errors.password.length > 0 ? <p className='error'>{errors.email}</p> : null}
                </label>
                <label id='terms' htmlFor='terms'>
                    <input
                    type='checkbox' 
                    name='terms'
                    checked={formState.terms}
                    onChange={inputChange} />
                    Terms of Service
                </label>
                <button id='submit' type='submit' disabled={isButtonDisabled}>Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
    );
};