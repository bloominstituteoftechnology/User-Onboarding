import React, { useState } from 'react';
import * as yup from 'yup';

function Form() {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    tos: false,
  };

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    tos: '',
  });
  const [formState, setFormState] = useState(initialFormState);

  const formSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  const inputChange = e => {
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
    </div>
  );
}

export default Form;
