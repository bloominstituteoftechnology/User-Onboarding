import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddForm ({ values, errors, touched, isSubmitting }) {

    return(
        <Form>
           <div> 
            <Field type='text' name ='name' placeholder = 'Name' />
           </div>
           <div>
             {touched.email && errors.email && <p>{errors.email}</p>}  
            <Field type='email' name ='email' placeholder = "Email" />
           </div>
           <div>
            {touched.password && errors.password && <p>{errors.password}</p>}    
            <Field type='password' name ='password' placeholder = 'Password'/>
           </div>
           <label>
            <Field type = 'checkbox' name ='tos' checked = {values.tos}/>
           </label>
           <button disabled = {isSubmitting} >Submit!</button>
        </Form>
        
    );
}

 const FormikForm = withFormik({
    mapPropsToValues( {name, email, password, tos }) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false,
            };
        },
        validationSchema: Yup.object().shape({
            email: Yup.string()
                .email("Email not valid")
                .required("Email is required"),
            password: Yup.string()
                .min(8, "Password must be 8 character or longer")
                .required("password is required")
        }),
        handleSubmit: (values, {resetForm, setErrors, setSubmitting}) => {
            if (values.email === "alreadytaken@atb.dev") {
                setErrors({ email: "That email is already taken"});
            }else {
                axios
                    .post('https://reqres.in/api/users', values)
                    .then(res => {
                        console.log(res);
                        resetForm();
                        setSubmitting(false);
                    })
                    .catch(err => {
                        console.log(err);
                        setSubmitting(false);
                    });
            }
        }
    })(AddForm);


export default FormikForm;