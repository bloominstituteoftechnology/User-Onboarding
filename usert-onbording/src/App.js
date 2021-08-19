import React, {useState,useEffect} from 'react';
import schema from "./components/schema";
import * as yup from "yup"
import './App.css';
import axios from "axios";



function App() {
    const [form, setForm] = useState({ name: "", email: "", password: "", agree: false, language: ""})
    // keep track of errors
    const [errors, setErrors] = useState({ name: "", email: "", password: "", agree: "", language: ""})
    const [disabled,setDisabled] = useState(true)

    const setFormError= (name ,value)=> {
    yup.reach(schema,name).validate(value)
        .then(() =>setErrors({...errors,[name]: ''}))
        .catch(err =>setErrors({...errors,[name]:err.errors[0]}))

    }

    const changeValue = (event) => {
        const {name, type,checked, value} = event.target
    const newValue = type === "checkbox" ? checked : value
        setForm({...form,[name]:newValue})
        setFormError(name,newValue)
    }
    const submit = event => {
        event.preventDefault()
        const newUser = {name:form.name.trim(), email:form.email, password:form.password,agree:form.agree, language:form.language}
        axios.post('https://reqres.in/api/users',newUser)
            .then(res => {
               setForm({name: "", email: "", password: "", agree: false, language: ""})

            })
            .catch(err => {
                debugger

            })

    }


    useEffect(()=>{
        schema.isValid(form).then(valid => setDisabled(!valid))

    },[form])


    return (
        <div>
            <div style={{color: "red"}}>
            <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.agree}</div><div>{errors.language}</div>
            </div>
            {/*// change here*/}
            <form onSubmit={submit}>
                <label htmlFor="name">Name:</label>
                    <input onChange={changeValue} name="name" type="text" id="name" placeholder="Enter your name" value={form.name}/>
                <br/>
                <label  htmlFor="email">Email:</label>
                    <input  onChange={changeValue}name="email" type="email" id="email" placeholder="Enter your email" value={form.email} />
                <br/>
                <label htmlFor="password">Password</label>
                    <input onChange={changeValue} name="password" type="password" id="password" placeholder="Enter your password" value={form.password} />
                <br/>
                <label  htmlFor="terms">Terms of Service</label>
                    <input onChange={changeValue} name="agree" type="checkbox" id="terms" checked={form.agree}  />

                <br/>
                <label htmlFor="language">Choose one that you are comfortable with:</label>
                <select name={"language"} onChange={changeValue} value={form.language}>
                    <option value={""}>Select one</option>
                    <option value={"English"}> English </option>
                    <option value={"Spanish"}> Spanish </option>
                    <option value={"French"}> French</option>
                </select>

                <br/>
                <button disabled={disabled} type={"submit"}>Submit</button>

            </form>
            {/*<div className={"personInfo"}>*/}
            {/*    <h2>name is {form.name} and email is {form.email} and password is {form.password} my preferred language is {form.language}</h2>*/}
            {/*</div>*/}

        </div>
    )
}

export default App;
