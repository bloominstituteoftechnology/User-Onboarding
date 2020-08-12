import React, { useState } from "react";


function Form() {

    // managing State for form inputs

    const [formState, setFormState] = useState({ 
        name: "",
        email:"",
        password:"",
        terms: false
        });

    // onSubmit Function

    const formSubmit =e => {
        e.preventDefault();
        console.log("form submitted!");
    };

    // onChange Function 

    const inputChange = e => {
        console.log("input changed!", e.target.name, e.target.checked);
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFormState({...formState, [e.target.name]: value });
    };

    return(
        <form onSubmit ={formSubmit}>
            <label htmlFor="name">
                Name    
                <input type="text" name="name" id="name" placeholder="Please Enter Name" value={formState.name} onChange={inputChange} />
            </label>
            <br></br>
            <label htmlFor="email">
                email
                <input type="email" name="email" id="email" placeholder="Please Enter Email" value={formState.email} onChange={inputChange} /> 
            </label>
            <br></br>
            <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder="Please Enter password" value={formState.password} onChange={inputChange} />
            </label>
            <br></br>
            <label htmlFor="Terms of Service">
                Do you agree to the Terms of Service?
                <input type="checkbox" name="terms" id="terms" checked={formState.terms} onChange={inputChange} />
            </label>
            <br></br>
            <button>Submit</button>
        </form>



                   

    );
}

export default Form