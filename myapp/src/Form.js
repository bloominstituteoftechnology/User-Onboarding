import React, {useState, useEffect} from "react";
import Input from "./Input"
import * as yup from "yup";
import axios from "axios";

export default function Form () {
     const defaultState = {
         name: "",
         email: "",
         password: "",
         terms: false
     };

     const [formState, setFormState]=useState(defaultState);
     const [errors, setErrors]=useState(defaultState);
     const [buttonDisabled, setButtonDisabled]=useState(true);

     let formSchema=yup.object().shape({
         name: yup
            .string()
            .required("Please enter your name."),
         email: yup
            .string()
            .required("Please enter your email. ")
            .email("Not a valid email."),
         password: yup
            .string()
            .required("Enter your password here.")
            .password("This password is incorrect"),
         terms: yup
            .boolean()
            .oneOf([true], "Please agree to the terms and conditions.")

     });

     useEffect(() => {
         if(formSchema.state.terms){
             setButtonDisabled(!formState.terms);
         }
     }, [formState]);

     const formSubmit=e => {
         e.preventDefault();
         console.log("form submitted");
         axios
            .post("https://reqres.in/api/users", formState)
            .then(() => console.log("form submitted sucessfully"))
            .catch(err => console.log(err));
     };
     const validateChange=e => {
         e.persist();
         if(e.target.value.length === 0) {
             setErrors({
                 ...errors,
                 [e.target.name]: `${e.target.name} field is required.`
             });
         }
     };
     const inputChange=e => {
         const value=
         e.target.type === "checkbox" ? e.target.checked : e.target.value;
         setFormState({
             ...formState,
             [e.target.name]: value
         });
         validateChange(e);
     };
     return (
         <form onSubmit={formSubmit}>
             <Input
                type="text"
                name="name"
                onChange={inputChange}
                value={formState.name}
                label="Name"
                errors={errors}
            />
            <Input
                type="email"
                name="email"
                onChange={inputChange}
                value={formState.email}
                label="Email"
                errors={errors}
            />
            <Input 
                type="text"
                name="password"
                onChange={inputChange}
                value={formState.password}
                label="Password"
                errors={errors}
            />
            <label className="terms" htmlFor="terms">
                <Input 
                    type="checkbox"
                    name="terms"
                    onChange={inputChange}
                />
            </label>
            <button disabled={buttonDisabled}>Submit</button>
         </form>
     );
}
