import React, {useState, useEffect, useReducer} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const MyForm = ({errors, status,touched, values}) => {
    const[users, setUsers] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setUsers(users => [...users, status])

    }, [status]);
    return (
        <div className ="formcont">

<Form>

    <label htmlFor = "name">
        Name
        <Field
        id = "name"
        type = "text"
        name = "name"
        placeholder =  "type name"
        
        />
        {touched.name && errors.name && (
            <p> {errors.name}</p>
        )}
    </label>


    <label htmlFor = "email">

        Email<Field
        id = "email"
        type = "email"
        name = "email"
        placeholder = "whats your email"
        
        />
    

    {touched.email && errors.email &&(
        <p>{errors.email}</p>
    )}
    </label>
    <label htmlFor = "password">
        Password
        <Field
        id = "password"
        type = "password"
        name = "password"
        placeholder = "type password"
        
        />
    
    {touched.password && errors.password &&(
            <p> {errors.password}</p>
        )}
</label>
<label className="checkbox-container">
        Terms of Service
        <Field
          type="checkbox"
          name="tos"
          checked={values.tos}
        />
        <span className="checkmark" />
      </label>  
        <button type = "submit">Submit</button>

</Form>
{users.map(user =>{
    return(
    <ul key = {user.id}>
        <li> name:{user.name}</li>
        <li> email:{user.email}</li>

    </ul>
    );
})}
</div>
    );
};


const FormikMyForm = withFormik({
    mapPropsToValues(props){

        return{
            name:props.name || "",
            email:props.email || "",
            password:props.password || "",
            tos:props.tos || true,

        }
    },
   

validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    console.log("submitting", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log("success", res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.log(err.response));
  }
})(MyForm);

export default FormikMyForm;  



