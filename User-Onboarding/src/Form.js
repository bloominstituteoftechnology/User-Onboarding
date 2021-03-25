import React from "react";
import * as yup from 'yup';



// FORM VALIDATION / SCHEMA - "Does it fit the scheme of the form : satisfy the goal of collecting information"


export default function newForm(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = (event) => {
        event.preventDefault(); // stops page refresh, 
        submit(); // invokes the submit function
    };

    const onChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };


return(
    <form className = "form" onSubmit={onSubmit}>
        <h2>Add a User</h2>
    <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.role}</div>
        <div>{errors.civil}</div>
    </div>
        <label>
            <input
                name="username"
                type="text"
                onChange={onChange}
                value={formValues.username}
                placeholder="Who art thou?"
                maxLength="30"
            />
            <br/>
            <input 
                name="email"
                type="text"
                onChange={onChange}
                value={formValues.email}
                placeholder="How to we hit you up?"
                maxLength="30"
            />
            <br/>
            <input
                name="password"
                type="password"
                onChange={onChange}
                value={formValues.role}
                placeholder="The holy word of access"
                maxLength="30"
            />
            <br/>
            <input
                name="termsOfService"
                type="checkbox"
                onChange={onChange}
                checked={values.termsAgreed} // where does this link??
            />
            <button disabled = {disabled}>Submit</button>
        </label>
    </form>
    )
}
