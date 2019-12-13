import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import styled from "styled-components";

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
`

function UserForm({ values, errors, touched, status}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        status && setUsers(users => [...users, status]);
    }, [status]);

    return (
        <div>
            <Form>
                <WrapperDiv>
                    <label class='label' htmlFor='name'>
                        Name
                        <Field 
                            id='name' 
                            type='text' 
                            name='name' 
                            placeholder='Enter name'
                            className="field"
                        />
                    </label>
                    <label class='label' htmlFor='email'>
                        Email 
                        <Field 
                            id='email' 
                            type='email' 
                            name='email' 
                            placeholder='Enter email'
                            className="field"
                        />
                        {touched.email && errors.email && (
                            <p>{errors.email}</p>
                        )}
                    </label>
                    <label class='label' htmlFor='password'>
                        Password
                        <Field 
                            id='password' 
                            type='password' 
                            name='password' 
                            placeholder='Enter password'
                            className="field"
                        />
                        {touched.password && errors.password && (
                            <p>{errors.password}</p>
                        )}
                    </label>
                    <label class='label' htmlFor='terms'>
                        Terms of Service
                        <Field 
                            id='terms' 
                            type='checkbox' 
                            name='terms' 
                            checked={values.terms}
                            className="field"
                        />
                    </label>
                    <button className='submit' type='submit'>Submit</button>
                </WrapperDiv>
            </Form>
            {users.map(newUser => {
                return (
                    <div>
                        <h3 class='label'>Name: {newUser.name}</h3>
                        <h3 class='label'>Email: {newUser.email}</h3>
                        <hr></hr>
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