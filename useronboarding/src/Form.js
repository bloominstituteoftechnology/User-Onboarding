import React,{useState} from 'react';
import * as Yup from "yup";

const Form=()=>{
    const defaultState={
        Name:"",
        Email:"",
        Password:"",
        Terms_of_Service:"",
    };
const [formState,setFormState]=useState(defaultState);
const onSubmit=e=>{
    e.preventDefault();
    console.log('submitted');
}
let schema= yup.string();
return(
    <form onSubmit={}>
        <label htmlFor='nameInput' >Name
            <input 
                type='text' 
                placeholder='Full Name' 
                name='name' 
                id='nameInput' 
                value={} 
                onChange={}>
            </input>
        </label>
        <label htmlFor='emailInput'>Email
            <input
                type='text' 
                placeholder='Email' 
                name='email' 
                id='emailInput' 
                value={} 
                onChange={}>
            </input>
        </label>
        <label htmlFor='passwordInput'>Password
        <input
                type='text' 
                placeholder='Password' 
                name='password' 
                id='passwordInput' 
                value={} 
                onChange={}>
            </input>
        </label>
        <label htmlFor='termsInput'>Terms of Service
        <input
                type='checkbox'  
                name='terms' 
                id='termsInput' 
                checked={} 
                onChange={}>
            </input>
        </label>
        <button>Submit</button>
        </form>
)
}