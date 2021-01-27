import React from "react";

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props

    const onSubmit = event => {
        event.preventDefault();
        onSubmit();
    };

    const onChange = event => {
        const { name, value, type, checked } = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        
        change ( name, valueToUse );
    };

    return (
        <form className = "form-container" onSubmit = { onSubmit }>
            <div className = "form-group-submit">
                <h2>Add a Thing</h2>

                <button disabled = { disabled }>submit</button>

                <div className = "errors">
                    <div>{ errors.username }</div>
                    <div>{ errors.email }</div>
                    <div>{ errors.password }</div>
                </div>
            </div>
            <div className = "form-group-inputs">
                <h4>General Info</h4>
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Username&nbsp;
                    <input
                        name = "username"
                        type = "text"
                        value = { values.username }
                        onChange = { onChange }
                    />
                </label>
                <label>Email
                    <input
                        name = "email"
                        text = "text"
                        value = { values.email }
                        onChange = { onChange }
                    />
                </label>
                <label>Password
                    <input
                        name = "password"
                        text = "text"
                        value = { values.password}
                        onChange = { onChange }
                    />
                </label>
            </div>
            {/* ////////// CHECKBOXES ////////// */}
            <div className = "form-group-checkboxes">
                <label>
                    <input
                        type = "checkbox"
                        name = "terms of service"
                        checked = { values.terms }
                        onChange = { onChange }
                    />
                </label>
            </div>
            
        </form>
    )






}

     