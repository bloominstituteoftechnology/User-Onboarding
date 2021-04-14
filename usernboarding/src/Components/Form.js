import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

const Form = () => {
  // form schema
  const formSchema = Yup.object().shape({
    name: Yup.string().required('Name is required.'),
    email: Yup.string()
      .email('Must provide a valid email address.')
      .required('Email is required.'),
    password: Yup.string()
      .required('Password is required.')
      .min(6, 'Passwords must contain at least 6 characters.'),
    terms: Yup.boolean().oneOf(
      [true],
      'You must accept Terms of Service to continue.'
    ),
  });

  const [user, setUser] = useState([]);

  //  event handler for form submission
  const formSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
    axios
      .post('https://reqres.in/api/users', formState)
      .then((res) => {
        setFormState(res.data);
        console.log('success', res);
      })
      .catch((err) => {
        console.log(err.response);
        setErrors(err.response);
      });
  };

  // create form values state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  // create error messages state
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    terms: '',
  }); // Define form elements

  //create submission button state
  const [buttonDisabled, setButtonDisabled] = useState();

  // if form fails validation, submission button disabled
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [errors]);

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor='nameInput'>
        Name{' '}
        <input
          id='nameInput'
          type='text'
          name='nameInput'
          placeholder='Name'
          onChange={handleChange}
        />{' '}
      </label>{' '}
      <label htmlFor='emailInput'>
        {' '}
        <input
          id='emailInput'
          type='email'
          name='email'
          placeholder='Email'
        />{' '}
      </label>{' '}
      <label htmlFor='current-password'>
        {' '}
        Password{' '}
        <input
          type='password'
          name='current-password'
          placeholder='Password'
        />{' '}
      </label>{' '}
      <label htmlFor='termsInput'>
        {' '}
        Do you agree to our term of service ?{' '}
        <input id='termsInput' type='checkbox' name='terms' />{' '}
      </label>{' '}
      <button> Submit </button>{' '}
    </form>
  );
};

export default Form;
