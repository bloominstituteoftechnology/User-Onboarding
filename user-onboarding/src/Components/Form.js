import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from '../validation/formSchema'

const initialFormValues = {
    // TEXT
    name: '',
    email: '',
    password:'',
    // checkbox
    terms:false
}

const initialFormErrors = {
    name:'',
    email:'',
    password:'',
}

const initialFriends = []
const intitialDisabled = true



function Form() {


    // STATES
    const [formValues, setFormValues] = useState(initialFormValues)
    const [friends, setFriends] = useState(initialFriends)
    const [disabled, setDisabled] = useState(intitialDisabled)
    const [formErrors, setFormErrors] = useState(initialFormErrors)

    //Event handlers
    const inputChange = (name, value) => {
        validate(name, value)
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse)
    }

    const formSubmit = () => {
        const newFriend = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
        }
        postNewFriend(newFriend)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        formSubmit()
    }

    // Helpers

    const getFriends = () => {
        axios.get('https://reqres.in/api/users')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const postNewFriend = newFriend => {
        axios.post('http://buddies.com/api/friends', newFriend)
            .then(res => {
                setFriends([res.data, ...friends])
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => {
                setFormValues(initialFormValues)
        })
    }
    
    const validate = (name, value) => {
            yup.reach(schema, name)
                .validate(value)
                .then(() => setFormErrors({ ...formErrors, [name]: ''}))
                .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
    }

    // useEffects

    useEffect(() => {
        getFriends()
    }, [])

    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

    return (
        <div>
            <h1>This Is The Form</h1>
            <form>
                <label>Name 
                    <input
                        type='text'
                        name='name'
                        type='text'
                        value={formValues.name}
                        onChange={onChange}
                        />
                </label>
                <label>Email
                    <input 
                        type='text'
                        name='email'
                        type='email'
                        value={formValues.email}
                        onChange={onChange}
                        />
                </label>
                <label>Password
                    <input 
                        type='text'
                        name='password'
                        type='password'
                        value={formValues.password}
                        onChange={onChange}
                        />
                </label>
                <br></br>
                <label> Do You agree to the Terms?
                    <input
                        type='checkbox'
                        name='terms'
                        checked={formValues.terms}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <button onClick={onSubmit} disabled={disabled}>Submit</button>
            </form>
        </div>
    )
}

export default Form