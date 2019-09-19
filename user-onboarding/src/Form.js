import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

const newUserForm = {
    name: '',
    email: '',
    password: '',
    checkbox: '',
};




function UserForm() {

    const onSubmit = () => { }

    const validate = (formValues) => {
        const errors = {};
        // take a look inside those forms values
        // and add errors if we don't like what we see
        // return the errors object
        return errors;
    };

    return (
        <Formik
            validate={validate}
            initialValues={newUserForm}
            onSubmit={onSubmit}
            render={props => {
                return (
                    // we will use pre-baked components
                    // supplied by formik lib (like Formik)
                    <Form>
                        <div>
                            <label>
                                Name
                  <Field name='name' type='text' placeholder='Name' />
                                <ErrorMessage name='name' component='div' />
                            </label>
                        </div>


                        <div>
                            <label>
                                Email
                  <Field name='email' type='email' placeholder='Email' />
                                <ErrorMessage name='email' component='div' />
                            </label>
                        </div>


                        <div>
                            <label>
                                Password
                  <Field name='paswword' type='password' placeholder='Password' />
                                <ErrorMessage name='password' component='div' />
                            </label>
                        </div>

                        <div>
                            <label>
                                Terms and Condition
                  <Field name='terms-and-condition' type='checkbox' placeholder='Terms and Condition' />
                                <ErrorMessage name='terms-and-condition' component='div' />
                            </label>
                        </div>





                        <button type='submit'>Submit</button>
                    </Form>
                );
            }}
        />
    );
}


export default UserForm


