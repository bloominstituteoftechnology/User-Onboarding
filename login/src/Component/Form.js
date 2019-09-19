import React from "react";
import { withFormik, Form, Field } from "formik";

function OnBoardForm() {
  return (
    <form>
      <input id="name" type="text" name="name" placeholder="name" />
      <input id="email" type="Email" name="email" placeholder="email" />
      <input
        id="password"
        type="password"
        name="password"
        placeholder="password"
      />
      <button>Submit</button>
    </form>
  );
}

const FormikOnBoardForm = withFormik({
  mapPropsToValues() {
    return {};
  }
})(OnBoardForm);

export default FormikOnBoardForm ;
