import React from "react";

export default function Form (props) {

    const {
        values,
        submit,
        change,
        errors,
        disabled
    } = props

// create the submit, change, 

const onSubmit = evt => {
    // prevents the submit function from acting on default
    // and rather, to perform, only when you click on it..?
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { value, type, name, checked  } = evt.target //<- we're targeting when smth happens to those specific things
    const givenValue = type === "checkbox" ? checked : value
    //  variable givenValue is = type
    //  if type is === "checkbox" then return checked, else return value
    change(name, givenValue)
}



// return statement is what will be shown on the form (all the HTML elements but written in JSX)
    return (

        <form className= "form-wrapper" onSubmit={onSubmit}>
            <h1>Google</h1>

            <section className ="user-input-wrapper">
                <h3>Join the Darkside</h3>

                <div className="user-inputs">

                    <label> Username
                        <input
                        type="text"
                        onChange={onChange}
                        name="username"
                        value={values.username}
                        />
                    </label>

                    <label>Email
                        <input
                        type="text"
                        onChange={onChange}
                        name="email"
                        value={values.email}
                        />
                    </label>

                    <label>Password
                        <input
                        type="password"
                        onChange={onChange}
                        name="email"
                        value={values.password}
                        placeholder="min of 8 characters"
                        />
                    </label>


                    <label>Sell Your Soul?
                        <input
                        type="checkbox"
                        onChange={onChange}
                        name="terms"
                        checked={values.terms}
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

            <button disabled={disabled}> Confirm </button>
             
        </form>
    )
}