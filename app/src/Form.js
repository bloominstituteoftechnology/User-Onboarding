import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios'
import './Form.css';

const schema = yup.object().shape({
    username: 
    yup.string().required('username field is required').min(6, 'username length must be atleast 6 characters.'),
    email: 
    yup.string().required('username field is required'),
    password: 
    yup.string().required('password field is required').min(12, 'password length must be atleast 12 characters.'),
    agree: 
    yup.boolean().oneOf([true], 'You must accept the Terms of Service to proceed.'),
})

function Form() {

    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: '',
        agree: false,
    })
    const [ errors, setErrors ] = useState({
        username: '',
        email: '',
        password: '',
        agree: '',
    })
    const [ user, setUser ] = useState({
        setForm
    })
    const [ disabled, setDisabled ] = useState(true)

    const setFormErrors =(name, value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: '' }))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setForm({ ...form, [name]: valueToUse})
    }

    const submit = event => {
        event.preventDefault()
        const newUser = { 
            user: form.username.trim(),
            email: form.email,
            password: form.password,
            agree: form.agree
        }
        axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
            setForm({
                username: '',
                email: '',
                password: '',
                agree: false,
            })
            setUser({
                username: form.username,
                email: form.email,
                password: form.password,
                agree: form.agree,
            })
        })
        .catch(err => {
        })
    }

    useEffect(() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
        <div className='formContainer'>
            <div className='errorStyle'>
                <div>
                    {errors.username}
                </div>
                <div>
                    {errors.email}
                </div>
                <div>
                    {errors.password}
                </div>
                <div>
                    {errors.agree}
                </div>
            </div>
        <form className='form' onSubmit={submit}>
            <label>
                User:
                <input onChange={change} value={form.username} name='username' type='text' />
            </label>
            <br />

            <label>
                Email:
                <input onChange={change} value={form.email} name='email' type='text' />
            </label>
            <br />

            <label>
                Password:
                <input onChange={change} value={form.password} name='password' type='text' />
            </label>
            <br />

            <label className='checkboxLabel'>
                Terms of Service:
                <input onChange={change} checked={form.agree} name='tos' name='agree' type='checkbox' />
            </label>
            <br />

            <button disabled={disabled}>submit</button>
        </form>
        <div>
            <h3>Received Response:</h3>
        </div>
        <div style={{ color: 'cyan'}}>
            <div>
                <strong>Username: <span style={{ color: '#121212'}}>{user.username}</span></strong>
            </div>
            <div>
                <strong>Email: <span style={{ color: '#121212'}}>{user.email}</span></strong>
            </div>
            <div>
                <strong>Password: <span style={{ color: '#121212'}}>{user.password}</span></strong>
            </div>
            <div>
                <strong>Did user agree to TOS?: <span style={{ color: '#121212'}}>{user.agree}</span></strong>
            </div>
        </div>
        </div>
    );
  }
  
  export default Form;
  