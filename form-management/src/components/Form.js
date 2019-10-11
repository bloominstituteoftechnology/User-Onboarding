import React, { useState } from 'react';

function Form() {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.username);
        console.log(user.password);
    };

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label> User Name:
                <input
                    type='text'
                    name='username'
                    onChange={event => handleChange(event)}
                />
            </label>
            <br />
            <label> Email:
                <input
                    type='text'
                    name='email'
                    onChange={event => handleChange(event)}
                />
            </label>
            <br />
            <label> Password:
                <input
                    type='text'
                    name='password'
                    onChange={event => handleChange(event)}
                />
            </label>
            <br />

            <label> Accept
                <input
                    type="checkbox"
                    id="verifyGenderF"
                    name="genderF"
                    value="myGenderF"
                />
            </label>
            <br />
            <button>SignUp</button>

        </form>
    )
};
export default Form;