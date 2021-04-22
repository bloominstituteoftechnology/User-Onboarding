import React from 'react';

export default function Form(props){
    const { values, change, submit, errors, disabled } = props;

    const onSubmit = (ev => {
        ev.preventDefault();
        submit();
    })

    const onChange = (ev => {
        const { name, value, type, checked } = ev.target;
        const valueToUse = (type === "checkbox") ? checked : value;
        change(name, valueToUse);
    })
///
    return (
        <form className = "form container" onSubmit = {onSubmit}>
            <div className = "form-group submit">
                <h2>Add a Member</h2>

                <button disabled = {disabled}>Submit</button>

                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>

                <div className = "form-group inputs">
                    <h4>General Information</h4>

                    <label>
                        Name&nbsp;
                        <input
                            value= {values.name} 
                            onChange = {onChange}
                            name= "name"
                            type = "text"
                        />
                    </label>

                    <label>
                        Email
                        <input
                            value = {values.email}
                            onChange = {onChange}
                            name= "email"
                            type = "text"
                        />
                    </label>
                    <label>
                        Password
                        <input
                            value = {values.password}
                            onChange = {onChange}
                            name= "password"
                            type = "text"
                        />
                    </label>
                    <div className = 'form-group checkboxes'>
                        <label>
                        I Agree to the Terms of Service
                        <input
                            type="checkbox"
                            name="terms"
                            checked={values.terms}
                            onChange={onChange}
                        />
                        </label>
                    </div>
                </div>
            </div>
        </form>
    )
}