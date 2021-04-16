import React from 'react'
 
export default function Form(props) {
    const {
        change,
        disabled,
        errors,
        values,
        submit
    } = props
 
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = (type === 'checkbox' ? checked : value) // is this a checkbox? then  use cheked. if not? then use the value
        // console.log(evt.target.value)
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
    <div>

        <div>
            <div>{errors.username}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.role}</div>
            <div>{errors.terms}</div>
        </div>

        <form onSubmit={onSubmit}>
            <div>
                <h2>Become a member</h2>
            </div>
            <div>
                <h4>Enter your info</h4>
 
                <label>Username
                    <input
                        name='username'
                        type='text'
                        value={values.username} // this is checking state for the value, but won't work without change handler
                        onChange={onChange}
                    />
                </label>
 
                <label>Email
                    <input
                        name='email'
                        type='email'
                        value={values.email} // this is checking state for the value, but won't work without change handler
                        onChange={onChange}
                    />
                </label>
 
                <label>Password 
                    <input // how to make the characters not visible
                        name='password'
                        type='password'
                        value={values.password} // this is checking state for the value, but won't work without change handler
                        onChange={onChange}
                    />
                </label>
 
                <label>Role
                   <select
                    onChange={onChange}
                    value={values.role}
                    name='role'
                    >
                        <option value=''>Select your role -</option>
                        <option value='driver'>Driver</option>
                        <option value='mover'>Mover</option>
                   </select>
                </label>
 
                <label>Terms of Service
                    <input
                        type='checkbox'
                        checked={values.terms}
                        name='terms'
                        onChange={onChange}
                    />
                </label>
 
                <button disabled={disabled}>Submit</button>
            </div>
        </form>
    </div>
    )
 
 
} 
