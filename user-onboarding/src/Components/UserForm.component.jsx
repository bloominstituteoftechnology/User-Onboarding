import React from 'react';
import './UserForm-styles.css';

import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';

const UserForm = props => {
    const { touched, errors } = props;

    return (
        <Form className='userForm'>
            <label htmlFor="name">Name:</label>
            <Field name="name" placeholder="Enter your name" />
            {touched.name && errors.name ? (
                <span className="error">{errors.name}</span>
            ) : null}
            <label htmlFor="email">Email:</label>
            <Field name="email" placeholder="Please enter an email" />
            {touched.email && errors.email ? (
                <span className="error">{errors.email}</span>
            ) : null}
            <label htmlFor="password">Password:</label>
            <Field name="password" placeholder="Password" />
            {touched.password && errors.password ? (
                <span className="error">{errors.password}</span>
            ) : null}
            <label htmlFor="TOS">Read the TOS?</label>
            <Field name="tos" type="checkbox" />
            {touched.tos && errors.tos ? (
                <span className="error">{errors.tos}</span>
            ) : null}
            <button type="submit">Create Form!</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            tos: props.tos || false
        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string()
            .required('You must enter an email')
            .email('Must enter a valid email'),
        password: Yup.string()
            .required('Please enter a password')
            .min(8, 'Must be a minimum of 8 characters'),
        tos: Yup.bool().required('Please accept the Terms of Service')
    }),
    handleSubmit: (values, formikBag) => {
        console.log("values", values);
        formikBag.props.addForm({
            ...values,
            id: Date.now()
        });
        formikBag.resetForm();
    }
})(UserForm);
