import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Form, Field, withFormik} from 'formik';
import * as Yup from "yup";
import {Formik} from 'formik';


const UserForm = ({values}) => {


    return (

        <div>

            
<Formik>
                 <Form>
                     <Field name="username" type="text" placeholder="your name"></Field>
                     <Field name="email" type="email" placeholder="youremail@email.com"></Field>
                     <Field name="password" type="password" placeholder="password"></Field>

                     <label>
                     Terms of Service
                     <Field type="checkbox" className="checkbox" name="termsofservice" checked={values.termsofservice} />
                     </label>

                     <button>Submit</button>
                 </Form>

                 </Formik>
           
        </div>

    );




};


const FormikUser = withFormik({
    mapPropsToValues( { user, email, password, termsofservice } ) {
        return {
            username: user || '',
            email: email || '',
            password: password || '',
            termsofservice: values.termsofservice || false

        };
    },
    
}) (UserForm);
export default FormikUser;