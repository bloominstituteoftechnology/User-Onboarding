import axios from "axios";
import * as yup from "yup";
import React, { useEffect, useState } from "react";


const formSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  email: yup.string().email("Must be a valid email address").required(),
  password: yup.string().required("No password provided."),
  terms: yup.boolean().oneOf([true], "You must agree to sign your life away!"),
});

export default function Form(props) {
  
  // console.log(props)

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateChange = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setErrors({ ...errors, [e.target.name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [e.target.name]: err.errors[0] });
      });
  };
  useEffect(() => {
    formSchema.isValid(formState).then((valid) => {
      setIsButtonDisabled(!valid);
    });
  }, [formState]);

  const onChange = (e) => {
    e.persist();
    validateChange(e);
    if (e.target.name === "terms") {
      setFormState({ ...formState, terms: e.target.checked });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
    axios
      .post("https://reqres.in/api/users", formState)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    
    <form onSubmit={formSubmit}>
      <h1> USER </h1>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        value={formState.name}
        onChange={onChange}
      />
      {errors.name.length > 0 ? <p>{errors.name} </p> : null}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={formState.email}
        onChange={onChange}
      />

      {errors.email.length > 0 ? <p>{errors.email} </p> : null}

      <label htmlFor="password" className="password">
        Password
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={onChange}
        />
        {errors.password.length > 0 ? <p>{errors.password} </p> : null}
      </label>

      <label>
        <input
          type="checkbox"
          name="terms"
          value={formState.terms}
          onChange={onChange}
          id="check"
        />{"  I Agree To The Terms Of Service"}
       
      </label>

      <button type="button" disabled={isButtonDisabled}>
        Click Me!
      </button>
    </form>
    
    
  



    
    


  );
}
