import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const UserForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        status && setUser(user => [...user, status]);
    }, [status]);

    return (
        <div className="user-form">
            <Form>
                <Field type="text" name="name" placeholder="name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field type="text" name="email" placeholder="Email" />
                {touched.email && errors.email && <p className="errors">{errors.email}</p>}

                <label>
                    Terms of Service
                <Field type="checkbox" name="Terms of Service" checked={values.termsOfService} />


                </label>
                <button>Submit!</button>
            </Form>
            {user.map(user => (
                <ul key={user.id}>
                    <li>Name:{user.name}</li>
                    <li>Email:{user.email}</li>
                </ul>
            ))}
        </div>
    )
};


const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
            name: name || "",
            email: email || "",

        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required,
        email: Yup.string().required()
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users", values)
    }
})(UserForm);

export default FormikUserForm;