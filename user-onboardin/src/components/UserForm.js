import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({values, touched, errors, status}) => {
    const [users, setUsers] = useState ([]);
    useEffect(() => {
        console.log("status has changed!", status);
        status && setUsers(users => [...users, status]);
    }, [status]);
    return (
        <div className='user-form'>
            <Form>
            <br />
            <br />

                <label htmlFor='name'>
                    Name
                    <Field
                        id='name'
                        type='text'
                        name='name'
                        placeholder='name'
                    />
                    {touched.name && errors.name && (
                        <p className='errors'>{errors.name}</p>
                    )}
                </label>
                <br />
                <br />

                <label htmlFor='email'>
                    Email
                    <Field
                        id='email'
                        type='text'
                        name='email'
                        placeholder='email'
                    />
                    {touched.email && errors.email && (
                        <p className="errors">{errors.email}</p>
                    )}
                </label>
                <br />
                <br />

                <label htmlFor='password'>
                    Password
                    <Field
                        id='password'
                        type='text'
                        name='password'
                        placeholder='password'
                    />
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                </label>
                <br />
                <br />

                <label htmlFor='service'>
                    Term of service
                    <Field as='select' className='service' name='service'>
                        <option disabled>Choose an option</option>
                        <option value="basic">basic</option>
                        <option value="great">great</option>
                        <option value="premium">premium</option>
                    </Field>
                </label>
                <br />
                <br />

                <button type="submit">Submit!</button>
            </Form>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            {users.map(user => (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.passward}</li>
                    <li>Term of service: {user.service}</li>
                </ul>
            ))}
        </div>
    )
}
// super component //printer  //paper
const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, service }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            service: service || ''
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required()
    }),
    handleSubmit(values, { setStatus, resetForm }) {
        console.log('submitting', values);
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            console.log('success', response);
            setStatus(response.data);
            resetForm();
        })
    }
})(UserForm);

export default FormikUserForm;