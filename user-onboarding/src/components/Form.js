import React, { useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConf: "",
        terms: false,
    })

    const change = (e) => {
        const { value, type, checked, name } = e.target
        const usedVal = type === "checkbox" ? checked: value
        setForm({...form, [name]: usedVal})
    }
    
    return (
        <>
        <form>
            <div className="names">
                <input
                    onChange={change}
                    value={form.firstName}
                    name="firstName"
                    className="first"
                    type="text"
                    placeholder="First Name"
                ></input>
                <br />
                </div>
                <input
                    onchange={change}
                    value={form.lastName}
                    name="lastName"
                    className="last"
                    type="text"
                    placeholder="Last Name"
                ></input>
            
            <br />
            <div className="form">
                <input 
                    onChange={change}
                    value={form.email}
                    name="email"
                    className="large"
                    type="text"
                    placeholder="Email"
                ></input>
                <br />
                <input 
                    onChange={change}
                    value={form.password}
                    name="password"
                    className="large"
                    type="text"
                    placeholder="Password"
                ></input>
                <br />
                <input 
                    onChange={change}
                    value={form.passwordConf}
                    name="passwordConf"
                    className="large"
                    type="text"
                    placeholder="Confirm Password"
                ></input>
                <br />
                <label>
                <input 
                    onChange={change}
                    value={form.checkbox}
                    name="checkbox"
                    className="checkbox"
                    type="terms"
                ></input>
                Agree to Terms and Conditions
                </label>
            </div>
        </form>
        </>
    )
}

export default Form