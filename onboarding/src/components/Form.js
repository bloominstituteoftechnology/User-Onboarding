import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as yup from "yup";

// const dog = {
//     name:'fido',
//     age:2
//     favtoy:bone
// }


// const dogHadBirthday = ...dog, favtoy: bone



export default function Form(props) {

    const { setUsers, users } = props;

    let schema = yup.object().shape({
        name: yup.string().required('Name is Required'),
        email: yup.string().email('Email is Required'),
        password: yup.string().required('Password is Required').min(6, 'Password must be 6 Characters or more'),
        terms: yup.boolean().oneOf([true], "You must accept Terms and Conditions")
    })


    const defaultErrors = {
        name: '',
        email: '',
        password: '',
        terms: false
    }

    const defaultData = {
        name: '',
        email: '',
        password: '',
        terms: false
    }

    const [formErrors, setFormErrors] = useState(defaultErrors);
    const [formData, setFormData] = useState(defaultData);
    const [buttonDisable, setButtonDisable] = useState(true)

    const setErrors = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: "" }))
            .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

    const handleChange = (e) => {
        const { value, name, checked, type } = e.target;
        const trueValue = type === 'checkbox' ? checked : value;
        setErrors(name, trueValue)
        setFormData(
            {
                ...formData, [name]: trueValue
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: formData.name.trim(),
            email: formData.email,
            password: formData.password,
            terms: formData.terms
        }
        axios.post(`https://reqres.in/api/users`, newUser)
            .then(res => setUsers([...users, res.data]))
            .catch(err => console.log(err))
        setFormData(defaultData)
    }

    useEffect(() => {
        schema.isValid(formData).then(valid => setButtonDisable(!valid))
    }, [formData])

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:
                    <input onChange={handleChange} type="text" name='name' value={formData.name} />
                </label>
                <div className='validation' style={{ color: "red" }}>
                    <div>{formErrors.name}</div>
                </div>
                <label htmlFor="email">
                    Email:
                    <input onChange={handleChange} type="email" name='email' value={formData.email} />
                </label>
                <div className='validation' style={{ color: "red" }}>
                    <div>{formErrors.email}</div>
                </div>
                <label htmlFor="password">Password:
                    <input onChange={handleChange} type="password" name='password' value={formData.password} />
                </label>
                <div className='validation' style={{ color: "red" }}>
                    <div>{formErrors.password}</div>
                </div>
                <label htmlFor="terms">Agree To Terms
                    <input onChange={handleChange} type="checkbox" checked={formData.terms} name='terms' />
                </label>
                <div className='validation' style={{ color: "red" }}>
                    <div>{formErrors.terms}</div>
                </div>
                <button name='submit' disabled={buttonDisable}>Submit</button>
            </form>
        </div>
    )
}