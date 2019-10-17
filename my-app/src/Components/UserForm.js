import React from 'react';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched }) => {
    return (
      <div className="user-form">
        <Form>
            <Field 
            type='text' 
            name='user' 
            placeholder="name"/>
            {touched.user && errors.user && (<p>{errors.user}</p>)}
            
            <Field 
            type='text' 
            name='email' 
            placeholder="email"/>
            {touched.email && errors.email && (<p>{errors.email}</p>)}

            <Field 
            type='text' 
            name='password' 
            placeholder="password"
            />

            <Field component='select'
            //className="favorite-season"
            name="season">
            <option>Please Choose a Season</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            </Field>

          <label>Terms of Service
            <Field type="checkbox" 
              name="TermsofService"
              checked={values.TermsofService}/>
          </label>

          <button>Submit</button>
        </Form>
      </div>
    );
  };

  const FormikUserForm = withFormik ({
    mapPropsToValues({user, email, password, season, TermsofService}) {
      return {
        user: user || "",
        email: email || "",
        password: password || "",
        season: season || "",
        TermsofService: TermsofService || false,
      };

    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("You must add name"),
      email: Yup.string().required("You must add email")
    }),

    handleSubmit(values){
      console.log(values)
    }
  })(UserForm);
  console.log("This is the HOC" , FormikUserForm);
  export default FormikUserForm;