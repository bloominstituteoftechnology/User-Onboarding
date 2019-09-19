import React from "react";
import { Formik, Form, Field } from "formik";

const FormByFormik = () => {
  return (
    <Formik>
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
        <button>Submit</button>
      </Form>
    </Formik>
  );
};

export default FormByFormik;
