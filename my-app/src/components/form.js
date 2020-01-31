import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function form({ values, errors, touched, isSubmitting }) {
  
  return (
      <Form>
        <div>
            {touched.username && errors.username && <p>{errors.username}</p>} 
            <Field type="text" name="username" placeholder="username"/>
        </div>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>} 
            <Field type="email" name="email" placeholder="email"/>
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>} 
            <Field type="password" name="password" placeholder="password"/>
        </div>
        <label>
        <Field type="checkbox" name="Terms(TOS)" checked={values.tos} />
            Accept Terms(TOS)
        </label>
        <button disabled={isSubmitting}>Submit!</button>
      </Form>
  );
}
const FormikForm = withFormik({
    
    mapPropsToValues({ username, email, password, TOS}) {
        return {
            username: username || "",
            email: email || "",
            password: password || "",
            TOS: TOS || false
        };
    },
validationSchema: Yup.object().shape({
    username: Yup.string("username is not valid!!").required("username is required!!"),
    email: Yup.string("email is not valid!!").required("email is required!!"),
    password: Yup.string("password must be atleast 10 characters").min(10).required("password is required!!")
}),
    handleSubmit(values,  {resetForm, setErrors, setSubmitting }) {
        if (values.email === "Iminuse@gmail.com") {
            setErrors({ email: "Email is in use" });
        }  else {
            axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                resetForm();
                setSubmitting(false);
            })
            .catch(err => {
                console.log("an error has occured", err);
                setSubmitting(false);
            });
        }
    }
})(form);

export default FormikForm;