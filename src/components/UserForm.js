import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Form, Field, withFormik} from "formik";
import * as Yup from "yup";
import UserDisplay from './UserDisplay';

const UserForm = ({touched, errors, status}) => {
   
    
    const [users, setUsers] = useState([])
    
    useEffect(()=>{
        status && setUsers([...users,status])
        
    },[status]);
    console.log(users)

    return (
        <div>
        <Form>
            <div>
                <label>Name: <Field name="name" type="text"/>
                {touched.name && errors.terms && (<p>Errors: {errors.name}</p>)}
                </label>
                <br/>
                <br/>
                <label>Email: <Field name="email" type="email"/></label>
                <br/>
                <br/>
                <label>Password: <Field name="password" type="password"/></label>
                <br/>
                <br/>
                <label>Do you agree to terms of service?: <Field name="terms" type="checkbox"/>
                {touched.terms && errors.terms && (<p>{errors.terms}</p>)}
                </label>
                <br/>
                <br/>
                <button>submit</button>
            </div>
        </Form>
        <UserDisplay users={users}/>
        {/* {user.name && (
            <ul key={user.id}>
                <li>Name: {user.name}</li>
            </ul>
        )} */}
        </div>
    )
}

export default withFormik({
    mapPropsToValues: props => ({
        name: props.name || "",email:"",password:"",terms:false
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string()
        .min(2,"Too short!")
        .max(50, "Too Long!")
        .required("This field is required"),
        terms: Yup.boolean()
        .oneOf([true], "Must accept terms of service")
    }),
    handleSubmit: (values, {resetForm, setStatus})=> {
        console.log(values)
        axios.post("https://reqres.in/api/users/",values)
        .then(response => {
            console.log("success");
            setStatus(response.data);
            resetForm();
        })
        .catch(err => console.log(err.response));

    }
    

})(UserForm)
        
