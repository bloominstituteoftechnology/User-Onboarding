import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import axios from "axios";

export default function Form({users, setUsers}) {

    //this is the react state
    const defaultState = {
        name: "",
        email: "",
        password: "",
        terms: false 
    }

    const [formState, setFormState] = useState(defaultState);
    const [errors, setErrors] = useState({ ...defaultState, terms: "" });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    

    //this is the formState schema

    let formSchema = Yup.object().shape({
        name: Yup.string().required("Please provide name."),
        email: Yup
          .string()
          .required("Please provide a email.")
          .email("This is not a valid email."),
        password: Yup
          .string()
          .required("Please enter a correct Password")
          .min(6, "Passwords must be at least 6 characters long."),
        terms: Yup
          .boolean()
          .oneOf([true], "Please agree to the terms and conditions")
      });

      useEffect(() => {
    //    one way is 
    //     formSchema.isValid(formState).then(valid => {
    //       setButtonDisabled(!valid);
    //     });
            if (formState.terms) {
                setButtonDisabled(!formState.terms);
            }
      }, [formState]);

    //this is use for the onsubmit function
      const formSubmit = e => {
        e.preventDefault();
        //I added axios data here so it does not fire a lot when its outside
        console.log("Form Submitted");
        // to reset form 
        setFormState({...errors});
        // console.log(formState.name)
        // console.log(formState.email);
        // console.log(formState.password);
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                console.log("form submitted success", res)
                //I set setUser here so it can retrieve the user data to the DOM
                setUsers(res.data);
                //this one is to add all the user 
                // setUsers([...users, formState]);
                console.log("success", users)
                setFormState({
                    name: "",
                    email:"",
                    password: ""                
                })
            })
            .catch(err => {
                console.log("This is the Error", err)
            });
    };


    //this is for the onchange function 
    const handleChange = e => {
        const valueCheck = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        e.persist();
    // yup.reach will allow us to "reach" into the schema and test only one part.
    // We give reach the schema as the first argument, and the key we want to test as the second.
        Yup
            .reach(formSchema, e.target.name)
    //we can then run validate using the value
            .validate(e.target.value)
    // if the validation is successful, we can clear the error message
            .then(valid => {
                setErrors({ ...errors, [e.target.name]: ""
            });
        })
    /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
            .catch(err => {
                setErrors({ ...errors, [e.target.name]: err.errors[0]
            });
        });

    // Wether or not our validation was successful, we will still set the state to the new value as the user is typing
        setFormState({
             ...formState,
         [e.target.name]: valueCheck
        });
    };

    
    return (
        
        <div className="form">
            <form onSubmit={formSubmit}>
                <h1>User Onboarding</h1>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={formState.name}
                    label="Name"
                    errors={errors}
                 />
                 {errors.name.length !== 0 && <p className="error">{errors.name}</p>}
            </label>
            <label htmlFor="email">
                Email
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={formState.email}
                    label="Email"
                    errors={errors}
                />
                {errors.email.length !== 0 && <p className="error">{errors.email}</p>}
            </label>
            <label htmlFor="password">
                Password
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={formState.password}
                    label="Password"
                    errors={errors}
                />
                {errors.password.length !== 0 && <p className="error">{errors.password}</p>}
            </label>
            <label className="terms" htmlFor="terms">
                <input name="terms" type="checkbox" onChange={handleChange}/>
                Terms of Service
            </label>
            <button disabled={buttonDisabled}>SUBMIT</button>
            <pre>{JSON.stringify(users, null, 2)}</pre>
        </form>
        
        </div>
        
    )
}

