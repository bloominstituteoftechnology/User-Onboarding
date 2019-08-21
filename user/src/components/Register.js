import React, { useState } from 'react'
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Select } from 'formik-material-ui';
import Button from '@material-ui/core/Button';





const Register = ({ errors, touched, values, }) => {


  
    return(
        <div>
            <h2>School District Registery</h2>
                <Form className='container'>
                  {touched.user && errors.user && <p>{errors.user}</p> }
                    <Field 
                    className='field'
                    type='user'
                    name='user'
                    label='Enter user here'
                    component={ TextField }
                    variant='outlined'
                    fullWidth
                    />
                  {touched.password && errors.password && <p>{errors.password}</p> }
                    <Field 
                    className='field'
                    type='password'
                    name='password'
                    label='Enter password here'
                    component={ TextField }
                    variant='outlined'
                    fullWidth
                    />
                  {touched.email && errors.email && <p>{errors.email}</p> }
                    <label>
                    < Field type='checkbox' name='email' checked={values.email} className='checkbox'  />
                    Check the box to be added to our email list.
                    </label>
                    <Button type='submit'  margin='normal' fontSize='small' fullWidth color='primary'>
                    Click to Register
                    </Button>
                </Form>
                
        </div>
    )}

 

 const FormikRegister = withFormik({
    mapPropsToValues({ user, password, email}) {
      return {
        password: password || '',
        user: user || '', //changes default value 
        email: email || ''
      }
    },


    validationSchema: Yup.object().shape({
        user: Yup.string()
          .max(10, 'Name exceeds character limit'),
        password: Yup.string()
          .min(6, "Please enter a password that is 4 characters or longer")
          .required()
      }),
    
      handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
        // console.log(values
        axios
          .post('https://reqres.in/api/users', values)
          .then(res => {
            console.log(res.data)
            resetForm();
            setSubmitting(false)
          })
          .catch(err => {
            console.log(err)
            setSubmitting(false)
          })
    
      }
 
      
    
    })(Register)
    



export default FormikRegister;













