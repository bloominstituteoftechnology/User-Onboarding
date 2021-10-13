import React from 'react'

export default function PersonForm(props) {
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
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse);
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <h2>Add Thine Person</h2>

            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4> What you wanna know </h4>
            
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

        </div>
        
        <div className="form-group checkboxes">

        <label>Terms of Sevice
            <input
              type="checkbox"
              name="termsOfService"
              checked={values.termsOfService}
              onChange={onChange}
              />
        </label>
        </div>
    </form>
    
)
}