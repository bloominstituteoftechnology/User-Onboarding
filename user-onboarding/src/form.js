import React from 'react'

export default function UserForm(props){
    const{
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
    change(name, valueToUse)
}

return (
    <form className='form container' onSubmit={onSubmit}>
        <div className='form-group submit'>
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4>General information</h4>
            <label>Name
                <input 
                value={values.name}
                onChange={onChange}
                name="name"
                type="text"
                />
            </label>

            <label>Email
                <input 
                value={values.email}
                onChange={onChange}
                name="email"
                type="text"
                />
            </label>

            <label>Password
                <input 
                value={values.password}
                onChange={onChange}
                name="password"
                type="password"
                />
            </label>

            <label>Terms of Service
                <input 
                type="checkbox"
                name="tos"
                onChange={onChange}
                checked={values.tos}
                />
            </label>
        </div>
    </form>
)

}