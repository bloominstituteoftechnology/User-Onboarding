import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

function userForm({errors, touched, values}) {
    return (
        <Form>
            {touched.name && errors.name && <p>{errors.name}</p>}
            <Field type="text" name="name" placeholder="Name"/>

            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="text" name="email" placeholder="Email"/>
            
            {touched.pw && errors.pw && <p>{errors.pw}</p>}
            <Field type="password" name="pw" placeholder="Password"/>
            
            {touched.tos && errors.tos && <p>{errors.tos}</p>}
            <label>
                Agree to Terms of Service
                <Field type="checkbox" name="tos" checked={values.tos}/>
            </label>
            
            <button>Submit</button>
        </Form>
    );
}

const UserForm = withFormik({
    mapPropsToValues({name, email, pw, tos}) {
        return {
            name: name || "",
            email: email || "",
            pw: pw || "",
            tos: tos || false,
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required("Name is required"),
        email: Yup.string()
            .email("Not a valid email")
            .required("Email is required"),
        pw: Yup.string()
            .min(7, "Passwords must be at least 7 characters")
            .required("Password is required"),
        tos: Yup.bool()
            .oneOf([true], "You must agree to the Terms of Service before submitting")
            .required(),
    }),

    handleSubmit(values, {props}) {
        axios.post("https://reqres.in/api/users", {
                name: values.name, 
                email: values.email,
                pw: values.pw,
            })
            .then(res => {
                props.addUser(res);
            })
            .catch(err => {
                console.error(err);
            });
    }
})(userForm);

export default UserForm;