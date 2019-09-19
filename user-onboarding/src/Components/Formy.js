import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormyForm = ({ touched, status, errors, values }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);
  return (
    <div className="formy-mainDiv">
      <Form className="formy-subForm">
        Name:
        <Field type="text" name="name" placeHolder="Name" />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        Password:
        <Field type="password" name="password" placeHolder="Password" />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        E-Mail:
        <Field type="email" name="email" placeHolder="E-Mail" />
        TOS:
        <label className="checkbox-container">
          <Field type="checkbox" name="tos" checked={values.tos} />
          <span className="checkmark" />
        </label>
        <Field name="waffles" className="food-select" component="select">
          <option>What's Your Favourite Waffle?</option>
          <option value="herbivore">Strawberry!</option>
          <option value="carnivore">Blueberry!</option>
          <option value="omnivore">Plain w/ Syrup!</option>
        </Field>
        <button className="btn">Submit!</button>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li> Name: {user.name}</li>
          <li> Password: {user.password}</li>
          <li> E-Mail: {user.email}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikFormyForm = withFormik({
  mapPropsToValues({ name, password, email, tos, waffles }) {
    return {
      name: name || "",
      password: password || "",
      email: email || "",
      tos: tos || "",
      waffles: waffles || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is a Required Field !"),
    password: Yup.string().required("Password is a Required Field !")
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("This is the res:", res);
        setStatus(res.data);
      })
      .catch(err => {
        console.log("This is the err res:", err.res);
      });
  }
})(FormyForm);
console.log("This is the HOC", FormikFormyForm);
export default FormikFormyForm;
