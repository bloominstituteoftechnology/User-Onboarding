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

    const ValidationSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(5, 'Common Add More')
            .max(10, 'Ten Is The Maximum')
            .required('Required'),
        termsAndCondition: Yup.boolean()
            .required('Required')

    });

    const validate = (formValues) => {
        const errors = {};
        // take a look inside those forms values
        // and add errors if we don't like what we see
        // return the errors object
        return errors;
    };

    return (
        <Formik
            validationSchema={ValidationSchema}
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
                  <Field name='termsAndCondition' type='checkbox' placeholder='Terms and Condition' />
                                <ErrorMessage name='termsAndCondition' component='div' />
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


