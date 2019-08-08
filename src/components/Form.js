import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        if (status) {
          setUsers([...users, status]);
        }
      }, [status]);

    return (
        <div className="userForm">
            <h1>Welcome!</h1>
            <Form>
                <Field type="text" name="username" placeholder="Enter Username"/>
                {touched.username && errors.username && (
                    <p className="error">{errors.username}</p>
                )}

                <Field type="text" name="email" placeholder="Enter Email"/>
                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field type="password" name="password" placeholder="Enter Secure Password"/>
                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}

                <label className="checkboxContainer">
                    Accept Terms of Service
                    <Field type="checkbox" name="tos" />
                    <span className="checkmark" />
                </label>

                
                <button type="submit">Submit!</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email, password, tos }) {
        return {
            username: username || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
      },
      validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter a username'),
        email: Yup.string().required('Please enter an email'),
        password: Yup.string().required('Please enter a password'),
        tos: Yup.string().required('Please accept our Terms of Service')
      }),
      
      handleSubmit(values, { setStatus }) {
        axios
          .post('https://reqres.in/api/users/', values)
          .then(res => {
            setStatus(res.data);
          })
          .catch(err => console.log(err.response));
      }


})(UserForm);

export default FormikUserForm;