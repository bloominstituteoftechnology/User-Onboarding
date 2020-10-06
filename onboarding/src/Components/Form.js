import React, {useState, useEffect} from 'react';
import '../App.css';
import * as Yup from "yup";
import axios from 'axios'

function Form( props) {

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
      });
      const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
      });
      const [buttonDisabled, setButtonDisabled] = useState(true);

      const [post, setPost] = useState([]);

    const formSchema = Yup.object().shape({
        name: Yup
        .string()
        .required("Must include name."),
        email: Yup
          .string()
          .email("Must be a valid email address.")
          .required("Must include email address."),
        password: Yup
          .string()
          .min(6, "Passwords must be at least 6 characters long.")
          .required("Password is Required"),
        terms: Yup
        .boolean()
        .oneOf([true])
      });

      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState]);

      

      const inputChange = e => {
        e.persist();
        Yup
        .reach(formSchema, e.target.name)
        .validate(e.target.value)
        .then(valid => {
          setErrors({
            ...errors,
            [e.target.name]: ""
          });
          if(e.target.name =='terms'){
            setErrors({
                ...errors,
                terms: "Must accept these terms"
            });
        }
        })
        .catch(err => {
          setErrors({
            ...errors,
            [e.target.name]: err.errors[0]
          });
          if(e.target.name =='terms'){
          setErrors({
            ...errors,
            terms: ""
          });
        }
        });
        if(e.target.name != 'terms')
        {
            setFormState({
                ...formState,
                [e.target.name]: e.target.value
            })
        }
        else{
            setFormState({
                ...formState,
                [e.target.name]: e.target.checked
            })
        }
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("submitted!");
        axios
          .post("https://reqres.in/api/users", formState)
          .then(res => {
            setPost(res.data); 
            console.log("success", res);
            props.sub(res.data);
            setFormState({name: "",
            email: "",
            password: "",
            terms: false})

          })
          .catch(err => console.log(err.response));
      };

    
  return (
    <form onSubmit={formSubmit}>
    <label htmlFor="emailInput">
      Name:
      <input id="nameInput" type="name" name="name" placeholder="Name" onChange={inputChange} value = {formState.name}/>
    </label>
    
    <br/>
    <label htmlFor="emailInput">
      Email:
      <input id="emailInput" type="email" name="email" placeholder="Email" onChange={inputChange} value = {formState.email}/>
    </label>
       
    <br/>
    <label htmlFor="passwordInput">
      Password:
      <input id="passwordInput" type="password" name="password" placeholder="Password" onChange={inputChange} value = {formState.password}/>
    </label>
    
    <br/>
    <label htmlFor="termsInput">
      Do you agree to the terms and conditions?
      <input id="termsInput" type="checkbox" name="terms" onChange={inputChange} checked = {formState.terms}/>
    </label>
   
    <br/>
    <button disabled = {buttonDisabled} >Submit!</button>
    {errors.terms.length > 0 ? (<p className="error">{errors.terms}</p>) : null}
    {errors.email.length > 0 ? (<p className="error">{errors.email}</p>) : null}
    {errors.password.length > 0 ? (<p className="error">{errors.password}</p>) : null}
    {errors.name.length > 0 ? (<p className="error">{errors.name}</p>) : null}
    
  </form>
  );
}

export default Form;
