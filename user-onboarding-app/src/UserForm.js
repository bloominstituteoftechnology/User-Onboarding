import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const UserForm = props => {
  return (
    <Form>
      <Field name="name" placeholder="Name" />
      <Field name="email" placeholder="email" />
      <Field name="password" placeholder="Password" />
      <Field type="checkbox" name="tos" />
      <button type="submit">Add User</button>
    </Form>
  );
};

export default UserForm;
