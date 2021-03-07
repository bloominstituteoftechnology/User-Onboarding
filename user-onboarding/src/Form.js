import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        terms: false,

    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: '',
        terms: '',
    })  

    const [users, setUsers] = useState([])

    const [btnDisabled, setBtnDisabled] = useState("")

    const formSchema = yup.object().shape({
        name: yup.string().trim().required('The name is a required field.'),
        password: yup
            .string()
            .trim()
            .required('The password filed is required')
            .min(8, 'Password must be at least 8 characters long')
            .max(20, 'The password character limit is 20'),
        email: yup.string().trim().email('The email should be a valid address.').required('A valid email is required.'),
        terms: yup.boolean().oneOf([true]),
    });

    useEffect(()=>{
       console.log('The form has changed.')
       formSchema.isValid(formState).then((valid)=>{
           setBtnDisabled(!valid);
       });   

    }, [formState]);


    function validateChange(e) {
        yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(()=> {
            setErrors({ ...errors, [e.target.name]: '' });
        })
        .catch((err) => {
           setErrors({ ...errors, [e.target.name]: err.errors[0] }); 
        });
    } 

    function inputChange(e){
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
             e.target.type === 'checkbox'? e.target.checked : e.target.value,

        };
        validateChange(e);
        setFormState(newFormData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', formState)
        .then(res => {
            setUsers({ ...users, [users]: res.data })
            console.log('done', users);
            setFormState({
                name: '',
                email: '',
                password: '',
                terms: false,
            });
        
        })
        .catch(err => {
            console.log(err.response);
        });
    };




    return(
        <div>
            <form onSubmit = {onSubmit}>
                <label htmlFor='name'>
                    Name
                    <input
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter your name'
                      value={formState.name}
                      onChange={inputChange}
                    />
                </label>
                <label htmlFor='email'>
                    Email
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Enter your email'
                      value={formState.email}
                      onChange={inputChange}
                    />
                </label>
                <label htmlFor='password'>
                    Password
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Enter your password'
                      value={formState.password}
                      onChange={inputChange}
                    />
                </label>
                <div>
                    <label htmlFor='terms'>
                        <h4> Do you accept the Terms of Service? </h4>
                        <input
                          type='checkbox'
                          name='terms'
                          id='terms'
                          checked={formState.terms}
                          onChange={inputChange}
                        />
                    </label>
                </div>
                <div>
                   <p> {errors.name} </p> 
                   <p> {errors.email} </p> 
                   <p> {errors.password} </p> 
                   <p> {errors.terms} </p> 
                </div>
                <div>
                    <button disabled = {btnDisabled} type='submit'>
                         Submit 
                    </button>
                </div>
                <div>
                   <pre> {JSON.stringify(users)} </pre> 
                </div>
            </form>
        </div>
    )
}

export default Form;
