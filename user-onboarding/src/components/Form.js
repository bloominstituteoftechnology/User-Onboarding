import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import { string } from 'yup/lib/locale';

// - [ ] Name
// - [ ] Email
// - [ ] Password
// - [ ] Terms of Service (checkbox)
// - [ ] A Submit button to send our form data to the server.


function Form() {

    // STATE
    const [formState, setFormState] = useState({
        firstName:"",
        lastName:'',
        email:"",
        password:"",
        terms:"",
    });

    const [btnDisabled, setBtnDisabled] = useState("");

    const [post, setPost] = useState([]);

    // YUP
    const validForm = yup.object().shape({
        firstName: yup
            .string()  // makes it a string
            .trim()    // trims white space
            .min(2, "The first name must be two characters long.")
            .required("The first name is a required field."),
        lastName: yup
            .string()
            .trim()
            .min(2, "The last names must be at least two characters long.")
            .required("The last name is a required field."),
        password: yup
            .string()
            .trim()
            .max(25, "The password max character limit is twenty-five (25)")
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
            )
            .required("The password is a required field."),
        email: yup
                .string()
                .email("The email must be a valid email address.")
                .required("The email is a required field."),
        terms: yup.boolean().oneOf([true], "You must accept the Terms of Service"),
    }); 

    // BUTTON (not sure about this)
    useEffect (()=> {
        console.log('FORM STATE CHANGE!')
        validForm.isValid(formState).then(valid => setBtnDisabled(!valid))
    }, [formState])

    // EVENT HANDLER
    const inputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const formSubmit = (e) => {
        e.preventDefault();

        axios
        .post("https://reqres.in/api/users", formState)
        .then(res => {
            console.log('is this working?', res); 
        })
        .catch(err => {
            console.log('ERR', err);
        });
    }
    
    const onTermsCheckboxChange = (e) => {
        console.log(e.target)
        setFormState({...formState, "terms": e.target.checked})
    }

console.log(formState)
    return (
        <form onSubmit={formSubmit}>
            <label>
                <input value={formState.firstName} onChange={inputChange} id="firstName" name="firstName" placeholder="First Name"/>
                <input value={formState.lastName} onChange={inputChange} id="lastName" name="lastName" placeholder="Last Name"/>
                <input value={formState.email} onChange={inputChange} id="email" name="email" placeholder="Enter Email" />
                <input value={formState.password} onChange={inputChange} id="password" name="password" placeholder="Enter Password" />
                <input isChecked={formState.terms} type="checkbox" onChange={onTermsCheckboxChange} name="checkbox" />
            </label>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Form;