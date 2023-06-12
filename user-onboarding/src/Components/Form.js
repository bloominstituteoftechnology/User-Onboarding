import { useState } from "react-dom"
import React from "react";

function Form(props) {
    const {username, password, email, tos} = props.values;
    const { change, submit, errors, submitStatus } = props;

    const onChange = event => {
        const {name, value, type, checked} = event.target;
        change(name, type === "checkbox" ? checked : value)
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
        <h1>My awesome FORM!</h1>
        <p>{errors.username}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                type="text"
                name="username"
                value={username}
                onChange={onChange}
                />
            </label>
            <label>Email:
                <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                />
            </label>
            <label>Password:
                <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                />
            </label>
            <br/>
            <label>Service:
                <input
                type="checkbox"
                name="tos"
                checked={tos}
                onChange={onChange}
                />
            </label>
            <input
            disabled={submitStatus}
            type="submit"
            value="Create a Friend!"
            />
        </form>
        </div>
    )

}

export default Form;
