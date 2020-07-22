import React from 'react'

export default function UserForm(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
} = props

const onSubmit = e => {
    e.preventDefault()
    submit()
}

const onCheckboxChange = e => {
    const { name, checked } = e.target
    checkboxChange(name, checked)
}

const onInputChange = e => {
    const { name, value }
    inputChange(name, value)
}

return (
    <form className='form-container' onSubmit={onSubmit}>
        <h2>Test Heading</h2>
        <button disabled={disabled}>Submit!</button>
{/*div below holds the error messages from Yup, lack of this caused a crash in version 1*/}
        <div className='errors'>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
        </div>
        <div className='form-input'>
            <h2>General Input Testing</h2>
            <label>Name
                <input 
                values={values.username}
                onChange={onInputChange} // needs this or values can't be read in real time
                name='username'
                type='text'
                />
            </label>
            <label>Email
                <input 
                value={values.email}
                onChange={onInputChange} // needs this or values can't be read in real time
                name='email'
                type='text'
                />
            </label>
            <label>Password
                <input 
                value={values.password}
                onChange={onInputChange} // needs this or values can't be read in real time
                name='password'
                type='text'
                />
            </label>
        </div>
    </form>
)

}