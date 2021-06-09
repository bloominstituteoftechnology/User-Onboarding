import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios'

export default function Form() {
    const initialFormState = {
        name: '',
        email: '',
        password: '',
        terms: false,
    };

    const [form, setForm] = useState(initialFormState);
    const [button, setButton] = useState(true);
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        tos: '',
    });

    const schema = yup.object().shape({
        name: yup.string().required('Name is Required'),
        email: yup.string().required('Email is Required'),
        password: yup.string().required('Password is required'),
        tos: yup.boolean().oneOf([true], 'Please accept terms of service')
    });

    useEffect(() => {
        schema.isValid(form).then((valid) => {
            setButton(!valid);
        })
    }, [form]);

    const inputChange = e => {
        validate(e);
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setForm({...form, [e.target.name]: value })
    };

    const onSubmit = e => {
        e.preventDefault()
        console.log('Form submission complete')
        setForm(form)
        axios.post('https://reqres.in/api/users', form)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => console.log('error'))
    }

    const validate = e => {
        yup.reach(schema, e.target.name)
        .validate(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
        .then(valid => {
            setError({
                ...error, [e.target.name]: '',
            });
        })
        .catch(err => {
            setError({
                ...error, [e.target.name]: err.errors[0]
            })
        })
    }
    return (
        <div>
          <form onSubmit={onSubmit}>
          <label>Name
            <input
              name='name'
              type='text'
              id="name"
              onChange={inputChange}
            />
            {error.name.length > 0 ? <p>{error.name}</p> : null}
          </label>
          <label>Email
            <input
              name='email'
              type='text'
              id="email"
              onChange={inputChange}
            />
            {error.email.length > 0 ? <p>{error.email}</p> : null}
          </label>
          <label>Password
            <input
              name='password'
              type='password'
              id="password"
              onChange={inputChange}
            />
            {error.password.length > 0 ? <p>{error.password}</p> : null}
          </label>
          <label>Terms of Service
            <input
              name='tos'
              type='checkbox'
              id="tos"
              onChange={inputChange}
            />
            {error.tos.length > 0 ? <p>{error.tos}</p> : null}
          </label>
          <label>
              <input
                type='submit'
                disabled={button}
              />
            </label>
        </form>
        </div>
      )
}