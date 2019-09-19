import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";



const UserForm = ({ values, errors, touched, status }) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        if (status){
            setUsers([...users,status]);
        }
    }, [status])
    return ( 
        <div>
            <Form>
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}
                <Field type="text" name="name" placeholder="Enter your Name"/>

                {touched.email && errors.email && (
                    <p className="error">{errors.email}</p>
                )}
                <Field type="email" name="email" placeholder="What is your email?"/>

                {touched.password && errors.password && (
                    <p className="error">{errors.password}</p>
                )}
                <Field type="password" name="password" placeholder="Create a password"/>
                <label>
                    Agree to our Terms of Service
                    <Field type="checkbox" name="terms" checked="values.terms"  />
                </label>
                <button>Create Account</button>
            </Form>
            {users.map(user => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                </div>
            ))}
        </div>
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


})(UserForm);

export default FormikUserForm;