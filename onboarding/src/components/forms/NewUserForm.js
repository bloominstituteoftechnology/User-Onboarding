import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import '../../css/index.css';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .matches(/^(?!waffle@syrup.com$)/, "Email already in use")
        .required("Must include email address"),
    role: yup
        .string(),
    password: yup.string().required("Password is a rerquired field"),
    zip: yup
        .string()
        .matches(/^\d{5}/, "Zip code is not valid"),
    git: yup
        .string()
        .matches(/github/, "Must ne a valid GitHub address"),
    experience: yup
        .string(),
    terms: yup.boolean().oneOf([true], "Please agree to terms of use")
});


const NewUserFrom = (props) => {

    // state managment
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        zip: "",
        git: "",
        experience: "",
        terms: false
    });

    // error state
    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        role: "",
        password: "",
        zip: "",
        git: "",
        experience: "",
        terms: ""
    });

    // save our posted data
    const [users, setUsers] = useState([]);

    // disable submit button intil form is valid
    const [buttonDisabled, setButtonDisabled] = useState(true);

    // validate our form
    const validate = e => {
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
            .reach(formSchema, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                });
            });
    };

    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonDisabled(!valid); // enable submit button if form is valid
        });
    }, [formState]);

    // onChange function
    const inputChange = e => {
        e.persist();
        validate(e);
        let value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setFormState({ ...formState, [e.target.name]: value });
    };

    // submit the form and grab the results
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setUsers(res.data);
                console.log("success", users);
                
                // reset the form if all is good
                setFormState({
                    name: "",
                    email: "",
                    role: "",
                    password: "",
                    zip: "",
                    git: "",
                    experience: "",
                    terms: ""

                });
            })
            .catch(err => console.log(err.response));
    };


    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name
        <input
                    type="text"
                    name="name"
                    id="name"
                    value={formState.name}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="email">
                Email
        <input
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={inputChange}
                />
                {errorState.email.length > 0 ? (
                    <p className="error">{errorState.email}</p>
                ) : null}
            </label>


            <label className="role" htmlFor="role">
                Your role would be?
        <select
                    value={formState.role}
                    name="role"
                    id="role"
                    onChange={inputChange}
                >
                    <option value="TL">TL</option>
                    <option value="React">React</option>
                    <option value="Design">Design</option>
                    <option value="Testing">Testing</option>
                </select>
                {errorState.role.length > 0 ? (
                    <p className="error">{errorState.role}</p>
                ) : null}
            </label>


            <label htmlFor="password">
                Password
        <input
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                />
                {errorState.password.length > 0 ? (
                    <p className="error">{errorState.password}</p>
                ) : null}
            </label>

            <label htmlFor="zip">
                Zip code
        <input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formState.zip}
                    onChange={inputChange}
                />
                {errorState.zip.length > 0 ? (
                    <p className="error">{errorState.zip}</p>
                ) : null}
            </label>

            <label htmlFor="git">
                Git Hub
        <input
                    type="text"
                    name="git"
                    id="git"
                    value={formState.git}
                    onChange={inputChange}
                />
                {errorState.git.length > 0 ? (
                    <p className="error">{errorState.git}</p>
                ) : null}
            </label>

            <label className="role" htmlFor="role">
                Years of Experience?
        <select
                    value={formState.experience}
                    name="experience"
                    id="experience"
                    onChange={inputChange}
                >
                    <option value="1 Year">1 Year</option>
                    <option value="2 Yeras">2 Years</option>
                    <option value="3 Yeras">3 Years</option>
                    <option value="4+ Years">4+ Years</option>
                </select>
                {errorState.experience.length > 0 ? (
                    <p className="error">{errorState.experience}</p>
                ) : null}
            </label>

            <label className="formTerms" htmlFor="terms">
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}
                />
        Terms & Conditions

      </label>
            {errorState.terms.length > 0 ? (
                <p className="error">{errorState.terms}</p>
            ) : null}
            <button disabled={buttonDisabled}>Submit</button>
            {users.name ? <pre>{JSON.stringify(users, null, 2)}</pre> : ""}
    </form>
       
    );

}

export default NewUserFrom;
