import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { TextField } from "formik-material-ui";

//What has been removed since we are utilizing Formik:
//state
//handleSubmit
//onChange

const UserForm = ({ values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <Field 
            type="text" 
            name="name" 
            placeholder="Your full name." 
            component={TextField}
        />
        {touched.name && errors.name && (
          <p className="errors">{errors.name}</p>
        )}
        <Field type="text" name="email" placeholder="Your email." />
        <Field type="text" name="password" placeholder="Password." />
        <Field as="select" className="age-range" name="age">
          <option>Please choose an option in the following age ranges.</option>
          <option value="youngin">18 and Below (I am jealous of your youth.)</option>
          <option value="youngadult">19-29</option>
          <option value="adult">30-40</option>
          <option value="mid-life-crisis">40-55</option>
          <option value="oldie-but-goodie">56-666</option>
        </Field>
        <label className="checkbox-container">
          Terms of Service:
          <Field
            type="checkbox"
            name="serviceterms"
            checked={values.serviceterms}
          />
          <span className="checkmark" />
        </label>
        <Field as="textarea" type="type" name="notes" placeholder="Special Notes." />
        <button>Submit!</button>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.password}</li>
          <li>Age Group: {user.age}</li>
          <li>Read Terms of Service: {user.serviceterms}</li>
          <li>Special Notes: {user.notes}</li>
        </ul>
      ))}
    </div>
  );
};

const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, age, serviceterms, notes }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      age: age || "",
      notes: notes || "",
      serviceterms: serviceterms || false
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Enter a name, you silly goose!!!"),
    email: Yup.string().required("Email is a required field."),
    password: Yup.string().required("Enter your password. Do not make me ask again."),
    notes: Yup.string(),
    age: Yup.string().required("ENTER YOUR AGE, YOU IMBECILE!"),
    serviceterms: Yup.bool().oneOf([true], "Error. PLEASE ACCEPT OUR TERMS OF SERVICE AND READ ALL THE TINY PRINT. Who knows? You might be signing over your first-born child and your soul.")
  }),
  handleSubmit(values, { setStatus }) {
    //values is our object with all our data on it
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(error => console.log(error.response));
  }
})(UserForm);

export default FormikForm;