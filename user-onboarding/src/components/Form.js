import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"

function OnboardingForm({ values, errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field type="text" name="username" placeholder="Username"/>
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email"/>
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password"/>
      </div>
      <label>
        <Field type="checkbox" name="tos" value={values.tos}/>
        Accept TOS
      </label>
      <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikOnboardingForm = withFormik({
  mapPropsToValues({username, email, password, tos, users}) {
    return {
      username: username || "",
      email: email || "",
      password: password || "",
      tos: tos || false
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
    .required("Who are you?"),
    email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
    password: Yup.string()
    .min(8, "Password must be 8 characters or longer")
    .required("Password is required")
  }),
  handleSubmit(values, { props, resetForm, setErrors, setSubmitting } ) {
    console.log(values);
    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        props.setUsers([...props.users, res.data])
        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
        setSubmitting(false);
      })
  }
})(OnboardingForm);

export default FormikOnboardingForm;