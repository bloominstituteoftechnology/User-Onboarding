import React from 'react'

export default function UserForm(props) {
    const {
        values,
        onSubmit,
        onInputChange,
        onCheckboxChange,
        disabled,
        errors,
    } = props

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a Friend</h2>
                <button disabled={disabled}>submit</button>

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

                {/* ////////// TEXT INPUTS ////////// */}
                <label>First Name:&nbsp;
            <input
                        value={values.first_name}
                        onChange={onInputChange}
                        name='first_name'
                        type='text'
                    />
                </label>

                <label>Last Name:&nbsp;
            <input
                        value={values.last_name}
                        onChange={onInputChange}
                        name='last_name'
                        type='text'
                    />
                </label>

                <label>Email:&nbsp;
            <input
                        value={values.email}
                        onChange={onInputChange}
                        name='email'
                        type='text'
                    />
                </label>

                <label>Password:&nbsp;
            <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='text'
                    />
                </label>
            </div>

            <div className='form-group checkboxes'>

                {/* ////////// CHECKBOXES ////////// */}
                <label>Terms of Service
            <input
                        name='tos'
                        type="checkbox"
                        onChange={onCheckboxChange}
                        checked={values.tos}
                    />
                </label>
            </div>
        </form>
    )
}