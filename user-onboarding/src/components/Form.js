import React from 'react'
import * as yup from 'yup';
import { withFormik, Form, Field } from 'formik';

function Forms (){

     return(
          <div>
               <Form>
                    <Field type="text" name="name" placeholder="Name" />
                    <Field type="email" name="email" placeholder="Email" />
                    <Field type="password" name="password" placeholder="Password" />

                    <label> Terms of Service: 
                    <Field type="checkbox" name="termsOfService" />
                    </label>
               </Form>

               <button>Submit</button>
          </div>
     )
}

const FormikForms = withFormik({
     mapPropsToValues({name, email, password, termsOfService}){
          return{
               name: name || '',
               email: email || '',
               password: password || '',
               termsOfService: termsOfService || false
          }
     }
})(Forms)
console.log(FormikForms)

export default FormikForms