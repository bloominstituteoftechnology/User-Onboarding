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
        <Form className='field'
         type="text"
         name="name"
        placeholder = "Name"/>
        {touched.species && errors.species && (
          <p className="error">{errors.species}</p>
        )}

    </div>
)

}