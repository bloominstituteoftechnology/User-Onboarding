import React from "react";

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Add an employee to the roster!</h2>

                <button disabled={disabled}>Submit!</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos}</div>
                </div>
            </div>

            <div className='inputs'>
                <h3>Info!</h3>

                <label>Name!
                    <input
                        value={values.name}
                        type='text'
                        name='name'
                        onChange={onChange}
                    />
                </label>

                <label>Email!
                    <input
                        value={values.email}
                        type='text'
                        name='email'
                        onChange={onChange}
                    />
                </label>

                <label>Password!
                    <input
                        value={values.password}
                        type='password'
                        name='password'
                        onChange={onChange}
                    />
                </label>

                <label>Terms of Service!
                    <input
                        value={values.tos}
                        type='checkbox'
                        name='tos'
                        onChange={onChange}
                    />
                </label>
            </div>
        </form>
    )
}