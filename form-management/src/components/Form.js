import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Form1({ values, errors, touched, isSubmitting, status }) {
    const [users, setUsers] = useState([]);

        useEffect(() => {
          if (status) {
            setUsers([...users, status]);
          }
        }, [status]);

    return (
        <div>
            <Form >
                <div>
                    {touched.username && errors.username && <p>{errors.username}</p>}
                    <Field type="text" name="username" placeholder="Username" />
                </div>
                <br />
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type="password" name="password" placeholder="Password" />
                </div>
                <br />
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type="email" name="email" placeholder="Email" />
                </div>
                <br />

                <label>
                    <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms
            </label>
                <br />
                <button type= "submit" >SignUp</button>
            </Form>
            
            {users.map(user => (
                <div key={user.id}>
                    <h4>User Name: {user.username}</h4>
                </div>
            )
            )}
        </div>
    );
};
const FormikForm = withFormik({
    mapPropsToValues({ username, password, email, tos }) {
        return {
            username: username || "",
            password: password || "",
            email: email || "",
            tos: tos || false,
        };
    },
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "user name must be 4 characters minimum")
            .required("User Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "password must be 6 characters minimum")
            .required("Password is required")
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "alreadytaken@atb.dev") {
            setErrors({ email: "That email is already taken" });
        } else {
            axios
                .post("https://reqres.in/api/users", values)
                .then(res => {
                    console.log("This is the Response", res); // Data was created successfully and logs to console
                    resetForm();
                    setSubmitting(false);
                })
                .catch(err => {
                    console.log(err); // There was an error creating the data and logs to console
                    setSubmitting(false);
                });
        }
    }
})(Form1);

export default FormikForm;