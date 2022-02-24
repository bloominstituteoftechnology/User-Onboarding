import React from "react";

export default function Form (props) {

    const { username, email, password, terms } = props.values

    // create the submit, change, 

    const {onChange, submit} = props;



// return statement is what will be shown on the form (all the HTML elements but written in JSX)
    return (

        <form className= "form-wrapper" onSubmit={submit}>
            <h1>Amazon</h1>

            <section className ="user-input-wrapper">
                <h3>Join the Darkside</h3>

                <div className="user-inputs">

                    <label> Username:
                        <input
                        type="text"
                        onChange={onChange}
                        name="username"
                        value={username}
                        />
                    </label>

                    <label>Email:
                        <input
                        type="text"
                        onChange={onChange}
                        name="email"
                        value={email}
                        />
                    </label>

                    <label>Password
                        <input
                        type="password"
                        onChange={onChange}
                        name="password"
                        value={password}
                        placeholder="min of 8 characters"
                        />
                    </label>


                    <label>Sell Your Soul?
                        <input
                        type="checkbox"
                        onChange={onChange}
                        name="terms"
                        checked={terms}
                        />
                    </label>

                </div>

            </section>


            <div className="error-display">
                <p> {errors.username} </p>
                <p> {errors.email} </p>
                <p> {errors.password} </p>
                <p> {errors.terms} </p>
            </div>

            <input type="submit" value="Join the Amazon Cult!"/>
            <button disabled={disabled}> Confirm </button>
             
        </form>
    )
}