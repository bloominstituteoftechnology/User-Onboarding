import React, { useState, useEffect } from "react";
import {Form, Field, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Card } from 'semantic-ui-react'

const MyForm = ({ errors, touched, values, status }) => {
    const [members, setMembers] = useState([]);
    // console.log(members);

    useEffect(() => {
        if (status) {
          setMembers([...members, status]);
        }
      }, [status]);

  return (
    <Card className="ui centered card">
      <Form className="formStyle">
        <Field name="name" type="text" placeholder="Name" />
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p className="error">{errors.email}</p>}
        <Field type="password" name="password" placeholder="password" />
        {touched.password && errors.password && <p className="error">{errors.password}</p>}
        <label className="checkbox-container">
          <br></br>Terms Of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
          {touched.tos && errors.tos && <p className="error">{errors.tos}</p>}
        </label>

        <button type="submit">Submit!</button>
            </Form>
            {members.map(member => {
                return <p>{member.email}</p>
            })}
    </Card>
  );
};
const FormikForm = withFormik({
  mapPropsToValues({ name, email, password, tos}) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      tos: tos || false,
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name please"),
    email: Yup.string().required("email contact?"),
    tos: Yup.boolean().oneOf([true], "Please accept to our terms!")
  }),
  handleSubmit(values, { setStatus }) {
    axios.post('https://reqres.in/api/users/', values)
    .then(res => {
        setStatus(res.data)
    })
    .catch(err => console.log(err.response));
  }
})(MyForm); // javascript currying
export default FormikForm;
