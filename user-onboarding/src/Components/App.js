import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserForm from './UserForm'
import * as yup from 'yup'
import schema from './Schema'
import User from './User'


const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    ToS: false,
}

const initialFormErrors = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
}

const initialUsers = []
const initialDisabled = true

function App() {
    const [users, setUsers] = useState(initialUsers)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const getUsers = () => {
        axios.get('https://reqres.in/api/users')
            .then(res => {
                setUsers(res.data.data)

            })
            .catch(err => console.error(err))
    }

    useEffect(() => {
        getUsers()
    }, [])

    const postNewUsers = newUser => {
        axios.post('https://reqres.in/api/users', newUser)
            .then(res => {
                setUsers([res.data, ...users])
            })
            .catch(err => console.error(err))
            .finally(() => {
                setFormValues(initialFormValues);
            })
    }

    const formSubmit = () => {
        const newUsers = {
            first_name: formValues.first_name.trim(),
            last_name: formValues.last_name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            ToS: ['Terms of Service'].filter(tos => !!formValues[tos])
        }
        postNewUsers(newUsers)
    }

    const validate = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues])


    return (
        <div className='container'>
            <header><h1>Onboarding App</h1></header>

            <UserForm
                values={formValues}
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formErrors}
            />

            {
                users.map(user => {
                    return (
                        <User key={user.id} details={user} />
                    )
                })
            }
        </div>
    )
}

export default App;