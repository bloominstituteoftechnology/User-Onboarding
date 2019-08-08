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
                    <p classname="error">{errors.username}</p>
                )}

                <Field type="text" name="email" placeholder="Enter Email"/>
                {touched.email && errors.email && (
                    <p classname="error">{errors.email}</p>
                )}
                <Field type="password" name="password" placeholder="Enter Secure Password"/>
                {touched.password && errors.password && (
                    <p classname="error">{errors.password}</p>
                )}


                <Field type="checkbox" name="tos" />


                <Field type="text" name="tos" />
                {touched.email && errors.email && (
                    <p classname="error">{errors.email}</p>
                )}
                
                <button type="submit">Submit!</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ username, email }) {
        return {
            username: username || '',
            email: email || ''
        };
      },



})(UserForm);

export default FormikUserForm;