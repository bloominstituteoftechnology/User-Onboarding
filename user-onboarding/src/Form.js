import React from "react";

export default function Form (props) {

    const {
        values,
        submit,
        change,
        errors,
    } = props

// create the submit, change, 

const onSubmit = evt => {
    // prevents the submit function from acting on default
    // and rather, to perform, only when you click on it..?
    evt.preventDefault()
    submit()
}

const onChange = () => {
    // const {name}
}

// return statement is what will be shown on the form (all the HTML elements but written in JSX)
    return (


        <form>
            <h1>Google</h1>
            <section className ="user-input-wrapper">
                <p>Join the Darkside</p>

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

            <button> Confirm </button>
             
        </form>
    )
}