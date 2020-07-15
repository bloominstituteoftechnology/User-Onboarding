import React, { useState , useEffect } from 'react'
import * as yup from "yup";
import axios from 'axios'

function Form() {

    const defaultFormState = {
        name: "",
        email: "",
        password: "",
        terms: false
    };

    const [ formState, setFormState ] = useState(defaultFormState);
    const [ errors, setErrors ] = useState({...defaultFormState, terms: " "});
    const [ buttonDisabled, setButtonDisabled ] = useState(true);

    let formSchema = yup.object().shape({
        name: yup.string().required("Please Enter Full Name Here"),
        email: yup.string().required("Please Enter Email Here").email("Invalid Email"),
        password: yup.string().required("Please Enter a Password Here").min(6, 'Must Enter 6-10 Characters').max(11,'Must Enter 6-10 Characters'),
        terms: yup.boolean().oneOf([true], 'Must Agree to Terms and Conditions to Continue')
    })

    useEffect (() => {
        if (formState.terms) {
            setButtonDisabled(!formState.terms);
        }
    }, [formState] );

    const formSubmit = event => {
        event.preventDefault();
        console.log('Submitted');
        axios 
            .post("https://reqres.in/api/users", formState)
            .then(() => console.log('Form Submitted'))
            .catch(error => console.log('Form Error',error))
    }

    const validateForm = event => {
        event.persist();

        if (event.target.value === 0 ) {
            setErrors({...errors,[event.target.name]:`${event.target.name} is required`})
        }
    }


    const formChange = event => {
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({
            ...formState, [event.target.name] : value
        })
        validateForm(event);
    }


    return (
        <div>
            <form onSubmit={formSubmit}>
                <input
                    type="text"
                    name="name"
                    label="Name"
                    placeholder="First and Last Name Here"
                    onChange={formChange}
                    value={formState.name}
                    errors={errors}
                />

                <input
                    type="text"
                    name="email"
                    label="Email"
                    placeholder="Email"
                    onChange={formChange}
                    value={formState.email}
                    errors={errors}
                />

                <input
                    type="text"
                    name="password"
                    label="Password"
                    placeholder="Password"
                    onChange={formChange}
                    value={formState.password}
                    errors={errors}
                />

                <label htmlFor="terms">
                    <input
                        type="checkbox"
                        name="terms"
                        onChange={formChange}
                    />
                    Terms & Conditions
                </label>

                <button disabled={buttonDisabled}>Submit</button>         
            </form>
        </div>
    )
}

export default Form
