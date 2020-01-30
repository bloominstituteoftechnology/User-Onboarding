import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function UserOnboardingForm(props) {

console.log(props);

  function submitHandler(values, actions, {setUserList}) {
    console.log(values, actions);
    console.log(props);
    axios
      .post("https://reqres.in/api/users", values)
      .then(response => {
        console.log(response);
        console.log(setUserList);
        actions.resetForm();
      })
      .catch(e => console.log(e))
      .finally(() => {
        console.log("Axios request finished.");
      });
  }
  return (
    <div>
      <Formik
        initialValues={initialVal}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        <Form>
          {/* Name */}
          <label htmlFor="current_name">Name</label>
          <Field
            type="text"
            id="current_name"
            name="name"
            placeholder="Enter name here"
          />
          <ErrorMessage name="name" component="div" className="error" />
          {/* //Email */}
          <label htmlFor="current_email">Email</label>
        <Field type="email" id="current_email" name="email" placeholder="Enter Email" />
        <ErrorMessage name="email" component="div" className="error" />
          {/* //Password */}
          <label htmlFor="current_password">Password</label>
        <Field
          type="password"
          id="current_password"
          name="password"
          placeholder="Enter your password here"
        />
        <ErrorMessage name="password" component="div" className="error" />
          {/* //Terms of service */}
          <label htmlFor="terms_of_service">
          Tick to accept terms of service
        </label>
        <Field type="checkbox" id="terms" name="terms" />
        <ErrorMessage
          name="terms"
          component="div"
          className="error"
        />
          {/* //submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Too Short!")
    .max(25, "Too Long!"),
  email: Yup.string().required("Please enter an Email").email("Invalid email"),
  password: Yup.string().required("Please enter a password").min(5, "Too Short!")
  .max(25, "Too Long!").matches(/(?=.*[0-9])/, "Must contain at least one number"),
  terms:Yup.boolean(),
});
// .required("you can't proceed without accepting terms")
const initialVal = {
  name: "",
  email: "",
  password: "",
  terms:false
};
// mapPropsToValues({ name,email,password,terms }){
//   return {
//     name:name,
//     email:email,
//     password:password,
//     terms:terms,
    
//   };
