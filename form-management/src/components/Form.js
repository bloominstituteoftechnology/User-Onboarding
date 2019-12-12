import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Form1({ values, errors, touched,  status }) {
console.log("values", values);
  console.log("errors", errors);
  console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
       status && setUsers(users => [...users, status]); 
    }, [status]);

    return (
        <div className="user-form">
            <Form >
                <div>
                   <Field type="text" name="username" placeholder="Username" />
                   {touched.username && errors.username && <p className="errors"> {errors.username}</p>}
                </div>
                <br />
                <div>
                    <Field type="password" name="password" placeholder="Password" />
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                </div>
                <br />
                <div>
                    <Field type="email" name="email" placeholder="Email" />
                    {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                </div>
                <br />

                <label>
                    <Field type="checkbox" name="tos" checked={values.tos} />
                    Accept Terms
                </label>
                <br />
                <button type="submit"> SignUp </button>
            </Form>


            {users.map(user =>  { 
                return(
                    <div key={user.id}>
                        <h4>User Name: {user.username}</h4>
                        <h4>Email: {user.email}</h4>
                    </div>
                )
           })}
        </div>
    );
};
const FormikForm = withFormik({
    mapPropsToValues(props) {
        return {
            username: props.username || "",
            password: props.password || "",
            email: props.email || "",
            tos: props.tos || false,
        };
    },
    //======VALIDATION SCHEMA==========
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .min(4, "Username must be 4 characters minimum")
            .required("User Name is required"),
        email: Yup.string()
            .email("Email not valid")
            .required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be 6 characters minimum")
            .required("Password is required")
    }),
    //======END VALIDATION SCHEMA==========

    handleSubmit(values, { resetForm, setErrors, setSubmitting ,setStatus}) {
            axios
                .post("https://reqres.in/api/users", values)
                .then(res => {
                    console.log("This is the Response", res); 
                    resetForm();
                    setStatus(res.data);
                })
                .catch(err => {
                    console.log(err); 
                });
            }
        }
    )(Form1);

export default FormikForm;