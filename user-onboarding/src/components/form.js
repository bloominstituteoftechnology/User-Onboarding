import React from 'react';
import {withFormik, Form, Field, yupToFormErrors} from 'formik';
import * as Yup from 'yup';


function UserForm () {
    return(
        <Form> 
            <Field type='text' name='username' placeholder='username'/>
            <Field type='email' name='email' placeholder='email'/>
            <Field type='password' name='password' placeholder='password'/>        
            <label className='terms-of-service'>
            <Field type='checkbox' name='checkbox' />
            Terms of Service
            </label>
        
            <button type='submit'> Submit </button>
        </Form>
    )
}


const FormikForm = withFormik({

    
    mapPropsToValues({ username, email, password, tos }) {
      return {
        username: username || "",
        email: email || "",
        password: password || "",
        tos: tos || false
      };
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
       
      }),    
    
    handleSubmit (values) {
        
        console.log('submitting submitie values: ', values);
    }
    
  })(UserForm );


  
  export default FormikForm;