import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
function Form1({errors, touched }) {
    // const [user, setUser] = useState({ username: "", password: "" });

    // const handleChange = event => {
    //     setUser({ ...user, [event.target.name]: event.target.value });
    // };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     console.log(user.username);
    //     console.log(user.password);
    // };

    return (
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

            <label> Accept
                <input
                    type="checkbox"
                    id="verifyGenderF"
                    name="genderF"
                    value="myGenderF"
                />
            </label>
            <br />
            <button>SignUp</button>

        </Form>
    )
};

const FormikForm = withFormik({
    mapPropsToValues({ username, password, email }) {
        return {
            username: username || "",
            password: password || "",
            email: email || ""
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

    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
})(Form1);

export default FormikForm;