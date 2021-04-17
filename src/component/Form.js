import React, {useState } from 'react';
import * as yup from 'yup';

const formScheama =yup.object().shape({

    name: yup.string().required(),
    email: yup.string().required().email().required(),
    password: yup.string().required(),
    termofService:yup.boolean().oneOf([true]) ,   
})

export default function Form() {

    //const {change,submit,values, errors,disabled,}
    const  [formState, setFormState] =  useState({
        name:"",
        email:"",
        password:"",
        termofService:false ,

    })
    const  [errors, setErrors] =  useState({
        name:"",
        email:"",
        password:"",
        termofService:false ,

    })
    const formSubmit = e => {
        e.preventDefault();
        console.log ("Form submitted")
    }
    const validate  = (e) => {
    yup.reach(formScheama, e.target.name)
        .validate(e.target.value)
        .then(valid =>{
            setErrors({
                ...errors,
                [e.target.name]: ""
            })

        })
        .catch(err => {
            console.log(err.errors)
            setErrors({
                ...errors, 
                [e.target.name]: err.errors[0]
                
            })
        })

    }
    const inputChange = e => {
       // console.log("Input Changed!", e.target.name);
       let value = e.target.type ==="checkbox" ? e.target.checked : e.target.value
        setFormState({ ...formState, [e.target.name]: value });
        
    };

    return(
        
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name
                <input 
                value={formState.name}
                type="text"
                id="name"
                name="name"
                onchange={inputChange}
                />
            </label>
            <label htmlFor="email" >Email
                    <input 
                    value={formState.email}
                    name='email'
                    id="email"
                    type='email'
                    onChange={inputChange}
                />
            </label>

            <label  htmlFor="password">Password
                    <input 
                    value={formState.password}
                    name='password'
                    type='password'
                    onChange={inputChange}
                />
            </label>
            <label  htmlFor="termofService">Terms of Service
                <input 
                    checked={formState.termofService}
                    name='terms'
                    type='checkbox'
                    onChange={inputChange}
                />
            </label>
                <button>Submit</button>
        </form>
        
    )} 
