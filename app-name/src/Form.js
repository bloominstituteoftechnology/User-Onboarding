import React, {useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";
import {Card, CardBody} from "reactstrap";

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
            .required("Enter your password here."),
            //.password("This password is incorrect"),
         terms: yup
            .boolean()
            .oneOf([true], "Please agree to the terms and conditions.")

     });

     useEffect(() => {
         //setButtonDisabled(formSchema)
         if(formSchema.terms === true){
             setButtonDisabled(formState.terms);
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
         <Card style={{padding: "5%"}}>
         <form onSubmit={formSubmit} style={{padding: "1%", backgroundColor: "#ffffff"}}>
             <CardBody style={{}}>
             <h2>Name</h2>
             <input style={{marginBottom: "5%"}}
                type="text"
                name="name"
                placeholder= "Full Name"
                onChange={inputChange}
                value={formState.name}
                label="Name"
                errors={errors}
            />
            <h2>Email</h2>
            <input style={{marginBottom: "5%"}}
                type="email"
                name="email"
                placeholder= "Email"
                onChange={inputChange}
                value={formState.email}
                label="Email"
                errors={errors}
            />
            <h2>Password</h2>
            <input style={{marginBottom: "5%"}}
                type="text"
                name="password"
                placeholder= "Type In Your Password"
                onChange={inputChange}
                value={formState.password}
                label="Password"
                errors={errors}
            />
            </CardBody>
            <label className="terms" htmlFor="terms" style={{display: "flex", padding: "3%", marginLeft: "25%"}}>
                <h6>Please Accept The Terms and Conditions</h6>
                <input
                    type="checkbox" style={{marginLeft: "5%", marginTop: "1%"}}
                    name="terms"
                    onChange={inputChange}
                />
            </label>
            <button onSubmit={buttonDisabled} style={{backgroundColor: "#14213d", color: "#fca311", padding: "1%"}}>Submit</button>
         </form>
         </Card>
     );
}
