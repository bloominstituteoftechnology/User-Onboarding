import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

function Form() {
console.log("Props:  props");
const [post, setPost] = useState([]);
const initialState = { name: "", email: "", password: "", terms: "" };
const [member, setMember] = useState(initialState);

const [buttonDisabled, setButtonDisabled] = useState(true);

const [errors, setErrors] = useState({ name: "", email: "", password: "", terms: "" });

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup.string().email("Must be a valid email").required("Must include email"),
    password: yup.string().required("Must include password").min(8, "Must be at least 8 characters"),
    terms: yup.boolean().oneOf([true])
});

useEffect(() => {
console.log("Checking is form valid");
formSchema.isValid(member).then(isFormValid => {
    console.log("Is form valid?", isFormValid);
    setButtonDisabled(!isFormValid);
});
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [member]);

const handleSubmit = event => {
    event.preventDefault();
    axios
        .post("https://reqres.in/api/users", member)
        .then(res => {
            setPost(res.data);
            setMember(initialState);
;        })
        .catch(error => console.log("Error", error));
};

const validateChange = event => {
    yup
    .reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then(inputIsValid => {
        setErrors({ ...errors, [event.target.name]: ""
        });
    })
    .catch(error => { 
        setErrors({ ...errors, [event.target.name]: error.errors[0]
    });
});
};

const handleChange = event => {
    event.persist();
    console.log("Input Changed:", event.target.value);
    console.log("Input that fired event:", event.target.name);
    
    const newMember = {
        ...member, [event.target.name]: event.target.name === "terms" ? event.target.checked : event.target.value
    };

    validateChange(event);
    setMember(newMember);
};

return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            value={member.name}
            data-cy="name"
            />
             {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>
        <br /><br />
        <label htmlFor="email">
            Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input
            id="email"
            type="email"
            name="email"
            onChange={handleChange}
            value={member.email}
            data-cy="email"
            />
             {errors.email.length > 0 ? ( <p className="error">{errors.email}</p> ) : null}
        </label>
        <br /><br />
        <label htmlFor="password">
            Password:&nbsp;
            <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            value={member.password}
            data-cy="password"
            />
            {errors.password.length > 0 ? <p className="error">{errors.password}</p> : null}
          </label>
          <br /><br />
         <label htmlFor="terms">
            <input
            id="terms"
            type="checkBox"
            name="terms"
            checked={member.terms}
            onChange={handleChange}
            data-cy="terms"
            />
            Terms and Conditions
        </label>
        <br /><br />
        <button type="submit" data-cy="submit" disabled={buttonDisabled}>
            Submit
        </button>
        <pre>{JSON.stringify(post, null, 2)}</pre>
    </form>
)
};

export default Form