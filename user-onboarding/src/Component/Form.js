import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    checkbox: yup.bool()
    .test(
      'consent',
      'You have to agree with our Terms and Conditions!',
      value => value === true
    )
    .required(
      'You have to agree with our Terms and Conditions!'
    ),
})

const FormByFormik = (props) => {
  const {onSubmit, initialUser} = props;
   
  return (
    <Formik onSubmit={onSubmit} initialValues={initialUser} validationSchema={validationSchema} render={(props) =>{
        return (
            <Form>
        <label>
          Name
          <Field name="name" placeholder="name"></Field>
          <ErrorMessage name='name' component='div' />
        </label>
        <label>
          Email<Field name="email" placeholder="email"></Field>
          <ErrorMessage name='email' component='div' />
        </label>
        <label>
          Password<Field name="password" placeholder="password"></Field>
          <ErrorMessage name='password' component='div' />
        </label>
        <Field name="checkbox" type="checkbox"></Field>
        <ErrorMessage name='checkbox' component='div' />
        <button type="submit">Submit</button>
      </Form>
        )
    }}>
      
    </Formik>
  );
};

export default FormByFormik;
