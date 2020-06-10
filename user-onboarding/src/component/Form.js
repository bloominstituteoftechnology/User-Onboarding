import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
   const [post, setPost] = useState([]);

  const [serverError, setServerError] = useState("");


  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "true"
  });

  
  const [buttonDisabled, setButtonDisabled] = useState(true);

  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });

 
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"), 
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email"), 
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z@]/),
    terms: yup.boolean().oneOf([true])
  });

  
  useEffect(() => {
    console.log(
      "checking to see if all values in form state follows the rules set in formSchema"
    );
    formSchema.isValid(formState).then(isFormValid => {
      console.log("is form valid?", isFormValid);
      setButtonDisabled(!isFormValid); 
    });
  }, [formState]);

 
  const formSubmit = e => {
    e.preventDefault(); 

    
    axios
      .post("https://reqres.in/api/users", formState)
      .then(res => {
        
        setPost(res.data);
        console.log("successful API POST!");

       
        setFormState({
          name: "",
          email: "",
          password: "",
          terms: ""
        });

       
        setServerError(null);
      })
      .catch(err => {
        
        setServerError("oops! something happened!");
      });
  };

 
  const validateChange = e => {
    
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value) 
      .then(inputIsValid => {
        
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
  };

  
  const inputChange = e => {
    
    e.persist(); 
    console.log("input changed!", e.target.value);
    console.log("name of input that fired event", e.target.name); 

    const newFormData = {
      ...formState,
      [e.target.name]:
        e.target.name === "terms" ? e.target.checked : e.target.value 
    };

    validateChange(e); 
    setFormState(newFormData); 
  };

  return (
    <form onSubmit={formSubmit}>
      {serverError ? <p className="error">{serverError}</p> : null}
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          onChange={inputChange}
          value={formState.name}
        />
        {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          onChange={inputChange}
          value={formState.email}
        />
        {errors.email.length > 0 ? (
          <p className="error">{errors.email}</p>
        ) : null}
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Please enter your password"
          value={formState.password}
          onChange={inputChange}
        />
        {errors.password.length > 0 ? (
          <p className="error">{errors.password}</p>
        ) : null}
      </label>
      <br />

      <label htmlFor="terms" className="terms">
        <input
          id="terms"
          type="checkbox"
          name="terms"
          checked={formState.terms}
          onChange={inputChange}
        />
        Terms and Conditions
        {errors.terms.length > 0 ? (
          <p className="error">{errors.terms}</p>
        ) : null}
      </label>
      <button type="submit" disabled={buttonDisabled}>
        Submit
      </button>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
  );
}
