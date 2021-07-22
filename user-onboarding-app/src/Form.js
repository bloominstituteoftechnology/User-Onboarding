import React from "react";

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    };

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add User</h2>
                <button id="submitBtn" disabled={disabled}>submit</button>
                <div>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <label>Username
                <input
                type="text"
                name="username"
                onChange={onChange}
                value={values.username}
                />
            </label>
            <label>Email
                <input
                type="text"
                name="email"
                onChange={onChange}
                value={values.email}
                />
            </label>
            <label>Password
                <input
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
                />
            </label>
            <label>Terms of Service
                <input
                type="checkbox"
                name="terms"
                onChange={onChange}
                checked={values.terms}
                />
            </label>
        </form>
    )
}