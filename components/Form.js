import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import Axios from 'axios'
import { Input, Form, FormGroup } from "reactstrap"



export defualt function signUpForm(){

    //Form data initial state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    })

    //Setting error state, empty strings used for error messages
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms:""
    })

    //Setting state of button so its disabled until yup rules are valid, validated and enabled in use effect
    const [buttonDisable, setButtonDisable] = useState(true) //useState is set to true meaning the state is true

    //Setting state of post request, setting to empty array so we can post new users into it, state displayed in JSON.stringify
    const [post, setPost] = useState([])
    
    const Submit = (e) => {
     //Preventing default button behavior    
        e.preventDefault()
        console.log('submitted')
    //Making axios post request
        Axios
    .post("https://reqres.in/api/users", formData) // why is formData after the url?
    .then((res) => {
        setPost(res.data)
        console.log("success", res.data)
        // Setting form state back to empty after post/submit
        setFormData({
            name:"",
            email:"",
            password:"",
            terms:false
        })
    })
}

    //Change handler for inputting fields
    const handleChanges = (e) => { 
        e.persist() // ????
        const newFormData = {
            ...formData,
            [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value // ??? 
        }
        setFormData(newFormData)
    }

    //Implementing yup and setting rules, shape is used to create the type I.E: array or object
    const formRules = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup
        .string()
        .email("Must be a valid email") //yup's inline check to see if what was entered was a email
        .required("Email is required"),
        password: yup
        .string()
        .min(5)
        .max(18)
        .required("Password is required"),
        terms: yup.boolean().oneOf([true], "Please agree to Terms")       
    })

    //Checking if yup validation rules are broken
    const Validation = (e) => {
        yup
        .reach(formSchema, e.target.name) // Grabbing rules from formRules, why is e.target.name used here?
        .validate(e.target.name === "terms" ? e.target.checked : e.target.value) // ?????
        //if form is vaild no errors codes will be shown
        .then ((valid) => {
        setErrors({
            ...errors,
            [e.target.name]: ""
            })
        })
        //if form isn't vaild erros will be shown
        .catch((err) => {
            setErrors({
                ...errors,
                [e.target.name]: err.errors[0] // why is errors set to the first place in the array?
                    })
                })
    }

    //Use effect used for whenever state change happens, if form is vaild btn will be enabled
    useEffect(() => {
        Validation.isValid(formData) 
        .then((isValid) => {
            setButtonDisable(!isValid)
        })
    }, [formData]) // is useEffect vailating against formData and thats why its set in the dependacy?

    return (
        //Creating form
        <Form onSubmit={Submit}>
            <FormGroup htmlFor="name">
                Name
                <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your first name..."
                value={formData.name}
                onChange={handleChanges}
                />
                {/* Calling name's error if rules are broken and displaying error code, why is length set to 0? */}
                {errors.name.length > 0 ? (
                    <p className="nameErr">{errors.name}</p>
                    // Null is used when there is no errors
                ) : null}
            </FormGroup>
            <FormGroup htmlFor="email">
                Email
                <Input
                id="email"
                type="email"
                name="email"
                placeholder="Please enter your email..."
                value={formData.email}
                onChange={handleChanges}
                />
                {errors.email.length > 0 ? (
                    <p className="emailErr">{errors.email}</p>                   
                ) : null} 
            </FormGroup>
            <FormGroup htmlFor="password">
                Password
                <Input
                id="password"
                type="password"
                name="password"
                placeholder="Please create a password..."
                value={formData.password}
                onChange={handleChanges}
                />
                {errors.password.length > 0 ? (
                    <p className="passwordErr">{errors.password}</p>
                ) : null}
            </FormGroup>
            <FormGroup htmlFor="terms">
                <Input
                id="terms"
                type="checkbox"
                name="terms"
                value={formData.terms}
                onChange={handleChanges}
                />
                Terms and Conditions
                {errors.terms.length > 0 ? (
                    <p className="termsErr">{errors.terms}</p>
                ): null}
            </FormGroup>
            <button disabled={buttonDisable} type="submit" >
                Submit
            </button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </Form>
    )
}