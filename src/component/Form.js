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



    </div>
)

}