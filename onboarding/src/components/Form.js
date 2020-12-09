import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";

const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .required("Name is required"),
    email: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: Yup
        .string()
        .required("Password is Required")
        .min(6, "Passwords must be at least 6 characters long"),
    terms: Yup
        .boolean()
        .oneOf([true], "Give me the data.")
   
});  

const Form = () => {
    const [userData , setUserData] = useState({ name: "", email: "", password: "", terms: false});
    const [errors , setErrors] = useState({ name: "", email: "", password: "", terms:""});
    const [disabled , setDisabled] = useState(true);

    const setFormErrors = (name , value) => {
        Yup.reach(formSchema , name).validate(value)
        .then( () => setErrors({...errors , [name]: ""}))
        .catch(err => setErrors({...errors , [name]: err.errors[0] }))
    }

    const handleChange = event => {
        const { name, type, value, checked } = event.target;
        const updateInfo = type === 'checkbox' ? checked : value;
        setFormErrors(name ,updateInfo )
        setUserData({...userData , [name]: updateInfo});
    };

    const [post , setPost] = useState([]);
    useEffect( () => {
        formSchema.isValid(userData).then(valid => setDisabled(!valid))
    },[userData])

    const [users , SetUsers] = useState([]);

    const submitForm = (event) => {
        event.preventDefault();
        axios.post("https://reqres.in/api/users" , userData)
        .then(res => {
            setPost(res.data);
            console.log("success" , res);
            SetUsers(...post)
            JSON.stringify(users, null, 2);
            setUserData({ name: "", email: "", password: "", terms: false});
        } )
        .catch(err => console.log(err.response));
        console.log(userData)
    
      }

    

    return (
        
        <div className="errorList">
            <div>{errors.name}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <form onSubmit = {submitForm}>
            <label htmlFor = "name">Name</label>
                <input
                id="name"
                name = "name"
                value = {userData.name}
                type = "text"
                placeholder = "Enter Name"
                onChange = {handleChange}
                />
            
            <label htmlFor = "email">Email</label>
                <input
                id="email"
                name = "email"
                value = {userData.email}
                type = "text"
                placeholder = "Enter Email"
                onChange = {handleChange}
                />

            <label htmlFor = "password">Password</label>
                <input
                id="password"
                name = "password"
                value = {userData.password}
                type = "text"
                placeholder = "Enter Password"
                onChange = {handleChange}
                />
            

            <label htmlFor ="terms">Terms And Conditions</label>
                <input
                id="terms"
                name = "terms"
                type = "checkbox"
                checked = {userData.terms}
                value = "terms"
                placeholder = "Terms And Conditions"
                onChange = {handleChange}
                />
            

            <button disabled={disabled} type = "submit">Submit</button>
        </form>
        </div>


    )
    
}

export default Form;