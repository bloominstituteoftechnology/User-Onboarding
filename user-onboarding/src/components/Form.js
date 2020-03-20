import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = props => {
    console.log('form props', props)
    const { touched, errors } = props

    return (
        <Form>
            <label htmlFor='name'>Name: </label>
            <Field name='name' placeholder='Enter your name' />
            {touched.name && errors.name ? (<span>{errors.name}</span>) : null}
            <label htmlFor='name'>Email: </label>
            <Field name='email' placeholder='Enter your e-mail'/>
            {touched.email && errors.email ? (<span>{errors.email}</span>) : null}
            <label htmlFor='name'>Password: </label>
            <Field name='password' placeholder='Create a password' />
            {touched.password && errors.password ? (<span>{errors.password}</span>) : null}
            <label htmlFor='tos'>Have you read Terms of Service?</label>
            <Field type='checkbox' name='tos' />
            {touched.tos && errors.tos ? (<span>{errors.tos}</span>) : null}
            <button type='submit'>Create User</button>
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: props => {
        return {
            name: props.name || '',
            email: props.email || '',
            password: props.password || '',
            tos: props.tos || false

        };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please enter your name'),
        email: Yup.string().required('Please enter your email').email('Please enter a VALID e-mail address'),
        password: Yup.string().required('Please create a password').min(6, "Your password must be 6 characters long"),
        tos: Yup.boolean().oneOf([true], "You must read Terms of Service")
    }),
    handleSubmit: (values, formikBag) => {
        formikBag.props.addUser({
            ...values
        });
        formikBag.resetForm();
    }
})(UserForm);