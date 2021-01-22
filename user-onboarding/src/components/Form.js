import React, { useState, useEffect } from 'react'
import * as yup from 'yup'


const schema = yup.object().shape({
    fname: yup.string().required('Full Name Is Required!').min(6, 'must be 6'),
    email: yup.string().email().required('Please Enter A Valid Email'),
    country: yup.string().oneOf(["1", "2", "3"], "You Must Select A Country")
})




export default function Form() {


const [form, setForm] = useState({
    fname: '',
    email: '',
    birthdate: '',
    country: ''
})

const [disabled, setDisabled] = useState(true)

const [errors, setErrors] = useState({fname: '', email: '', country: ''})

const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0]}))
}

useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
}, [form])

const inputChange = e => {
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })

}

    return (
        <form>
            <div style={{color: 'red'}}>
                <div>{errors.fname}</div>
                <div>{errors.email}</div>
                <div>{errors.country}</div>

            </div>
            <label htmlFor="fname"><strong>Full Name</strong></label>
            <input 
            type="text" 
            name="fname"
            value={form.fname}
            placeholder="Enter Your Name"
            onChange={inputChange}
            />
            <label htmlFor="email"><strong>Email</strong></label>
            <input 
            type="email" 
            name="email"
            value={form.email}
            placeholder="Enter Your Email"
            onChange={inputChange}
            />  

            <label htmlFor="birthdate"><strong>Date Of Birth</strong></label>
            <input 
            type="date" 
            name="birthdate"
            value={form.birthdate}
            palceholder="Enter Your Name"
            onChange={inputChange}
            />  

<label htmlFor="country"><strong>Select Your Country</strong></label>

    <select name="country" value = {form.country}placeholder="country" onChange={inputChange}>
      <option placeholder="n/a"></option>
      <option value="1">Australia</option>
      <option value="2">Canada</option>
      <option value="3">USA</option>
    </select>

<br />
<br />
  <input  disabled={disabled} type="submit" value="Submit" />
        </form>
    )
}
