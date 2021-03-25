import React from "react";
import * as yup from 'yup';



// FORM VALIDATION / SCHEMA - "Does it fit the scheme of the form : satisfy the goal of collecting information"


export default function newForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault(); // stops page refresh, 
        submit(); // invokes the submit function
    };

    const onChange = (event) => {  // onChange, an event,  perform: 
        const { name, value, type, checked } = event.target; // Targets the Keys that could change 
        const valueToUse = type === "checkbox" ? checked : value; // "valueToUse is the variable, that checks if the type of input is a checkbox, and IF it is checked, it's 'value' is true, and matches. Therefore is allowed."
        change(name, valueToUse); // change the name and value to use as described above by the ternary operator. 
    };


return(
    <form className = "form" onSubmit={onSubmit}>
        <h2>Add a User</h2>
    <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.termsOfService}</div>
    </div>
        <label>
            <h3>Username</h3>
            <input
                name="name"
                type="text"
                onChange={onChange}
                value={values.name}
                placeholder="Who art thou?"
                maxLength="30"
            />
        </label>
            <br/>
        <label>
            <input 
                name="email"
                type="text"
                onChange={onChange}
                value={values.email}
                placeholder="How to we hit you up?"
                maxLength="30"
            />
        </label>
            <br/>
        <label>
            <input
                name="password"
                type="password"
                onChange={onChange}
                value={values.password}
                placeholder="The holy word of access"
                maxLength="30"
            />
        </label>
            <br/>
        <label>
            <input
                name="termsOfService"
                type="checkbox"
                onChange={onChange}
                checked={values.termsOfService} // where does this link??
            />
        </label>
        <button disabled = {disabled}>Submit</button>
    </form>
    )
}
