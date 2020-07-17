import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Users from './Users';

//need name, email, password, terms of service checkbox and a submit button
const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field."),
    email: yup
        .string()
        .email("Must be a valid e-mail address.")
        .required("Must include an e-mail address."),
    password: yup
    .string()
    .required("Must include a password."),
    terms: yup.boolean().oneOf([true],"Please agree to the Terms of Service.")
});

export default function Form(){
    const [formState, setFormState] = useState ({
        name: "",
        email: "",
        password: "",
        terms:false

    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(()=> {
        formSchema.isValid(formState).then(valid=>{
            setButtonDisabled(!valid);
        });
    }, [formState]);

    const [errorState, setErrorState] = useState({
        name:"",
        email: "",
        password: "",
        terms: ""
    });

    const [users, setUsers] = useState([]);

    const validate = e => {
        let value = 
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
            yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = 
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({...formState, [e.target.name]: value});
    };

    const formSubmit = e => {
        e.preventDefault();
        console.log("Form Submitted!");
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            console.log(response);
            setUsers([...users, response.data]);
            setFormState({name:"",email:"",password:"",terms:false});
        })
        .catch(err => console.log(err))
    }; 

return(
    <div id="container">
    <form onSubmit={formSubmit}>
        <label htmlFor="name">
            Name:
            <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errorState.name.length > 0 ? (
                    <p className="error">{errorState.name}</p>
                ):null}
        </label>
        <label htmlFor="email">
            <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ):null}
        </label>
        <label htmlFor="password">
            <input 
                type="password"
                name="password"
                id="password"
                value={formState.password}
                onChange={inputChange}
                />
                {errorState.password.length > 0 ? (
                    <p className="error">{errorState.password}</p>
                ):null}
        </label>
        <label htmlFor="terms">
            <input 
            type="checkbox"
            id="terms"
            name="terms"
            checked={formState.terms}
            onChange={inputChange}
            />
           <span id="fakelink"> Terms of Service</span>
           {errorState.terms.length > 0 ? (
               <p className="error">{errorState.terms}</p>
           ):null}
        </label>
        <button disabled={buttonDisabled}>Submit</button>
    </form>

   
    <Users props={users}/>
    </div>
)
};
