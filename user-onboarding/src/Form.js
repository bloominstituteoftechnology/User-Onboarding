import React, { useState, useEffect } from "react";
import Axios from "axios";
import * as yup from "yup";


const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    terms: yup.boolean().oneOf([true], "Please agree to terms of use")

});



export default function Form () {
  
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false

    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    // Everytime formState changes, check to see if it passes verification.
    // If it does, then enable the submit button, otherwise disable
    useEffect(() => {
      formSchema.isValid(formState).then(valid => {
        setButtonDisabled(!valid);
      });
    }, [formState]);
  
    const [errorState, setErrorState] = useState({
      name: "",
      email: "",
      password: "",
      terms: ""
    });

    const validate = event => {
        let value =
          event.target.type === "checkbox" ? event.target.checked : event.target.value;
        yup
          .reach(formSchema, event.target.name)
          .validate(value)
          .then(valid => {
            setErrorState({
              ...errorState,
              [event.target.name]: ""
            });
          })
          .catch(err => {
            setErrorState({
              ...errorState,
              [event.target.name]: err.errors[0]
            });
          });
      };

    const inputChange = event => {
        event.persist();
        console.log('input changed', event.target.value, event.target.checked);
        validate(event);
        let value=
        event.target.type === "checkbox" ? event.target.checked : event.target.value;
        setFormState({...formState, [event.target.name]: value });
    };

    const formSubmit = event => {
        event.preventDefault();
        console.log("form submitted");
        Axios
        .post("https://reqres.in/api/users", formState)
        .then(Response => console.log(Response))
        .catch(err => console.log(err));
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={formState.name}
            onChange={inputChange}
             />
            <br />

            <label htmlFor="email">Email
            {errorState.email.length > 0 ? (
          <p className="error">{errorState.email}</p>
        ) : null}
            </label>
            <input type="text" name="email" id="email" value={formState.email}
            onChange={inputChange}
            />
            <br/>

            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={formState.password}
            onChange={inputChange}
            />
            <br/>

            <label htmlFor="terms">Terms & Conditions
            {errorState.terms.length > 0 ? (
          <p className="error">{errorState.terms}</p>
        ) : null}
        </label>
            <input type="checkbox" id="terms" name="terms" checked={formState.terms}
            onChange={inputChange}
            />
            <br/>

            <button disabled={buttonDisabled}>Submit</button>
        </form>
    );
}

