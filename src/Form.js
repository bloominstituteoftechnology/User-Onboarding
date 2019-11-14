import * as Yup from "yup";

import { Field, Form, withFormik } from "formik";
import React, { useEffect, useState } from "react";

import axios from "axios";

const userForm = ({ values, errors, touched, status, validation })=>{
   

  if (!values.email) {
    errors.email = 'Email is required!!';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

return(
    <div className="user-form">
    <br></br>
    <Form>
    <Field type="text" name="name" placeholder="What is your name?"/><br></br>
    {touched.name && errors.name && (<p className="errors">{errors.name}</p>)}
    <br></br>
    <Field type="text" name="email" placeholder="What is your email?"/><br></br>
    {touched.email && errors.email && (<p className="errors">{errors.email}</p>)}
    <br></br>
    <Field type="password" name="password" placeholder="What is your password?"/><br></br>
    {touched.password && errors.password && (<p className="errors">{errors.password}</p>)}
    <br></br>
    <label className="checkbox-container">Terms Of Service
    <Field type="checkbox" name="tos" value="check" checked={values.tos}/>
    {touched.tos && errors.tos && (<p className="errors">{errors.tos}</p>)}
    </label>
    
    <button>Submit!</button>
    </Form>
    
    </div>
)
}

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, tos}){
        return{
            name: name || "",
            email: email || "",
            password: password || "",
            tos: tos || true,
        }

    },
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Your name is too short ").required("Please enter a name!!"),
        email: Yup.string().email("Must be real Email"),
        password: Yup.string().min(6, "Password must be 6 characters or longer").required("Password is required!!"),
        tos: Yup.boolean().test('tos', "Please agree to terms of service", value => value === true)        
      }),
      handleSubmit(values, { setStatus, resetForm }) {
        // values is our object with all of our data
        axios
          .post("https://reqres.in/api/users/", values)
          .then(res => {
            setStatus(res.data);
            resetForm({});
            console.log(res);
          })
          .catch(err => console.log(err.response));
      }
      
})(userForm);
export default FormikUserForm;