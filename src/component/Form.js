import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form, Field, Formmik } from 'formik';
import * as Yup from 'yup';

const UserForm  = ({ errors, touched, values, handleSubmit, status}) => {
    const [user, setUser] = useState([]);
    console.log(user);

    useEffect(() => {
        if (status) {
            setUser([...user, status]);

        }
    }, [status]);
    console.log(status);

return (
    <div className='container'>
        <h1>New User</h1>
        <Form className="form">
        <Field className='field'
         type="text"
         name="name"
        placeholder = "Name"/>

        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field className="field"
        type = "email"
        name="email"
        placeholder="Email"/>

        {touched.email && errors.email && (
        <p className="error">{errors.email}</p>
       )}

        <Field className= "dropdown"
        component="select"
        name='role'>
             <option>Please Choose an Option</option>
          <option value="captain">Captain</option>
          <option value="First">First</option>
          <option value="passenger">Passenger</option>

        </Field>

        <Field className="field"
         type="password"
         name="password"
         placeholder="Password"/>

         {touched.password && errors.password && (
            <p className="error">{errors.password}</p>
           )}

  <label className="checkbox-container">
      Accept terms of Service
      <Field
      className='field'
      type="checkbox"
      name="services"
      checked={values.service}
      />
      <span className= "checkbox" />
  </label>


        <button className="button" type="submit">Submit</button>
        </Form>
        <div className="list">
            {user.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
    </div>
    </div>
)

}