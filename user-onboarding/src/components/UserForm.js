import React, { useState, useEffect } from "react";
import { Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import axios from "axios";


const UserForm = ({ errors, touched, values, status}) => {
  
  const [users, setusers] = useState([]);
  console.log(users);

  useEffect(() => {
    if (status) {
      setusers([...users, status]);
    }
  }, [status]);

  return (
    <div className="user-form">
      <Form>
        <Field 
        component="input"
        type="text"
        name="name"
        placeholder="Name"
        />
        
        {touched.name && errors.name && (
          <p className="error">{errors.name}</p>
        )}

        <Field
            type="email"
            name="email"
            placeholder="email"
            />
            {touched.email && errors.email && <p className="error">{errors.email}</p>}
  	
        <div>
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && <p>{errors.password}</p>}
        </div>

      <label>
        <Field type="checkbox" name="tos" checked={values.tos} />
        Accept TOS
      </label>
      
       <button>Submit!</button>
       
      </Form>
      {users.map(user => (
       <p key={user.id}>{user.name}</p>
     ))}
   </div>
 );
};
 
const formikUserForm = withFormik({
 mapPropsToValues({ name, email, password, tos }) {
   return {
     name: name || "",
     email: email || "",
     password: password || "",
     tos: tos || false,
        };
 },
 validationSchema: Yup.object().shape({
   name: Yup.string().required("Please enter full name"),
   email: Yup.string().required(),
   password: Yup.string("Strong password please"),
   tos: Yup.boolean().required()
 }),
 
 handleSubmit(values, { setStatus, resetForm }) {
   axios
     .post("https://reqres.in/api/users", values)
     .then(res => {
       console.log("handleSubmit: then: res: ", res);
       setStatus(res.data);
       resetForm();
     })
     .catch(err => console.error("handleSubmit: catch: err: ", err));
 }
});






export default withFormik({})(UserForm);
