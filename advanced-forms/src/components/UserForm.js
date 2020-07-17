import React from 'react'

export default function UserForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        submitButtonState,
        errors,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>

                <h2>Add User</h2>

                <button id='submit' disabled={submitButtonState}>submit</button>

                <div className='errors'>
                   
                    <div>{errors.first_name}</div>
                    <div>{errors.last_name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.tos.tos}</div>
                </div>
            </div>

            <div className='form-group inputs'>
                <h4>General information</h4>

                <label>First Name:&nbsp;
            <input
                        id='first'
                        value={values.first_name}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'
                    />
                </label>

                <label>Last Name:&nbsp;
            <input
                        id='last'
                        value={values.last_name}
                        onChange={onInputChange}
                        name='last_name'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
            <input
                        id='email'
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:&nbsp;
            <input
                        id='password'
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>

                <label>Terms of Service
            <input
                        id='tos'
                        name='tos'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.tos.tos}
                    />
                </label>
            </div>
        </form>
    )
}