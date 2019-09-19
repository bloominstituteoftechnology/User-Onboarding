import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";

const PeopleForm = ({ errors, touched, values, status }) => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    if (status) {
      setPeople([status]);
    }
  }, [status]);

  return (
    <div className="people-form">
      <h1>Sign Up</h1>
      <Form>
        <Field type="text" name="person" placeholder="Username" />
        {touched.person && errors.person && <p>{errors.person}</p>}


        <Field type="text" name="email" placeholder="Email@site.com" />
        {touched.email && errors.email && <p>{errors.email}</p>}

        <Field type="text" name="password" placeholder="Password" />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <button type="submit">Submit!</button>

        <label className="checkbox-container">
          Agree with 'Terms of Service'
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>
        {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
      </Form>

      {people.map(human => (
        <ul key={human.id}>
          <li>Name: {human.person}</li>
          <li>Email: {human.email}</li>
          <li>Password: {human.password}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ person, email, tos, password }) {
    return {
      email: email || "",
      person: person || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    person: Yup.string().min(6).required("Username must be six characters long."),
    email: Yup.string().email().required("Please input your valid email address."),
    password: Yup.string().min(6).required("Password must be six characters long."),
    tos: Yup.bool()
    .test(
      "Terms of Services",
      "You have to agree with our Terms of Services!",
      value => value === true
    )
    .required()

  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(PeopleForm); 

export default FormikForm;
