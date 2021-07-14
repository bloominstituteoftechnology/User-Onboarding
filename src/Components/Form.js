import React, { useState, useEffect }  from 'react'
import axios from "axios";
import * as yup from "yup";
import User from "./User"

let schema = yup.object().shape({
    name: yup.string().required('a name is required'),
    email: yup.string().required('a valid email address is required').email(),
    password: yup.string().required('a password is required'),
    tos: yup.boolean().oneOf([true], 'must accept terms of service')
  });

export default function Form(props) {

    const [users, setUsers] = useState([])
    
    
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        tos: false,
    })
    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({...errors,[name]: ''}))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0]}))
    }
    const initialFormValues = {
        name: "",
        email: "",
        password: "",
        tos: false,
      }
    const [form, setForm] = useState(initialFormValues)

    const [disabled, setDisabled] = useState(true)

    const onChange = (event) => {
        const { name, type, value, checked } = event.target
        const valueToUse = type === "checkbox" ? checked : value
        setFormErrors(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
        console.log("changing!")
      } 

    const submit = (event) => {
    event.preventDefault()
    const newUser = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password.trim(),
        tos: form.tos
    }
    axios
        .post("https://reqres.in/api/users", newUser)
        .then((res) => {
            setForm(initialFormValues)
            console.log(res.data)
            setUsers([...users, res.data])
        })
        .catch((err) => {
        debugger;
        })
    }
    useEffect(() => {
        schema.isValid(form).then((valid) => setDisabled(!valid));
      }, [form])
    

    return (
    <div>
        <form className='form-container' onSubmit={submit}>
            <div className='form-group'>
            <label>
                <input placeholder='Name' type='text' name='name' onChange={onChange} value={form.name} />
            </label>
            <div style={{ color: 'red'}}>{errors.name}</div>
            <div>

            </div>
            </div>
            <div>
            <label>
                <input placeholder='Email' type='text' name='email' onChange={onChange} value={form.email} />
            </label>
            <div style={{ color: 'red'}}>{errors.email}</div>
            </div>
            <div>
            <label>
                <input placeholder='Password' type='text' name='password' onChange={onChange} value={form.password} />
            </label>
            <div style={{ color: 'red'}}>{errors.password}</div>
            </div>
            <div>
            <label>
                Terms of Service: 
                <input name="tos" type="checkbox" checked={form.tos} onChange={onChange} />
            </label>
            <div style={{ color: 'red'}}>{errors.tos}</div>
            </div>
            <div className='submit-container'>
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
        {users.map((user, index) => {
            return <User user={user} />
        })}
     </div>
    )
}