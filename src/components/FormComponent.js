import { useState, useEffect } from 'react'
import * as yup from 'yup'
import axios from 'axios'
import UserComponent from './UserComponent.js'

const initialFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false
}

export default function FormComponent(props){
    const [form, setForm] = useState(initialFormValues)
    const [disabled, setDisabled] = useState(true)
    const [errors, setErrors] = useState({name: '', email: '', password: '', tos: ''})
    const [users, setUsers] = useState([])

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const change = event => {
        const { checked, value, name, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        setFormErrors(name, valueToUse)
        setForm({ ...form, [name]: valueToUse })
    }

    const schema = yup.object().shape({
        name: yup.string().required('username is required').min(6, 'username requires at least 6 chars'),
        email: yup.string().required('email is required'),
        password: yup.string().required('password is required'),
        tos: yup.boolean().oneOf([true], 'you must agree to the terms of service')
    })

   useEffect(() => {
    schema.isValid(form).then(valid => setDisabled(!valid))
   }, [form])

   const submit = event => {
    event.preventDefault()
    const newUser = { name: form.name.trim(), email: form.email, password: form.password, tos: form.tos }
    axios.post('https://reqres.in/api/users', newUser)
        .then(res => {
            setForm(initialFormValues)
            console.log(res.data)
            const { name, email, password, tos } = form
            setUsers([ ...users, {
                name: form.name.trim(),
                email: form.email,
                password: form.password,
                tos: form.tos
            }])
        })
        .catch(err => {
            console.log(err)
        })
   }

  useEffect(() => {
    console.log(users)
  }, [users])

    return (
        <div>
            <form onSubmit={submit}>
                <label>Name: 
                    <input onChange={change} value={form.name} type="text" name="name" />
                </label>

                <label>Email: 
                    <input onChange={change} value={form.email} type="email" name="email" />
                </label>

                <label>Password: 
                    <input onChange={change} value={form.password} type="password" name="password" />
                </label>

                <label>I agree to the terms of service: 
                    <input onChange={change} checked={form.tos} type="checkbox" name="tos" />
                </label>

                <button disabled={disabled}>Submit</button>

            </form>
            <div style={{ color: 'red' }}>
                <div>{errors.name}</div><div>{errors.email}</div><div>{errors.password}</div><div>{errors.tos}</div>
            </div>

            <div className="userList">
            {users.map((user, index) => {
            return <UserComponent key={index} name={user.name} email={user.email} password={user.password} />
        }
      )}
            </div>
        </div>
    )
}