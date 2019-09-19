import React from "react";
import { withFormik, Form, Field } from "formik";

function OnBoardForm({values}) {
  return (
    <Form>
      <input id="name" type="text" name="name" placeholder="name" />
      <input id="email" type="Email" name="email" placeholder="email" />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <button>Submit</button>
    </Form>
  );
}

const FormikOnBoardForm = withFormik({
  mapPropsToValues(name, email, password) {
    return {
        name:name || "",
        email:email || "",
        password:password || ""
    };
  },
  handleSubmit(values) {
console.log(values)
  }
})(OnBoardForm);



export default FormikOnBoardForm ;
