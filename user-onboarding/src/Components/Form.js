import React from 'react';

const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos } = props.values;

    const Change = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const Submit = (e) => {
        e.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>My Form</h1>
            <p> {errors.username} </p>
            <p> {errors.password} </p>
            <p> {errors.email} </p>
            <p> {errors.tos} </p>
            <form onSubmit ={Submit}>
                <label> Name:
                    <input 
                        type="text"
                        name="username"
                        value={username}
                        onChange={Change}
                    />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={Change}
                    />
                </label>
                <label>Password:
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={Change}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type="checkbox"
                        name="tos"
                        checked={tos}
                        onChange={Change}
                    />
                </label>
                <input type="submit" value="Create!" />
            </form>
        </div>
    )
}

export default Form;