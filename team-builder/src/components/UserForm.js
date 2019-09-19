import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { __values } from "tslib";

const UserForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        if (status) {
            setUser([...user, status]);
        }
    }, [status]);
};

return (
    <div className="user-form">
        <Form>
            <Field type="text" name="name" placeholder="name" />
            {touched.name && errors.name && (
                <p className="error">{errors.name}</p>
            )}

            <Field type="text" name="email" placeholder="Email" />
            {touched.email && errors.email && <p className="errors">{erros.email}</p>}

            <label>
                Terms of Service
                <Field>
                    type="checkbox"
                    name="Terms of Service"
                    checked={values.termsOfSercice}
                </Field>
            </label>
            <button>Submit!</button>
        </Form>
        {animals.map(animal => (
            <ul key={user.id}>
                <li>Name:{user.name}</li>
                <li>Email:{user.email}</li>
            </ul>
        ))}

    </div>
)

const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {

        }
    }
})

export default FormikUserForm;