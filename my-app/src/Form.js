import React from "react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function TestingForms(props) {
  console.log(props);

  return (
    <div className="Forms">
      <Form>
        <label>
          Name
          <Field type="text" name="name" placeholder="Enter your name here" />
        </label>
        <ErrorMessage
          name="name"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Email
          <Field
            type="email"
            name="email"
            placeholder="Enter your Email here"
          />
        </label>
        <ErrorMessage
          name="email"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Password
          <Field
            type="password"
            name="password"
            placeholder="Enter your password here"
          />
        </label>
        <ErrorMessage
          name="password"
          render={msg => <div className="error">{msg}</div>}
        />
        <label>
          Terms of Service
          <Field type="checkbox" name="terms_of_service" />
        </label>
        <ErrorMessage
          name="account_type"
          render={msg => <div className="error">{msg}</div>}
        />
        <input className="submit" type="submit" />
      </Form>
    </div>
  );
}

const FormsWithFormik = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      password: "",
      terms_of_service: false
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter a Name"),
    email: Yup.string().required("Please enter a Email"),
    password: Yup.string().required("Please enter your password"),
    terms_of_service: Yup.boolean()
  }),

  handleSubmit(values, tools) {
    console.log(tools);

    axios
      .post("https://reqres.in/api/users", values)
      .then(res => {
        console.log(res.data);
        tools.resetForm();
      })
      .catch(err => {
        console.log(err);
      });
  }
})(TestingForms);

export default FormsWithFormik;
