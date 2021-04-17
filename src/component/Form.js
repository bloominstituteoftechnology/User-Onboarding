import React, {useState } from 'react';


export default function Form() {

    //const {change,submit,values, errors,disabled,}
    const  [formState, setFormState] =  useState({
        name:"",
        email:"",
        password:"",
        termofService:"",

    })

    const formSubmit = e => {
        e.preventDefault();
        console.loge ("Form submitted")
    }
    
    const inputChange = e => {
        console.log('Input Changed!', e.target.value);
        setFormState({...formState.e.target.name.e.target.value})
        
    }

    return(
        
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name
                <input 
                value={formState}
                type="text"
                id="name"
                name="name"
                onchange={inputChange}
                />
            </label>
            <label htmlFor="email" >Email
                    <input 
                    value={formState}
                    name='email'
                    id="email"
                    type='email'
                    onChange={inputChange}
                />
            </label>

            <label  htmlFor="password">Password
                    <input 
                    value={formState}
                    name='password'
                    type='password'
                    onChange={inputChange}
                />
            </label>
            <label  htmlFor="termofService">Terms of Service
                <input 
                    checked={formState}
                    name='terms'
                    type='checkbox'
                    onChange={inputChange}
                />
            </label>
                <button>Submit</button>
        </form>
        
    )} 
