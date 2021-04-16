import React from 'react';

export default function Form(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        const { name, value, checked, type } = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>

            <div className='form-group inputs'>
                <h2>General information</h2>
                <label> Your First Name:
            <input
                        name='first_name'
                        type='text'
                        value={values.first_name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label> Your Last Name:
            <input
                        name='last_name'
                        type='text'
                        value={values.last_name}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Your Role:
                        <select
                        name='role'
                        value={values.role}
                        onChange={onChange}
                    >
                        <option value=''>- Select an option -</option>
                        <option value='student'>Student</option>
                        <option value='alumni'>Alumni</option>
                        <option value='instructor'>Instructor</option>
                        <option value='tl'>Team Lead</option>
                    </select>
                </label>
                <br></br>
                <label> Your Email:
            <input
                        name='email'
                        type='text'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Password:
            <input
                        name='password'
                        type='text'
                        value={values.password}
                        onChange={onChange}
                    />
                </label>
                <br></br>
                <label>Terms of Service
            <input
                        name='terms'
                        type='checkbox'
                        value={values.terms}
                        onChange={onChange}
                    />
                </label>
            </div>
            <div className='form-group submit'>
                <h2>Add New User</h2>

                <button disabled={disabled}>submit</button>

                <div className='errors' >
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.role}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>

            </div>
        </form>
    )
}