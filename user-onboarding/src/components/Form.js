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
                
                {touched.role && errors.role && (
                    <p className="error">{errors.role}</p>
                )}
                <Field component="select" name="role">
                    <option value="" disabled>Select a Role</option>
                    <option value="nerd">Nerd</option>
                    <option value="dingus">Dingus</option>
                    <option value="wizard">Wizard</option>
                </Field>

                {touched.terms && errors.terms && (
                    <p className="error">{errors.terms}</p>
                )}
                <label>
                    Agree to our Terms of Service
                    <Field type="checkbox" name="terms" checked={values.terms}  />
                </label>
                <button type="submit">Create Account</button>
            </Form>
            {users.map(user => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Password: {user.password}</p>
                    <p>Role: {user.role}</p>
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
            role: values.role || "",
            terms: values.terms || false,
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required("Please enter your name"),
        email: Yup.string().required("Please enter a valid email"),
        password: Yup.string().min(9).required("please enter a password with at least 9 characters"),
        role: Yup.string().required("Please select a ole"),
        terms: Yup.bool().oneOf([true], "You must agree to our Terms and Services to continue")
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

console.log("This is the User Data", FormikUserForm);

export default FormikUserForm;