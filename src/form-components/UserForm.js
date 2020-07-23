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
    const { name, value } = e.target
    inputChange(name, value)
}

return (
    <form className='form-container' onSubmit={onSubmit}>
{/*div below holds the error messages from Yup, lack of this caused a crash in version 1*/}
        <div className='errors'>
            <p>{errors.username}</p>
            <p>{errors.email}</p>
            <p>{errors.password}</p>
        </div>
        <div className='form-input'>
            <h2>Fill Out Team Member Form</h2>
            <label>Name:&nbsp;
                <input 
                values={values.username}
                onChange={onInputChange} // needs this or values can't be read in real time
                placeholder='your name here'
                name='username'
                type='text'
                />
            </label>
            <label>Email:&nbsp;
                <input 
                value={values.email}
                onChange={onInputChange} // needs this or values can't be read in real time
                placeholder='your email here'
                name='email'
                type='text'
                />
            </label>
            <label>Password:&nbsp;
                <input 
                value={values.password}
                onChange={onInputChange} // needs this or values can't be read in real time
                placeholder='your email here'
                name='password'
                type='text'
                />
            </label>
            <h3>Legal Requirements:</h3>
            <label>Do you agree to the terms of service?&nbsp;
          <input
            type="checkbox"
            name='termsOfService'
            checked={values.terms.termsOfService === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Are you at least 18 years of age?&nbsp;
          <input
            type="checkbox"
            name='ofAge'
            checked={values.terms.ofAge === true}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Are you a U.S. Citizen?&nbsp;
          <input
            type="checkbox"
            name='usCitizen'
            checked={values.terms.usCitizen === true}
            onChange={onCheckboxChange}
          />
        </label>
        <button disabled={disabled}>Submit!</button>
        </div>
    </form>
)

}