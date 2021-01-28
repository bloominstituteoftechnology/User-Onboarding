import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import schema from '../Validation/schema'
import * as yup from 'yup'


///Initial States///
const initialFormValues ={
    name:'',
    email:'',
    password:'',
    termsOfService: false,
  }
  const initialFormErrors ={
    name:'',
    email:'',
    password:'',
    
  }
  
  const initialDisabled = true


function Form(props) {  
const { setUser } = props
//setting state
  const [formValues, setFormValues] =useState(initialFormValues)
  const [formErrors, setFormErrors]=useState(initialFormErrors)
  const [disabled, setDisabled]=useState(initialDisabled)

///Helpers/////

const postNewUser = (newUser) => {
    axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => {
    setUser(newUser)
    })
    .catch((err) => {
      console.log(err);
    });
  }

    const onSubmit = (evt) => {
        evt.preventDefault();
       postNewUser(formValues)
      };

      const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse);
      };  

      ///Event Handlers////
const inputChange = (name, value) =>{
    yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setFormErrors({
            ...formErrors,
            [name]: "",
          })})
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })});
       setFormValues({
        ...formValues,
        [name]: value, 
      });
    };

    ///Use Effects///

useEffect(()=>{
    schema.isValid(formValues).then((valid) =>{
      setDisabled(!valid)
    })
  },[formValues])


    return (
        <form className='form container' onSubmit={onSubmit}>
            {/* {errors} */}
            <div className='form-group submit'>
                <h2>Add New User</h2>
                <button id='submitBtn' disabled={disabled}>submit</button>
                <div className='errors'>
                    <div>{formErrors.name}</div>
                    <div>{formErrors.email}</div>
                    <div>{formErrors.password}</div>
                </div>
            </div>
            {/* {form inputs} */}
            <div className='form-group inputs'>
                <label>
                    name 
                    <input
                    value={formValues.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                    />
                </label>
                <label>
                    Email 
                    <input
                    value={formValues.email}
                    onChange={onChange}
                    name='email'
                    type='email'
                    />
                </label>
                <label>
                    Password
                    <input
                    value={formValues.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
            </div>
            {/* {checkbox} */}
            <div className='form-group checkbox'>
                <label>
                Terms Of Service 
                <input
                type='checkbox'
                name='termsOfService'
                checked={formValues.termsOfService}
                onChange={onChange}
                />
                </label>                
            </div>
        </form>
    )
}

export default Form
