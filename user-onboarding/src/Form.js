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
        {errors.person && <p>{errors.person}</p>}


        <Field type="text" name="email" placeholder="Email@site.com" />
        {errors.email && <p>{errors.email}</p>}

        <Field type="text" name="password" placeholder="Password" />
        {errors.password && <p>{errors.password}</p>}

        <label className="checkbox-container">
          Read 'Terms of Service'
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>

        <button type="submit">Submit!</button>
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
