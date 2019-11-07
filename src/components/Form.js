import React from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = ({ values }) => {
    return (
      <div className="user-form">
        <Form>
            <Field
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
            />
            <Field
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            />
            <Field
            type="text"
            name="password"
            placeholder="password"
            value={values.password}
            />
            <Field
            type="checkbox"
            name="terms"
            placeholder="Terms of Service"
            value={values.terms}
            />
            <button type="submit">Submit</button>
        </Form>
      </div>
    );
};

  const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
      return {
        name: name || "",
        email: email || "",
        password: password || "",
        terms: terms || ""
      };
    },
    
    validationSchema: Yup.object().shape({
        name: Yup.string().required("What is your name?"),
        email: Yup.string().required("What is your email?"),
        password: Yup.string().required("What is your password?"),
        terms: Yup.boolean()
    }),

    handleSubmit(values) {
     axios
        .post("https://reqres.in/api/users/", values)
        .then(response => { console.log(response) })
        .catch(error => { console.log(error) })
    }
  })(UserForm);

console.log(FormikUserForm);    
export default FormikUserForm;