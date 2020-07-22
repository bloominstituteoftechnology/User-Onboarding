import React, { useState , useEffect } from 'react'
import * as yup from "yup";
import axios from 'axios'
import Input from './Input'

function Form() {
    const defaultState = {
        name: "",
        email: "",
        password: "",
        terms: false
      };
      const [formState, setFormState] = useState(defaultState);
      const [errors, setErrors] = useState({ ...defaultState, terms: "" });
      const [buttonDisabled, setButtonDisabled] = useState(true);
    

      let formSchema = yup.object().shape({
        name: yup.string().required("Please Provide First and Last Name."),
        email: yup
          .string()
          .required("Please provide a email.")
          .email("This is not a valid email."),
        password: yup
          .string()
          .required("Invalid Password.").min(6,'Password Must Contain 6-10 Characters.').max(10,'Password Must Contain 6-10 Characters.'),
        position: yup.string(),
        terms: yup
          .boolean()
          .oneOf([true], "Please agree to the terms and conditions")
      });
    
      useEffect(() => {
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
      }, [formState]);
    

      const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(() => console.log("form submitted success"))
          .catch(err => console.log(err));
      };
    
      const validateChange = e => {
        e.persist();
        yup
          .reach(formSchema, e.target.name)
          .validate(e.target.value)
          .then(valid =>
            setErrors({
              ...errors,
              [e.target.name]: ""
            })
          )
          .catch(error =>
            setErrors({
              ...errors,
              [e.target.name]: error.errors[0]
            })
          );
        if (e.target.value.length === 0) {
          setErrors({
            ...errors,
            [e.target.name]: `${e.target.name} field is required`
          });
        }
      };

      const inputChange = e => {
        const value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({
          ...formState,
          [e.target.name]: value
        });
        validateChange(e);
      };
    
      return (
        <form onSubmit={formSubmit} >
          <Input
            type="text"
            name="name"
            onChange={inputChange}
            value={formState.name}
            label="Name"
            errors={errors}
          />
          <Input
            type="email"
            name="email"
            onChange={inputChange}
            value={formState.email}
            label="Email"
            errors={errors}
          />
          <Input
            type="password"
            name="password"
            onChange={inputChange}
            value={formState.password}
            label="Password"
            errors={errors}
          />


          <label className="terms" htmlFor="terms">
            <input name="terms" type="checkbox" onChange={inputChange} />
            Terms & Conditions
          </label>
          <button disabled={buttonDisabled}>Submit</button>
        </form> )

}

export default Form
