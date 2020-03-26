import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    name: yup.string().required("Please enter your name :)"),
    email: yup.string().email().required("Don't forget to enter your email! How else can we send you tons of junk mail?!"),
    userPassword: yup.string().min(1).required("Please add an overly complicated password, that you will most assuredly forget in the next 5 seconds."),
    terms: yup.boolean().oneOf([true], "Please accept these terms and then we will teach you the secret handshake")
})

export default function Form() {
    // managing state for our form inputs
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        userPassword: "",
        terms: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        userPassword: "",
        terms: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const [users, setUsers] = useState([]);

    useEffect(() => {

        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid);
        });

    }, [formState]);

    const validateChange = e => {
        yup
            .reach(formSchema, e.target.name)
            .validate(e.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [e.target.name]: ""
                });

            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [e.target.name]: err.errors[0]
                });
            });
    }
    const formSubmit = e => {
        e.preventDefault();
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setUsers(users.concat(res.data));
                console.log("success", users);

                setFormState({
                    name: "",
                    email: "",
                    userPassword: "",
                    terms: "",
                });
            })
            .catch(err => console.log(err.response));

    };

    const inputChange = e => {
        e.persist();
        const newFormData = {
            ...formState,
            [e.target.name]:
                e.target.type === "checkbox" ? e.target.checkbox :
                    e.target.value
        };
        validateChange(e);
        setFormState(newFormData)
    };
    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}

            </label>
            <label htmlFor="email">
                Email
      <input
                    id="email"
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errors.email.length > 0 ? (
                    <p className="error">{errors.email}</p>
                ) : null}
            </label>
            <label HTMLfor="userPassword">
                Password (8 characters minimum):
                <input
                    id="userPassword"
                    type="password"
                    name="userPassword"
                    value={formState.userPassword}
                    onChange={inputChange}
                />
                {errors.userPassword.length > 0 ? (
                    <p className="error">{errors.userPassword}</p>
                ) : null}
            </label>
            <label HTMLfor="terms" className="terms">
                Terms of Service
                <input
                    type="checkbox"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange} 
                />
            </label>
            <pre>{JSON.stringify(users, null, 2)}</pre>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
    );
} 
