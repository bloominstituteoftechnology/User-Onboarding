import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';

function UserForm({ values, errors, touched, status}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div>
            <Form>
                <label htmlFor='name'>
                    Name
                    <Field 
                        id='name' 
                        type='text' 
                        name='name' 
                        placeholder='Enter name'
                    />
                </label>
                <label htmlFor='email'>
                    Email 
                    <Field 
                        id='email' 
                        type='email' 
                        name='email' 
                        placeholder='Enter email'
                    />
                    {touched.email && errors.email && (
                        <p>{errors.email}</p>
                    )}
                </label>
                <label htmlFor='password'>
                    Password
                    <Field 
                        id='password' 
                        type='password' 
                        name='password' 
                        placeholder='Enter password'
                    />
                    {touched.password && errors.password && (
                        <p>{errors.password}</p>
                    )}
                </label>
                <label htmlFor='terms'>
                    Terms of Service
                    <Field 
                        id='terms' 
                        type='checkbox' 
                        name='terms' 
                        checked={values.terms}
                    />
                </label>
                <button type='submit'>Submit</button>
            </Form>
            {users.map(newUser => {
                return (
                    <div>
                        <h3>Name: {newUser.name}</h3>
                        <h3>Email: {newUser.email}</h3>
                    </div>
                );
            })}
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || '',
        };
    },

    validationSchema: Yup.object().shape({
        email: Yup.string().required("Please add your email"),
        password: Yup.string().required("A password is required")
    }),

    handleSubmit(values, { setStatus, resetForm }) {
        axios
            .post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default FormikUserForm;