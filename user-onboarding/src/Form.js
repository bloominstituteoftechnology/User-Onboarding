import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked } = event.target
        change(name, value) 
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add a User</h2>

                <button disabled={disabled}>submit</button>

                <div>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>

                <h4>General Information</h4>
                <label>Name
                    <input
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>Agree
                    <input
                        type='radio'
                        name='terms'
                        value='agree'
                        onChange={onChange}
                        checked={values.terms === 'agree'}
                    />
                </label>
                <label>Disagree
                    <input
                        type='radio'
                        name='terms'
                        value='disagree'
                        onChange={onChange}
                        checked={values.terms === 'disagree'}
                    />
                </label>
            </div>
        </form>
    )
}