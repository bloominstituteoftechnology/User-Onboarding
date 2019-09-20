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
                <Field type="text" name="Name" placeholder="Name" />
                {touched.name && errors.name && (
                    <p className="error">{errors.name}</p>
                )}

                <Field type="text" name="Email" placeholder="Email" />
                {touched.email && errors.email && <p className="errors">{errors.email}</p>}

                <Field type="password" name="Password" placeholder="PassWord">

                </Field>

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
                    <li>Password:{user.password}</li>


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
            password: password || ""

        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        password: Yup.string().required()
    }),

    handleSubmit(values, { setStatus }) {
        axios
            .post("https://reqres.in/api/users", values)
            .then(res => {
                setStatus(res.data);
            })
            .catch(err => console.log(err.res))
    }
})(UserForm);

export default FormikUserForm;