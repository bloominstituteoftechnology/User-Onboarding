import React, { useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Users } from './Users.js';

function Form() {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    tos: false,
  };

  const formSchema = yup.object().shape({
    name: yup.string().required('name is a required field'),
    email: yup
    .string()
    .email()
    .required('must be an actual email'),
    password: yup
    .string()
    .required('please provide a valid password'),
    tos: yup.boolean().oneOf([true], 'please agree to terms of service'),
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    tos: '',
  });

  const [formState, setFormState] = useState(initialFormState);
  const [user, setUser] = useState([]);

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
    axios.post('https://reqres.in/api/users', formState)
    .then(results => setUser([...user, results.data]))
    .catch(err => console.log(err));
  };

  const validate = (e) => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.value)
    .then(valid => {
      setErrors({
        ...errors, [e.target.name]: '',
      });
    })
    .catch(err => {
      console.log(err.errors);
      setErrors({
        ...errors, [e.target.name]: err.errors[0],
      });
    });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    console.log('input changed!', e.target.checked);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  return (
    <div className='text-center'>
      <form onSubmit={formSubmit}>
        <label htmlFor='name' className='mx-1'>
          Name:
          <input
            id='name'
            name='name'
            type='text'
            value={formState.name}
            onChange={inputChange}
            placeholder='name'
            className='form-control mx-1' />
          {errors.name.length > 0 ? <p className='text-danger'>{errors.name}</p> : null}
        </label>

        <label htmlFor='email' className='mx-1'>
          Email:
          <input
            id='email'
            name='email'
            type='text'
            value={formState.email}
            onChange={inputChange}
            placeholder='email'
            className='form-control mx-1' />
          {errors.email.length > 0 ? <p className='text-danger'>{errors.email}</p> : null}
        </label>

        <label htmlFor='password' className='mx-1'>
          Password:
          <input
            id='password'
            name='password'
            type='password'
            value={formState.password}
            onChange={inputChange}
            placeholder='password'
            className='form-control mx-1' />
          {errors.password.length > 5 ? <p className='text-danger'>{errors.password}</p> : null}
        </label>

        <div>
          <label htmlFor='tos' className='mx-1'>
            Terms of Service
            <input
              id='tos'
              name='tos'
              type='checkbox'
              checked={formState.tos}
              onChange={inputChange}
              className='mt-5 mx-1' />
          </label>

          <label htmlFor='submit' className='mx-1'>
            <input
              id='submit'
              name='submit'
              type='submit'
              className='btn btn-primary' />
          </label>
        </div>

      </form>
      <Users user={user}/>
    </div>
  );
}

export default Form;
