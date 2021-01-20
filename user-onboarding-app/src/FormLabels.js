import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import './App.css';
import axios from 'axios';

const schema= yup.object().shape({
 name: yup.string().required('name is required!').min(3, 'name needs to be at least 3 letters long'),
 password: yup.string().required('password is required').min(6, 'password must be at least 6 characters long'),
 email: yup.string().email('invalid email').required('valid email address required'),
 tos: yup.boolean().oneOf([true], 'you must agree to the terms of service to continue'),
})


//form requirements⬇⬇⬇⬇⬇
//name, email, password, terms of service (checkbox), submit button to send data to server

export default function FormLabels (props) {
    
    const [form, setForm] = useState({name: '',email: '',password: '',tos: false,})

    const [errors, setErrors] = useState({name: '',email: '',password: '',tos: '',})

    const [disabled, setDisabled] = useState(true)

    const [post, setPost] = useState([]);

    const setFormErrors =(name, value) => {
        yup.reach(schema, name).validate(value)
            .then( () => setErrors({...errors, [name]: ''}))
            .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }
 

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueChecked = type === 'checkbox' ? checked : value
        setFormErrors(name, valueChecked)
        setForm({...form, [name]: valueChecked})
    }

    const submit = event => {
        event.preventDefault()
        //const newUser = { name: form.name.trim(), email: form.email, password: form.password, tos: form.tos } 
        axios
        .post('https://reqres.in/api/users', form)
        .then(res => {
            setPost(res.data)
            console.log('success', res)
        })
        .catch(err => {
            console.log('error submitting', err)
        })
    }

    useEffect( () => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form])

    return (
    
    
    <div className='form-inputs'>
      <div style={{ color: 'red'}}>
         <div>{errors.name}</div>
         <div>{errors.email}</div>
         <div>{errors.password}</div>
         <div>{errors.tos}</div>  
    </div>  
        <form onSubmit={submit}> 
        <label>Name
            <input 
            onChange={change}
            value={form.name}
            name='name' 
            type='text'
            placeholder='enter name'
            maxLength='35'/>
        </label>

        <label>Email
            <input 
            onChange={change}
            value={form.email}
            name='email' 
            type='text'
            placeholder='provide valid email address'
            maxLength='40'/>
        </label>

        <label>Password
            <input 
            onChange={change}
            value={form.password}
            name='password' 
            type='text'
            placeholder='create password'/>
        </label>

        <label>Terms of Service
            <input 
            onChange={change}
            checked={form.tos}
            name='tos' 
            type='checkbox'
            placeholder='please read and agree to the following terms of service'/>
        </label>

        
            <button disabled={disabled}>Submit</button>
        <div>
            <h1>Welcome new users!</h1>
            <p>{post.name}</p>
            <p>{post.email}</p>
            <p>{post.tos}</p>
            <p>{post.id}</p>
        </div>
        
        </form>
        </div>
        


)

}