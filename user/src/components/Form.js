/**
 * Tom Bielawski
 * Lambda School WEB45
 * 2.3.3 Onboarding project Form.js
 * 7/21/2021
 **/

//Import statements
import React from "react";
 

//Form function definition
export default function Form(props)
{
    //
    const { values,  submit, change, disabled, errors } = props;

    //Change event function, takes event param
    const onChange = evt => 
    {
        //Destructure props
        const { value, name, type, checked } = evt.target;

        //Validate whether the checkbox is checked
        const valueToUse = type === "checkbox" ? checked : value;

        //...spread copies form, overwrites name [is a key] with value
        change(name, valueToUse);
    }

    //Submit function takes event parameter
    const onSubmit = evt => 
    {
        //Prevent refresh on submit
        evt.preventDefault();

        //Submit() destructured from props
        submit();
    }

    //Return function
    return (
        // Form begins
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h1>Project 2.3.3 Onboarding </h1>

                <div> User information area
                    <div>Name field errors: {errors.name}</div>
                    <div>Password field errors: {errors.password}</div>
                    <div>Email errors: {errors.email}</div>
                    <div>TOS errors {errors.terms}</div>
                </div>
            </div>   
            <div className = 'form-group inputs'>
                <h2> Please Enter Your information</h2>

                {/* Name Label */}
                <label htmlFor = "name"> Name&nbsp; 
                    {/* Input takes 5 attributes */}
                    <input
                        value = {values.name}
                        name = "name"
                        placeholder = "name"
                        type = "text"
                        onChange = {onChange}
                    />
                </label>

                {/* Password Label */}
                <label htmlFor = "password"> Password&nbsp; 
                    {/* Input takes 5 attributes */}
                    <input
                        value = {values.password}
                        name = "password"
                        placeholder = "password"
                        type = "text"
                        onChange = {onChange}
                    />
                </label>

                {/* Email Label */}
                <label htmlFor = "email"> Email&nbsp; 
                    {/* Input takes 5 attributes */}
                    <input
                        values = {values.email}
                        name = "email"
                        placeholder = "email"
                        type = "text"
                        onChange = {onChange}
                    />
                </label>

                {/* TOS checkbox label */}
                <label htmlFor = "terms"> Terms of Service&nbsp; 
                    <input 
                    type = "checkbox"
                    name = "terms"
                    onChange={onChange}
                    checked={values.terms}
                       />
                </label>
                <button disabled={disabled}>SUBMIT THIS!</button>        
            </div>
        </form>
    )
}