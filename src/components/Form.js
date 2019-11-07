import React, { useState }  from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import './Form.css'



const UserForm = ({ values, touched, errors }) => {
    const [users, setUsers] = useState([])
    return (
      <div className="user-form">
        <Form>
          <h3>User Form</h3>
            <Field
            type="text"
            name="name"
            placeholder="name"
            value={values.name}
            />
            {touched.name && errors.name && <p>{errors.name}</p>}
            
            <Field
            type="text"
            name="email"
            placeholder="email"
            value={values.email}
            />
            {touched.email && errors.email && <p>{errors.email}</p>}
            
            <Field
            type="text"
            name="password"
            placeholder="password"
            value={values.password}
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
           
            <label>Do you accept the Terms of Service?
            <Field
            type="checkbox"
            name="terms"
            placeholder="Terms of Service"
            value={values.terms}
            />
            </label>
            <button type="submit">Submit</button>
        </Form>
      </div>
    );
}

  const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, terms }) {
      return {
        name: name || "",
        email: email || "",
        password: password || "",
        terms: terms || ""
      };
    },
    
    validationSchema: Yup.object().shape({
        name: Yup.string().required("What is your name?"),
        email: Yup.string().required("What is your email?"),
        password: Yup.string().required("What is your password?"),
        terms: Yup.boolean()
    }),

    handleSubmit(values) {
     axios
        .post("https://reqres.in/api/users/", values)
        .then(response => { console.log(response) })
        .catch(error => { console.log(error) })
    }

  })(UserForm);

console.log(FormikUserForm);    
export default FormikUserForm;