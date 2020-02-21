import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function Input({values, errors, touched}) {
    
    return (
        <Form>
        <div>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type='text' name='name' placeholder='User Name' />
        </div>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type='email' name='email' placeholder='User Email' />
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <Field type='password' name='password' placeholder='Password' />
        </div>
            <label>
                <Field type='checkbox' name='terms' checked={values.terms} />
                I Accept The Terms of Service.
            </label>
        <button type='submit'>Submit</button>
        </Form>
    )
}

export const UserForm = withFormik({
    mapPropsToValues({name, email, password, terms}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            terms: terms || false
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('User Name is Required'),
        email: Yup.string()
            .email('Email not Valid')
            .required('Email is Required'),
        password: Yup.string()
            .min(8, 'Password Must Be 8 Characters or Longer')
            .required('Password is Required')
    }),

    handleSubmit(values, {props, resetForm}) {
       console.log(props)
        axios
            .post(`https://reqres.in/api/users`, values)
            .then(response => {
                props.updateUsers(response.data)
                resetForm()
            })
            .catch(error => console.log(error))
    }
    
})(Input)




