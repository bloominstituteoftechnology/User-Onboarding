import { useState } from "react-dom"
import React from "react";

function Form(props) {
    const {username, email, password, tos } = props.values;
    const {submit, change, errors} = props;
    
    const onChange = event => {
        const {name, type, value, checked} = event.target;
        change(name, type === "checkbox" ? checked : value);
    }
    
    const onSubmit = event => {
        event.preventDefault();
        submit(); 
    }
    return (
        <div>
        <h1>My awesome FORM!</h1>
        <p>{errors.username}</p>
        <p>{errors.password}</p>
        <p>{errors.email}</p>
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
            <br/>
            <label>Email:
                <input
                type="email"
                name="email"
                value={email}
                onChange={onChange}
                />
            </label>
            <br/>
            <label>Password: 
                <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                />
            </label>
            <br/>
            <label>Terms of Service:
                <input
                type="checkbox"
                name="tos"
                checked={tos}
                onChange={onChange}
                />
            </label>
            <br/>
            <input type="submit" value="Create a friend!"/>
        </form>
        </div>
    )

}

export default Form;