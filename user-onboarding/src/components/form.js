import React, { useState, useEffect} from 'react';
import {withFormik, Form, Field, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';



const UserForm = ({ values, errors, touched, isSubmitting, status }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (status) {
      setUsers({...users, status});
    }
  }, [status]);
  return (
    <>
    <Form className="form">
      <div className="container">
<div className="field">
  <label htmlFor="name">Name:</label> 
  <Field type="text" name="name" id="name" className="field" />
  {touched.name && errors.name && <p>{errors.name}</p>}
</div>
      <div className="field">
        <label htmlFor="password">Password: </label>
        Field
              type="password"
              name="password"
              id="password"
              className="field"
            />
            {touched.password && errors.password && <p>{errors.password}</p>}
          </div>
          <div className="field">
            <label htmlFor="terms">Accept Terms of Conditions</label>
            <Field
              type="checkbox"
              name="terms"
              id="terms"
              checked={values.terms}
            />
            {touched.terms && errors.terms && <p>{errors.terms}</p>}
          </div>
          <Field component="select" name="dropdown">
            <option value="pencil">Pencil</option>
            <option value="marker">Marker</option>
            <option value="pen">Pen</option>
          </Field>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        <div className='current'>
        <h1>Current Users</h1>
      {values.user && values.users.map(user => console.log("each user", user))}
      {users
        ? users.map(user => (
            <p key={user.id} className="users">
             {user.name}
            </p>
          ))
        : null}
        </div>
        </div>
      </Form>
    </>
  );
};
     


// function UserForm () {
//     return(
//         <Form> 
//             <Field type='text' name='username' placeholder='username'/>
//             <Field type='email' name='email' placeholder='email'/>
//             <Field type='password' name='password' placeholder='password'/>        
//             <label className='terms-of-service'>
//             <Field type='checkbox' name='checkbox' />
//             Terms of Service
//             </label>
        
//             <button type='submit'> Submit </button>
//         </Form>
//     )
// }


// const FormikForm = withFormik({

    
//     mapPropsToValues({ username, email, password, tos }) {
//       return {
//         username: username || "",
//         email: email || "",
//         password: password || "",
//         tos: tos || false
//       };
//     },

//     validationSchema: Yup.object().shape({
//       name: Yup.string().required(),
//       email: Yup.string().required(),
//       password: Yup.string().required(),
       
//       }),    
    
//       handleSubmit(values) {
//         axios
//         .post(" https://reqres.in/api/users", values )
//         .then(res => console.log(res))
//         .catch(error => console.log("ERROR", error))
//     }    
    
//     })(UserForm);
    
//     export default FormikForm;