import React, { useState, useEffect } from 'react';
import UserList from './UserList.js';
import * as yup from 'yup';
import axios from 'axios';

export default function Form() {
  const initialFormState =
  {
    name: '',
    email: '',
    password: '',
    terms: false,
  };

  const formSchema = yup.object().shape({
    name: yup.string().required('please provide a real name'),
    email: yup.string().email().required('please provide a valid email'),
    password: yup.string().required('please provide a valid password'),
    terms: yup.boolean().oneOf([true], 'please agree to the terms of use'),
  });

  const [formState, setFormState] = useState(initialFormState);
  const [errorState, setErrorState] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
  });
    const [buttonDisabled, setButtonDisabled] = useState(true);

  // - [x] Set up a state property called `users` that is initialized with an empty array
  // - [ ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
  // - [ ] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.
  const [users, setUsers] = useState([]);

  const inputChange = e => {
    e.persist();
    validate(e);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value; //if the name comes back as true(as 'terms') it's going to return the checked value (true/false), if it comes back as anything other than 'terms' it's going to return the value of the target
    setFormState({ ...formState, [e.target.name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log('form has been submitted')
    setFormState(formState);
    axios.post('https://reqres.in/api/users', formState)
    .then(data => {
      setUsers([...users, data.data]);
    })
    .catch(err => console.log(err));
  };

  const validate = e => {
    yup.reach(formSchema, e.target.name)
    .validate(e.target.type === 'checkbox' ? e.target.checked : e.target.value)
    .then(valid => {
      setErrorState({
        ...errorState,
        [e.target.name]: '',
      });
    })
    .catch(err => {
      setErrorState({
        ...errorState,
        [e.target.name]: err.errors[0],
      });
    });
  };

  // BONUS!: state for whether our button should be disabled or not.

  // Everytime formState changes, check to see if it passes verification.
  // If it does, then enable the submit button, otherwise disable
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [formState]);

  return (
    <div style={{
        margin: '5rem 40% 0',
      }}
      className='form-row'>
      <form className='mt-5 d-flex flex-column m-5 form-group' onSubmit={onSubmit}>

        <label htmlFor='name'>
          Name:
          <input
            className='form-control'
            id='name'
            placeholder='please enter a name'
            name='name'
            type='input'
            onChange={inputChange}
            value={formState.name}
            />
          {errorState.name.length > 0 ? <p className='text-danger'>{errorState.name}</p> : null}
        </label>

        <label htmlFor='email' className='mt-3'>
          Email:
          <input
            className='form-control'
            id='email'
            placeholder='please enter an email'
            name='email'
            type='input'
            onChange={inputChange}
            value={formState.email}
            />
          {errorState.email.length > 0 ? <p className='text-danger'>{errorState.email}</p> : null}
        </label>

        <label htmlFor='password' className='mt-3'>
          Password:
          <input
            className='form-control'
            id='password'
            placeholder='please enter a password'
            name='password'
            type='password'
            onChange={inputChange}
            value={formState.password}
            autoComplete='new-password'
            />
          {errorState.password.length > 0 ? <p className='text-danger'>{errorState.password}</p> : null}
        </label>

        <label htmlFor='terms' className='mt-3 text-center'>
          Please Accept ToS
          <input
            className='form-check-input'
            id='terms'
            name='terms'
            type='checkbox'
            onChange={inputChange}
            checked={formState.terms}
            />
        </label>

        <label className='mt-3 text-center'>
          <input
            className='btn btn-primary'
            type='submit'
            disabled={buttonDisabled}
            />
        </label>

      </form>
      <UserList newUser={users} />
    </div>
  );
};
