import React from 'react'
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, handleChange }) => {

  return(
    <div className="form-div">
      <h1>New User Onboarding</h1>
      <div className="form-wrapper">
        <Form>
          <input type='name' name='name' placeholder='Name' value={values.name} onChange={handleChange}/>
          <input type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange}/>
          <input type='password' name='password' placeholder='Password' value={values.password} onChange={handleChange}/>
          <button>Submit</button>
        </Form>
      </div>
    </div>
    )
}

const FormikUserForm = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
    }
  },
  handleSubmit(values) {
    console.log(values);
  }
})(UserForm)

export default FormikUserForm
