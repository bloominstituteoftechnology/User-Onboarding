import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

function NewUser({ values, errors, touched}) {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>} 
            <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <label>
            <Field type="checkbox" name="check" checked={values.check} placeholder="Terms of Service" />
            </label>
           
            <button>Submit!</button>
        </Form>
    );
}

const FormikNewUser = withFormik({
    mapPropsToValues({ name, email, password, checkbox }) {
        return {
            name: name || "",
            email: email || "",
            password: password || "",
            checkbox: checkbox || ""
        };
    },

      validationSchema: Yup.object().shape({
        email: Yup.string()
            .email("Email not valid")
            .required("Email required"),
        password: Yup.string()
            .min(8, "Password must be 8 or more characters")
            .required("Password required")
    }),
 
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        if (values.email === "") {
            setErrors({ email: "That email is already taken" });
        } else {
            axios
                .post("https://reqres.in/api/users_", values)
                .then(response => {
                    console.log(response); 
                    resetForm();
                    setSubmitting(false);
                })
                .catch(error => {
                    console.log(error); 
                    setSubmitting(false);
                });
        }
    }
})

export default NewUser;

    // Always console log the servers response!!