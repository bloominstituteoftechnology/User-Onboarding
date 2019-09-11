import React from "react";
import { withFormik, Form, Field } from "formik";

function NewUser() {
    return (
        <Form>
            <Field type="text" name="name" placeholder="Name" />
            <Field type="email" name="email" placeholder="Email" />
            <Field type="password" name="password" placeholder="Password" />
            <Field type="checkbox" name="checkbox" placeholder="Terms of Service" />
           
            <button>Submit!</button>
        </Form>
    );
}

const FormikNewUser = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
            checkbox: checkbox || "",
        };
    },

    handleSubmit(values) {
        console.log(values);
        //THIS IS WHERE YOU DO YOUR FORM SUBMISSION CODE... HTTP REQUESTS, ETC.
    }
});

export default NewUser;