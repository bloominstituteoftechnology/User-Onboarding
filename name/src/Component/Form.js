import React, {useState} from 'react';
import * as yup from 'yup';
import axios from 'axios';

const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required feild"),
    email: yup.string().email().required("Please make sure your email is valid!"),
    password: yup.string().password().required("Password is a required feild"),
    terms: yup.boolean().oneOf([true])
})

function Form() {
    const [user, setUser] = useState([
        {
            name: "",
            email:"",
            password:"",
            terms: false
        }
    ]);

    const [errors, setErrors] = useState({
        name: "",
        email:"",
        password:"",
        terms: ""
    });

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post('https://reqres.in/api/users', user)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    };

    const validate = (e) => {
        yup.reach(formSchema, e.target.name)
        .validate(e.target.value)
        .catch(err => {
            console.log(err)
        })
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        setUser({ ...user, [e.target.name]: value});
    };

    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id= "name" value={user.name} onChange={inputChange}/>
            <br/>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' id='email' value={user.email} onChange={inputChange}/>
    {errorState.email.length > 0 ? <p className="error">{errorState.email}</p> : null}
            <br/>
            <label htmlFor="password">Password:</label>
            <input typr="password" name="password" id="password" value={user.password} onChange={inputChange}/>
            <br/>
            <label htmlFor="terms">Terms & Conditions</label>
            <input type="checkbox" id="terms" name="terms" checked={user.terms} onChange={inputChange}/>
            <button>Submit</button>
        </form>
    )
}
