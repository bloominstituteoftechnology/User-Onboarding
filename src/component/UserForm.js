import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({values, errors, touched, status}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('status has changed!', status);
    }, [status]);
    return(
        <div>
            <Form>
                <label htmlFor="name">
                    Name
                <Field
                id="name"
                type="text"
                name="name"
                placeholder="name"
                />
                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}
            </label>
                 <label htmlFor="email">
                     Email
                 <Field
                 id='email'
                 type='email'
                 name='email'
                 placeholder='email'
            />
            {touched.email && errors.email && (
                <p>{errors.email} </p>
            )}
            </label>
                <label htmlFor="password">
                    password
                    <Field 
                    id='password'
                    type='text'
                    name= 'text'
                    placeholder='password'
                />
                {touched.password && errors.password && (
                    <p>{errors.password}</p>
                )}
                </label>
                    <label>
                        Terms of Service 
                        <Field
                        type='checkbox'
                        name= 'TermsOfService'
                        checked={values.TermsOfService}
                        />
                    </label>
             <button type="submit">Submit!</button>
            </Form>
            {users.map(user => {
                return (
                    <ul key={user.id}>
                        <li>Name: {user.name}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                );
            })}
        </div>
    );

};

const FormikUserForm = withFormik({
    mapPropsToValues(props){
        return{
            name: props.name || "",
            email: props.email || "",
            password: props.password || "",
            TermsOfService: props.TermsOfService || false,
         };
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required(),
    }),
    handleSubmit(values, { setStatus, resetForm}){
        console.log("submitting", values);
        axios
            .post("https://reqres.in/", values)
            .then(res => {
                console.log('sucess', res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(UserForm);

export default FormikUserForm;
