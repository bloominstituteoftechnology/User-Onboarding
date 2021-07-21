import React from "react";

export default function UserForm(props) {
    


    return (
        <form>
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