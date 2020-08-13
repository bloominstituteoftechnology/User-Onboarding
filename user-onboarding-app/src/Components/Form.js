import React, { useState, useEffect } from "react";


export default function Form() {
    //managing the state of out form, this is where the data is going to be held hostage by this state ;)
    
    const [formState, setFormState] =useState({
        name: "",
        email: "",
        password: "",
        terms:true
    });

    


    
    
    //form layout vvv
    return(
        <form>
            <label htmlFor="name">
                Name 
                <input
                id="name" 
                type="text"
                name="name"
                />

            </label>
            <label htmlFor="email">
                Email 
                <input
                id="email" 
                type="text"
                name="email"
                />

            </label>
            <label htmlFor="password">
                Password 
                <input
                id="password" 
                type="text"
                name="password"
                />

            </label>
            <label htmlFor="terms" className="terms">
                Name 
                <input
                id="terms" 
                type="checkbox"//checkbox is for the terms box
                name="terms"
                />

            </label>
            <button>Submit Form</button>
        </form>
    )
}