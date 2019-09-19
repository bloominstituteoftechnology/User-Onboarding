import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";


const UserForm = ({values }) => {

    return ( 
        <Form>
            {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
            )}
            <Field type="text" name="name" placeholder="Enter your Name"/>

            {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
            )}
            <Field type="email" name="email" placeholder="What is your email?"/>
            <Field type="password" name="password" placeholder="Create a password"/>
            <Field component="checkbox" name="terms" />
            <button>Create Account</button>
        </Form>
    )
}

const FormikUserForm = withFormik ({
    mapPropsToValues: (values) => {
        return{
            name: values.name || "",
            email: values.age || "",
            password: values.password || "",
            terms: values.terms || false,
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().required("Please enter a valid email"),
        password: Yup.string().min(9).required("please enter a password with at least 9 characters")
    }),

    handleSubmit(values, { setStatus }) {
        axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res));
    }


})(userForm);

export default FormikUserForm;