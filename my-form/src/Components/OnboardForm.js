import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const OnboardForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status)
        status && setUsers( users => 
            [...users, status])
    },[status]);
    
    return (
    <div className="onboard-form">
      <Form>
        <label htmlFor="name">Enter Name:</label>
        <Field id="name" type="text" name="name" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <label html for="email">
          Email:
        </label>
        <Field id="email" type="text" name="email" />
        {touched.email && errors.email && (
          <p className="errors">{errors.email}</p>
        )}
        <label html for="password">
          Password:
        </label>
        <Field id="password" type="text" name="password" />
        <label className="checkbox-container" html for="terms-of-service">
          Terms of Service
          <Field
            id="checkbox"
            type="checkbox"
            name="terms"
            check={values.terms}
          />
        </label>

        <button type="submit">Submit!</button>
      </Form>
      {users.map(user => (
	  <ul key={user.id}>
	    <li>Name: {user.name}</li>
	    <li>Email: {user.email}</li>
	    <li>Password: {user.password}</li>
	  </ul>
	))}
    </div>
  );
};

const FormikOnboardForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      terms: terms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("What's your name?"),
    email: Yup.string()
      .email()
      .required("What's your email?")
  }),
  handleSubmit(values, {setStatus}) {
    console.log("submitting", values);
    axios.post(
        "https://reqres.in/api/users", values
        )
        .then(res => {
            console.log("succes", res)
            setStatus(res.data)
        })
        .catch(err => console.log(err.response));
  }
})(OnboardForm);

export default FormikOnboardForm;
