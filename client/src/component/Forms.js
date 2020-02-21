import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import './Forms.css';
import * as Yup from 'yup';
import axios from 'axios';

const Forms = ({ values, touched, errors, status }) => {
  const [user, setUser] = useState({});
  // console.log('submitting', values.isSubmitting);
  useEffect(() => {
    status && setUser(status);
  }, [status]);
  // console.log(errors);
  // console.log(touched);

  return (
    <div className='container'>
      <div className='signup'>
        <Form>
          <Field type='text' name='name' placeholder='Name:' />
          {touched.name && errors.name && (
            <p className='errors'>{errors.name}</p>
          )}
          <Field type='email' name='email' placeholder='Email:' />
          {touched.email && errors.email && (
            <p className='errors'>{errors.email}</p>
          )}
          <Field type='password' name='password' placeholder='Password:' />
          {touched.password && errors.password && (
            <p className='errors'>{errors.password}</p>
          )}
          <Field
            type='checkbox'
            checked={values.TermsOfService}
            name='TermsOfService'
          />
          <button type='submit' disabled={values.isSubmitting}>
            {values.isSubmitting ? 'Submitting' : 'Submit'}
          </button>
        </Form>
      </div>
      <div className='whysign'>
        <h3> Welcome! {user.name} Your signed Up </h3>
        {
          <ul key={user.id}>
            <li>Name: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        }
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: props => ({
    name: '',
    email: '',
    password: '',
    TermsOfService: false
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Name is Required!'),
    email: Yup.string()
      .min(5, 'Too Short!')
      .max(70, 'Too Long!')
      .email('Invalid email')
      .required('Email is Required!'),
    password: Yup.string()
      .min(6, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Password is Required')
  }),
  handleSubmit: (values, { resetForm, setStatus }) => {
    axios
      .post('https://reqres.in/api/users', values)
      .then(response => {
        console.log('value', values);
        resetForm();
        setStatus(response.data);
      })
      .catch(err => console.log(err.response));
  }
})(Forms);
