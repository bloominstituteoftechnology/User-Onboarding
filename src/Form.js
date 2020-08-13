import React, { useState, useEffect } from "react";
import * as yup from 'yup';
import axios from 'axios';

//setting up yup 

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Please enter a valid email").required("Please enter a valid email address"),
    password: yup.string().required("Please enter your password"),
    terms: yup.boolean().oneOf([true], "Please agree to Terms and Conditions")
})

function Form() {

    // managing State for form inputs

    const [formState, setFormState] = useState({ 
        name: "",
        email:"",
        password:"",
        terms: false
        });

    
    //button disable

    const [buttonDisabled, setButtonDisabled] = useState("");
    // setting up errors

    const [errorState, setErrorState] = useState({
        name: "",
        email:"",
        password:"",
        terms: ""  
    })
    // onSubmit Function

    const formSubmit = (e) => {
        e.preventDefault();
        console.log("form submitted!");
        axios.post('https://reqres.in/api/users', formState)
        .then((res) => console.log(res.data),"success!!!")
        .catch(err => console.log(err),"Failed :(");
    };


    // validating form

    const validate = (e) => {
       yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then( valid => {
            setErrorState({
                ...errorState,
                [e.target.name]: ""
            })

        }) 
        .catch(err => {
            console.log(err.errors)
            setErrorState({
                ...errorState, 
                [e.target.name]: err.errors[0]
            })
        }) 
    }
        
    // onChange Function 

    const inputChange = e => {
        e.persist()
        console.log("input changed", e.target.value);
        const newFormData = {
            ...formState, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
        };
        validate(e)
        setFormState(newFormData)
    };

    useEffect(() => {
        formSchema.isValid(formState)
        .then((isValid) => {
            setButtonDisabled(!isValid);
        });
    }, [formState]);

    return(
        <form onSubmit ={formSubmit}>
            <label htmlFor="name">
                Name    
                <input type="text" name="name" id="name" placeholder="Please Enter Name" value={formState.name} onChange={inputChange} />
                {errorState.name.length > 0 ? <p classname="error">{errorState.name}</p> : null}
            </label>
            <br></br>
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder="Please Enter Email" value={formState.email} onChange={inputChange} />
                {errorState.email.length > 0 ? <p className="error">{errorState.email}</p> : null} 
            </label>
            <br></br>
            <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder="Please Enter password" value={formState.password} onChange={inputChange} />
                {errorState.password.length > 0 ? <p className="error">{errorState.password}</p> : null}            
            </label>
            <br></br>
            <label htmlFor="Terms of Service">
                Do you agree to the Terms of Service?
                <input type="checkbox" name="terms" id="terms" checked={formState.terms} onChange={inputChange} />
            {errorState.terms.length > 0 ? <p className="error">{errorState.terms}</p> : null}    
            </label>
            <br></br>
            <button disabled={buttonDisabled} type="submit">
                Submit
            </button>
        </form>

    );
}

export default Form