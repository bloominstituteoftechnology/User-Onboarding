import React from 'react';

export default function Form(props) {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
        <form className = "form-container" onSubmit = {onSubmit} >
            <div className = "form-submit">
                <h2>Add a User</h2>
                <button disabled = {disabled}>Submit</button>
                <div className = "errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.termOfService}</div>
                </div>

                <div className = "form-input">
                    <h2>User Information</h2>
                    <label>Name
                        <input
                            type="type"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                        />
                    </label>

                    <h2>User Information</h2>
                    <label>Email
                        <input
                            type="type"
                            name="email"
                            value={values.email}
                            onChange={onChange}
                        />
                    </label>

                    <h2>User Information</h2>
                    <label>Password
                        <input
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={onChange}
                        />
                    </label>

                    <h2>User Information</h2>
                    <label>Terms of Service
                        <input
                            type="checkbox"
                            name="terms"
                            onChange={onChange}
                            checked={values.terms}
                        />
                    </label>
                </div>
            </div>

        </form>

    )
}