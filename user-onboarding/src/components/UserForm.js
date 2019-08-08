import React, { useState, useEffect } from "react"; 
import axios from 'axios';
import * as Yup from 'yup';
import { Form, Field, withFormik } from "formik"; 
import Styled from "styled-components"; 

const Edit = Styled.div`
display: flex;
flex-direction: column;
justify-content: center;  
`
const Margin = Styled.div`
margin: 10px; 
`

const Shadow =  Styled.div`
width: 284px;
padding: 10px 10px 20px 10px;
border: 1px solid #BFBFBF;
background-color: white;
box-shadow: 10px 10px 5px #aaaaaa;   
`

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
    <Shadow> 
    <h1>User</h1>
    <Form>
    <Edit> 
    <Field type="text" name="name" placeholder="Name" />
    </Edit>
    {touched.name && errors.name && (
        <p className="error">{errors.name}</p>
    )}
    <Margin> </Margin>
    <Edit> 
    <Field type="email" name="email" placeholder="Email" />
    </Edit>
    {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        <Margin> </Margin>
    <Edit> 
    <Field type="password" name="password" placeholder="Password" />
    </Edit>
    {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        <Margin> </Margin>
    <Edit> 
    <label className="checkbox-container">
          Accept Terms of Service
          <Field
            type="checkbox"
            name="tos"
            checked={values.tos}
          />
          <span className="checkmark" />
        </label>
    </Edit>
    <Margin> </Margin>
    <Edit> 
    <button type='submit'>Submit</button>
    </Edit>
     
    </Form> 
        {users.map(user => (
            <div key={user}>
                <p>
               Name: { user.name }
                Email: { user.email }
                </p>
            </div>
        ))}
    </Shadow>
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