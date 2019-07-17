import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function AddForm ({ values, errors, touched, isSubmitting }) {

    return(
        <Form>
           <div> 
            <Field type='text' name='name' placeholder = 'Name' />
           </div>
           <div>
             {touched.email && errors.email && <p>{errors.email}</p>}  
            <Field type='email' name='email' placeholder = 'Email' />
           </div>
           <div>
            {touched.password && errors.password && <p>{errors.password}</p>}    
            <Field type='password' name='password' placeholder = 'Password'/>
           </div>
           <label>
            <Field type = 'checkbox' name ='tos' checked = {values.tos}/>
           </label>
            <button>Submit!</button>
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
        handleSubmit: (values, formikBag) => {

        }
    })


export default AddForm;