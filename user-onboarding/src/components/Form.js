import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const NewUserForm = ({ errors, touched, values, status }) => {
    const [newUsers, setNewUsers] = useState([]);
    useEffect(() => {
        status && setNewUsers(newUsers => [...newUsers, status]);
    }, [status]);

    return (
        <div className="new-user-form">
            <h1>New User Form</h1>
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                    {touched.name && errors.name && (
                        <p className="error">{errors.name}</p>
                    )}
                <Field type="text" name="email" placeholder="Email" />
                    {touched.email && errors.email && (
                        <p className="error">{errors.email}</p>
                    )}
                <Field type="text" name="password" placeholder="Password" />
                    {touched.password && errors.password && (
                        <p className="error">{errors.password}</p>
                    )}
                <label className="checkbox-container">
                  I have read the Terms of Service:
                  <Field
                    type="checkbox"
                    name="termsOfService"
                    checked={values.termsOfService}
                  />
                  <span className="checkmark" />
                </label>
                <button type="submit">Submit</button>
            </Form>
        

        {newUsers.map(newUser => (
            <div key={newUser.id}>
                <p>Name: {newUser.name}</p>
                <p>Email: {newUser.email}</p>
                <p>Password: {newUser.password}</p>
            </div>
        ))}
        </div>
    )
}

// Higher Order Component with Formik
const FormikNewUserForm = withFormik({
    mapPropsToValues({ name, email, password, termsOfService }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            termsOfService: termsOfService || false
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("You silly!!!"),
        email: Yup.string().required(),
        password: Yup.string()
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users/", values)
            .then(res => {
                setStatus(res.data);
                console.log(res);
            })
            .catch(err => console.log(err.response));
    }
})(NewUserForm);

export default FormikNewUserForm;