import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from "formik"; 

 const UserForm = ({ errors, touched, values, status }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (status) {  
            console.log(status);           
            setUsers([...users, status]);
        }        
    }, [status]);

    
 return(
    <div className='user-form'> 
    <h1>User</h1>
    <Form>
    <Field type="text" name="name" placeholder="Name" />
    {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
    )}

    <Field type="email" name="email" placeholder="Email" />
    {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}

    <Field type="password" name="password" placeholder="Password" />
    {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}

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
        {users.map(user => (
            <div key={user}>
                <p>
               Name: { user.name }
                Email: { user.email }
                </p>
            </div>
        ))}

    </div>
 )   
}


const FormikUserForm = withFormik({
    mapPropsToValues({ name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || true
        };
    },

    validationSchema: Yup.object().shape({
    name: Yup.string().required('YOU MESSED UP '),
    email: Yup.string().required('YOU MESSED UP'),
    password: Yup.string().required('YOU MESSED UP SON') 
    }),    



handleSubmit(values, { resetForm ,setErrors, setStatus }) {
    if (values.email === 'cats@fish.com') {
        setErrors({ email: 'That email is taken, SON'})
    } else {
        axios
        .post(" https://reqres.in/api/users", values)
        .then(res => {
            console.log(res);
            setStatus(res.data); 
            resetForm(); 
        })    
        .catch(error => {
            console.log("ERROR", error);
        });
    }   
}
})(UserForm);



export default FormikUserForm;