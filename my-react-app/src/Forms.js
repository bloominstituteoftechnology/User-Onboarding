import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup.string().required("Must include password"),
  terms: yup.boolean().oneOf([true], "please agree to the terms"),
  roles: yup
});

const Forms = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);

  //state for form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });
// state for errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    terms: ""
  });
// state to set the post request
  const [post, setPost] = useState([]);


  useEffect(()=> {
      formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
      });
  }, [formState]);


  const formSubmit = e => {
      e.preventDefault();
      axios.post("https://reqres.in/api/users", formState)
      .then(response => {
          setPost(response.data);
          console.log("success", post);
          setFormState({
              name:"",
              email:"",
              password:"",
              terms:""
          })
      })
      .catch(error => console.log(error.response));
  };


  const validateChange = e => {
    //Reach will allow us to "reach" into schema and test only part
      yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value || e.target.checked)
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
  };


const inputChange = e => {
    e.persist();
    const newFormData = {
        ...formState,
        [e.target.name]: 
        e.target.type === "checkbox" ? e.target.checked : e.target.value
    };
    validateChange(e);
    setFormState(newFormData);
};


  return (
    <form onSubmit={formSubmit}>
      
        <label htmlFor="name">
          Name:
          <input type="text" name="name" placeholder="Name" value={formState.name} onChange={inputChange}/>
        </label>
        {errors.name.length > 0 ? <p className="error">{errors.email}</p>: null}

        <label htmlFor="email">
          Email:
          <input type="email" name="email" placeholder="Email" value={formState.email} onChange={inputChange}/>
        </label>
        {errors.email.length > 0 ? <p className="error">{errors.email}</p>: null}

        <label htmlFor="password">
          Password:
          <input type="text" name="password" placeholder="Password" value={formState.password} onChange={inputChange}/>
        </label>
        {errors.password.length > 0 ? <p className="error">{errors.password}</p>: null}

        <label htmlFor="check-box">
          Check Box:
          <input
            type="checkbox"
            name="terms"
            checked={formState.terms} onChange={inputChange}/>
        </label>
{//Display past request data}
        <pre>{JSON.stringify(post, null, 2)}</pre>
          <button disable={buttonDisable} type="submit">SUBMIT</button>
        
      </div>
    </form>
  );
};

export default Forms;
