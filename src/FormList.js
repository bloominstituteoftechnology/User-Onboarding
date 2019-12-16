import React, { useState, useEffect } from "react";
import * as Yup from 'yup';
import axios from 'axios';
import { withFormik, Form, Field } from "formik";


const UserForm = ({ values, errors, touched, status }) => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      console.log('status has changed', status);
      status && setUsers(users => [...users, status]);
   }, [status]);

   return (
      <div className='user-form'>
         <Form>
            <Field type='text' name='name' placeholder='enter name' />
            {touched.name && errors.name && (
               <p className='errors'>{errors.name}</p>
            )}

            <Field type='email' name='email' placeholder='enter email' />
            {touched.email && errors.email && (
               <p className='errors'>{errors.email}</p>
            )}

            <Field type='password' name='password' placeholder='enter password' />
            {touched.password && errors.password && (
               <p className='errors'>{errors.password}</p>
            )}

            <label className='checkbox-container'>
               Terms of Service
               
               <Field type='checkbox' name='tos' checked={values.tos} />
               {touched.tos && errors.tos && (
                  <p className='errors'>{errors.tos}</p>
               )}

               <span className='checkmark' />
            </label>

            <button type='submit'>Submit</button>
         </Form>

         {users.map(data => {
            return (
               <ul key={data.name}>
                  <li>{data.name}</li>
                  <li>{data.password}</li>
                  <li>{data.email}</li>
                  <li>{data.tos}</li>
               </ul>
            );
         })}
      </div>
   );
};

const FormikUserForm = withFormik({
   mapPropsToValues(props) {
      return {
         name: props.name || '',
         password: props.password || '',
         email: props.email || '',
         tos: props.tos || false,
      };
   },

   validationSchema: Yup.object().shape({
      name: Yup
         .string()
         .required('Your name is required'),
      email: Yup
         .string()
         .required('Email input required'),
      password: Yup
         .string()
         .min(6, 'Password must be 6 characters or longer')
         .required('A password is required'),
      tos: Yup
         .bool()
         .oneOf([true], 'You must accept the terms of service to continue')
         .required()
   }),

   handleSubmit(values, { setStatus, resetForm }) {
      console.log('submitting', values);
      axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        console.log('success', res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log('There was an error', err.response));
   },
})(UserForm);

export default FormikUserForm;