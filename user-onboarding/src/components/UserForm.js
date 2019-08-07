import React from "react"; 
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from "formik"; 

 const UserForm = () => {
 return(
    <div className='user-form'> 
    <h1>User</h1>
    <Form>
    <Field type="text" name="name" placeholder="Name" />
    <Field type="email" name="email" placeholder="Email" />
    <Field type="password" name="password" placeholder="Password" />

    <label className="checkbox-container">
          Accept Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>



    <button type='submit'>Submit</button>
     
    </Form> 
    </div>
 )   
}


const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
    // tos: Yup.   
    }),    

handleSubmit(values) {
    axios
    .post(" https://reqres.in/api/users", values )
    .then(res => console.log(res))
    .catch(error => console.log("ERROR", error))
}    

})(UserForm);

export default FormikUserForm;