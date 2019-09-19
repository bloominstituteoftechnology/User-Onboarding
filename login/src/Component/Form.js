import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

function OnBoardForm({ values }) {
  return (
    <Form>
      <Field  type="text" name="name" placeholder="name" />
      <Field  type="Email" name="email" placeholder="email" />
      <Field
        type="password"
        name="password"
        placeholder="password"
      />
       <Field
            type="checkbox"
            name="checkbox"
            checked={values.checkbox}
          />
      <button>Submit!</button>
    </Form>
  );
}

const FormikOnBoardForm = withFormik({
  mapPropsToValues(name, email, password, checkbox) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
      checkbox:checkbox || ""
    };
  },
  handleSubmit(values) {
    console.log(values);
  }
})(OnBoardForm);

export default FormikOnBoardForm;
