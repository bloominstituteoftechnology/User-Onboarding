import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import { Users } from './Users.js';

function Form() {
  ////////////////// Creates a default state for formState //////////////////
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    tos: false,
  };

  ////////////////// Creates a schema using yup to provide base requirements for the form //////////////////
  const formSchema = yup.object().shape({
    name: yup.string().required('name is a required field'),
    email: yup
    .string()
    .email()
    .required('must be an actual email'),
    password: yup
    .string()
    .required('please provide a valid password'),
    tos: yup.boolean().oneOf([true], 'agree to the TOS'),
  });



  ////////////////// Creates a state to hold error messages //////////////////
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    tos: '',
  });

  ////////////////// Creates a state that will hold the values of the form //////////////////
  const [formState, setFormState] = useState(initialFormState);

  ////////////////// Creates a state that will hold the user info that is sent back from the POST request //////////////////
  const [user, setUser] = useState([]);

  const validate = (e) => {
    let value =
    e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    yup.reach(formSchema, e.target.name)
    .validate(value)
    .then(valid => {
      setErrors({
        ...errors, [e.target.name]: '',
      });
    })
    .catch(err => {
      setErrors({
        ...errors,
        [e.target.name]: err.errors[0],
      });
    });
  };

  const inputChange = e => {
    e.persist();
    validate(e);
    let value =
    e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormState({ ...formState, [e.target.name]: value });
  };

  ////////////////// Creates a function that does a couple things //////////////////
  ////////////////// 1. uses preventDefault() to prevent the default action the element it's attached to //////////////////
  ////////////////// 2. generates a post request that sends the formState //////////////////
  ////////////////// 3. on success it will take the results and apply it to the user state using setUser([...copyArray, store results]);


  ////////////////// useEffect fires each time the state inside the brackets is changed. formState is also being ran against formSchema, it will return false until all requirements in the schema are met   //////////////////
  const formSubmit = e => {
    e.preventDefault();
    axios.post('https://reqres.in/api/users', formState)
    .then(results => {
      setUser([...user, results.data]);
    })
    .catch(err => alert('there is an error in formSubmit'));
  };

  useEffect(() => {
    formSchema.isValid(formState)
    .then(valid => {

    })
    .catch(err => console.log(err))
  }, [formState]);


  // BONUS!: state for whether our button should be disabled or not.
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // Everytime formState changes, check to see if it passes verification.
  // If it does, then enable the submit button, otherwise disable
  useEffect(() => {
    formSchema.isValid(formState).then(valid => {
      setButtonDisabled(!valid);
    });
  }, [formState]);


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
            {errors.tos.length < 0 ? <p className="text-danger">{errors.tos}</p> : null}
            <input
              id='tos'
              name='tos'
              type='checkbox'
              checked={formState.tos}
              onChange={inputChange}
              className='mt-5 mx-1' />

          </label>

          <label htmlFor='submit' className='mx-1'>
            <div>
              <input
                id='submit'
                name='submit'
                type='submit'
                disabled={buttonDisabled}
                className='btn btn-primary'
                />
            </div>
          </label>
        </div>

      </form>
      <Users user={user}/>
    </div>
  );
}

export default Form;
