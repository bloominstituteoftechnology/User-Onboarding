import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

const FormByFormik = () => {
    const validationSchema = yup.object().shape({
        name: yup.string().required(),
        email: yup.string().email().required(),
        password: yup.string().required(),
    })

    

  return (
    <Formik validationSchema={validationSchema} render={(props) =>{
        return (
            <Form>
        <label>
          Name
          <Field name="name" placeholder="name"></Field>
        </label>
        <label>
          Email<Field name="email" placeholder="email"></Field>
        </label>
        <label>
          Password<Field name="password" placeholder="password"></Field>
        </label>
        <Field name="checkbox" type="checkbox"></Field>
        <button type="button">Submit</button>
      </Form>
        )
    }}>
      
    </Formik>
  );
};

export default FormByFormik;
