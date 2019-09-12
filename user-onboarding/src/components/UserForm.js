import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

function UserForm({ status, errors, touched }) {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        if (status) {
            setUsers([...users, status])
        }
    }, [status])
    return (
        <Form>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type='text' name='name' placeholder='Name' />

            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type='email' name='email' placeholder='Email' />

            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type='password' name='password' placeholder='Password' />

            {touched.agreement && errors.agreement && <p>{errors.agreement}</p>}
            <Field type='checkbox' name='agreement' value='false' />
            <button type='submit'>Submit</button>

        {users.map((user) => {
            return <div key={user.name}>Name: {user.name}</div>
        })}

        </Form>
    )
}

export default withFormik({
    mapPropsToValues: ({ name, email, password, agreement }) => {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            agreement: agreement || 'false'
        }
    },
    validationSchema: yup.object().shape({
        name: yup.string().required('Name is required!'),
        email: yup.string().required('Email address is required!'),
        password: yup.string().required('You must create a password!'),
        agreement: yup.boolean().oneOf([true], 'AGREE OR DIE!!!')
    }),
    handleSubmit: (values, { setStatus }) => {
        axios.post(' https://reqres.in/api/users', values)
        .then((res) => {
            setStatus(res.data);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        })
    }
})(UserForm)