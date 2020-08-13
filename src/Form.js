import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Form = () => {
 //setting state for form data

const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:'',
    terms: true
});
//state for button
const [buttonDisabled, setButtonDisabled] = useState(true);
//errors state
    const [errors, setErrors] = useState({
        name:'',
        email:'',
        password:'',
        terms:''
    })
// post state
    const [post,setPost] = useState();
//validate change function
    const validateChange = (e) => {
        yup.reach(dataSchema, e.target.name)
        .validate(e.target.value) //comparing the rule against the value
        .then((valid) => {
            setErrors({
                ...errors, [e.target.name] : ""
            })
        })
        .catch((err) => {
            setErrors({
                ...errors, [e.target.name]:err.errors[0]
            })
        });
    }
//change handler
    const change = (e) => {
        e.persist();
        const newFormData = {
            ...formData, 
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }
        //e.target.type === 'checkbox' ? e.target.checked : 
        validateChange(e);
        setFormData(newFormData);
    }
//submit function
const submitFunction = (event) => {
    event.preventDefault();
    axios.post("https://reqres.in/api/users", formData)
    .then((res) => {
        setPost(res.data);
        setFormData({
            name: '',
            email:'',
            password:'',
            terms: true
        })
    })
    .catch((err) => {
        console.log(err.response)
    });
}
//yup variable
    const dataSchema = yup.object().shape({
        name:   yup.string().required("Name Is Required"),
        email:  yup.string().email("Must Be Valid Email").required("Email is required"),
        password: yup.string().required("Password is required"),
        terms:  yup.boolean().oneOf([true], "Must Accept Terms Of Surrender")
    });
//use effect to check state versus yup requirements
    useEffect(() => {
        dataSchema.isValid(formData).then((isValid) => {
            setButtonDisabled(!isValid);
        });
    }, [formData]);

    return(
        <form onSubmit = {submitFunction}>
            <label htmlFor = "name">
                Name
                <input id = "name"
                       type = "text" 
                       name = "name"
                       value = {formData.name}
                       onChange = {change}
                />
              {errors.name.length > 0 ? <p>{errors.name}</p> : null}
            </label>
            <label htmlFor = "email">
                Email
                <input id = "email" 
                       type = "email" 
                       name = "email"
                       value = {formData.email}
                       onChange = {change}
                />
                {errors.email.length > 0 ? <p>{errors.email}</p> : null}
            </label>
            <label htmlFor = "password">
                Password
                <input id = "password"
                       type = "password" 
                       name = "password"
                       value = {formData.password}
                       onChange = {change}
                />
                {errors.password.length > 0 ? <p>{errors.password}</p> : null}
            </label>
            <label htmlFor = "terms">
                Terms of Service
                <input id = "terms"
                       type = "checkbox" 
                       name = "terms"
                       checked = {formData.terms}
                       onChange = {change}
                />
                {errors.terms.length > 0 ? <p>{errors.terms}</p> : null}
            </label>
            <button disabled = {buttonDisabled} type = "submit">Submit</button>
            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
    );
}

export default Form;