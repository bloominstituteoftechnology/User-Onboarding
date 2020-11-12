import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Enter a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(6, 'Password had 6 character minimum')
        .required('Password is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'Must accept terms!')
})

const Form = () => {

    // state for for form object
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false
    });

    // set state for errors
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: ''
    });

    // state for submit button
    const [buttonDisabled, setButtonDisabled] = useState(false);

    // state for user object
    const [users, setUsers] = useState([]);



    // only enable submit if form is valid !!!
    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setButtonDisabled(!valid);
        });
    }, [formState]);

    // change handler
    const changeHandler = event => {
        event.persist();
        const formData = {
            ...formState, 
                [event.target.name]: 
                    event.target.name === 'terms' 
                        ? event.target.checked 
                        : event.target.value,
        };
        validateChange(event);
        setFormState(formData);
    };

    // validate changes
    const validateChange = event => {
        yup
            .reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({ ...errors, [event.target.name]: ''
                });
            })
            .catch(error => {
                setErrors({ 
                    ...errors, [event.target.name]: error.errors[0]
                });
            });
    };

    const formSubmit = event => {
        event.preventDefault();
        axios
            .post('https://reqres.in/api/users', formState)
            .then(response => {
                const newUsers = [...users, response.data];
                setUsers(newUsers);
                console.log(users);
                setFormState({
                    name: '',
                    email: '',
                    password: '',
                    terms: false
                });
            })
            .catch(error => {
                console.log(error.response)
            })
    };

    return (
        <div>
            <form onSubmit={ formSubmit }>
                <div>
                    <div>{errors.name}{errors.email}{errors.password}{errors.terms}</div>
                </div>
                <div>
                    <label>Name: </label>
                    <input
                        id='name'
                        type='text'
                        name='name'
                        value={formState.name}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        id='email'
                        type='text'
                        name='email'
                        value={formState.email}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        id='password'
                        type='password'
                        name='password'
                        value={formState.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <input
                        id='terms'
                        type='checkbox'
                        name='terms'
                        value={formState.terms}
                        onChange={changeHandler}
                    />
                    <label>Agree to Terms and Conditions</label>
                </div>
                <div>
                    <button disabled={buttonDisabled} type='submit'>Submit</button>
                </div>
            </form>
            <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.password}</p>
                    </div>
                ))}
            </div>
        </div>
        
    )




}


export default Form