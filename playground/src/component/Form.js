import React, { useState, useEffect } from 'react'
import axios from 'axios';
import * as yup from 'yup';
// import Reactstrap from 'reactstrap';

const formSchema = yup.object().shape({
    fName: yup
        .string()
        .min(3, 'Must be a complete first name')
        .required('Name is a requirred field'),
    lName: yup
        .string()
        .min(3, 'Must be a complete last name')
        .required('Last Name is a requirred field'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    password: yup
        .string()
        .min(8, 'passwords must be at least 8 characters long')
        .required('password is required'),
    terms: yup
        .boolean()
        .oneOf([true], 'please agree to terms of use')
})

function Form() {

    const [formState, setFormState] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        terms: false
        // submit: ''
    });

    const [errors, setErrors] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        terms: ''
        // submit: ''
    })

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [post, setPost] = useState({})

    useEffect(() => {
        formSchema
            .isValid(formState)
            .then(valid => {
                setButtonDisabled(!valid);
            })
    }, [formState]);

    useEffect(() => {
        axios
            .post('https://reqres.in/api/users', formState)
            .then(res => {
                setPost(res.data)
                console.log('all data', res)
        })
        .catch(err => {
            console.log(err.response)
        });
    }, [formState]);

    const formSubmit = e => {
        e.preventDefault();
        console.log('submitted!');
    };

    const inputChange = e => {
        e.persist()
        console.log(formState.terms, e.target.checked)
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
        };
        
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid => {
              setErrors({
                  ...errors,
                  [e.target.name]: ''
              });
          })
          .catch(err => {
              setErrors({
                  ...errors,
                  [e.target.name]: err.errors[0]
              });
          });
        setFormState(newFormData);
    }

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor='fName'>
                First Name:
                <input
                  type='text'
                  name='fName'
                  value={formState.fName}
                  onChange={inputChange}
                />
                {errors.fName.length > 0 ? <p className='error'>{errors.fName}</p> : null}
            </label>
            <label htmlFor='lName'>
                Last Name:
                <input
                  type='text'
                  name='lName'
                  value={formState.lName}
                  onChange={inputChange}
                />
                {errors.lName.length > 0 ? <p className='error'>{errors.lName}</p> : null}
            </label>
            <label htmlFor='email'>
                Email:
                <input
                  type='email'
                  name='email'
                  value={formState.email}
                  onChange={inputChange}
                />
                {errors.email.length > 0 ? <p className='error'>{errors.email}</p> : null}
            </label>
            <label htmlFor='website'>
                Terms agreement:
                <input
                  type='checkbox'
                  name='terms'
                  value={formState.terms}
                  onChange={inputChange}
                />
                {/* {errors.terms.length > 0 ? <p className='error'>{errors.terms}</p> : null} */}
            </label>
            <label htmlFor='password'>
                Password:
                <input
                  type='password'
                  name='password'
                  value={formState.password}
                  onChange={inputChange}
                />
                {errors.password.length > 0 ? <p className='error'>{errors.password}</p> : null}
            </label>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    )
}

export default Form;