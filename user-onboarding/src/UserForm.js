import React from 'react';


export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors
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
            <h2> Create a new user </h2>
            <button disabled={disabled}>Submit</button>

            <div>
                <div>{errors.first_name}</div>
                <div>{errors.last_name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.termsofservice}</div>
            </div>
     

                <div>
                <h4>General information</h4>

                <label>First Name
                    <input
                    value={values.first_name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
                     />
                </label>

                <label>Last Name
                    <input
                    value={values.last_name}
                    onChange={onChange}
                    name='last_name'
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
                <label>Terms Of Service
                    <input
                    type= 'checkbox'
                    name= 'termsofservice'
                    checked={values.termsofservice}
                    onChange={onChange}
                    />
                </label>
            </div>
        </div>
    </form>
  )
}