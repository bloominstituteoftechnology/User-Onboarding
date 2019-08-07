import React from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, handleChange }) => {

  return(
    <div className="form-div">
      <h1>New User Onboarding</h1>
      <div>
        <Form className="form-wrapper">
          <Field type='name' name='name' placeholder='Name' />
          <Field type='email' name='email' placeholder='Email' />
          <Field type='password' name='password' placeholder='Password' />
          <label>
            <Field type="checkbox" name="tos" checked={values.tos} />
            Please agree to Terms of Service
          </label>
          <label>
            How did you hear about us?
            <Field component="select" name="hearaboutus">
              <option value="internet">Internet</option>
              <option value="other">Other</option>
            </Field>
          </label>
          <button>Submit</button>
        </Form>
      </div>
    </div>
    )
}

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password, tos, hearaboutus }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      tos: tos || false,
      hearaboutus: hearaboutus || 'internet'
    }
  },
  handleSubmit(values) {
    console.log(values);
  }
})(UserForm)

export default FormikUserForm
