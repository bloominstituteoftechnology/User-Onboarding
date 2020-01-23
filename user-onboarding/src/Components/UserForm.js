import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from 'axios';

const UserForm = ({ errors, touched, values, status }) => {
    
    // const handleSubmit = e => {
    //     event.preventDefault();
        
    // }
    
    return (
        <div>
            <Form>
                <Field type="text" name="name" placeholder="Name" value={values.name}/>
                <Field type="text" name="email" placeholder="email" value={values.email} />
                <Field type="text" name="password" placeholder="Password"  value={values.password}/>

                <label>
                    <Field type="checkbox" name="terms"/>
                </label>

                <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({ user }) {
        return {
            name: "", 
            email: "",
            password: "",
            terms: false,

        };
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Name Required'),
        email: Yup.string().required('Valid Email Required'),
        password: Yup.string().required('Password Required'),
        // terms: Yup.boolean.required()

    }),

    handleSubmit(values, { setStatus, resetForm }) {
        console.log('submitting form:', values);
        axios.post
        ("https://reqres.in/api/users", values)

        .then( res => {
            console.log('Success:', res);
            setStatus(res.data);
            resetForm();
        })
        .catch(err => {
            console.log('Error:', err.response);
        });
    }

})(UserForm);


export default FormikUserForm;

