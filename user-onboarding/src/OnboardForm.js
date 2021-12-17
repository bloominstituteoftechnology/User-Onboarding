import React from 'react'

export default function OnboardForm(props){
const {
    values,
    submit,
    change,
} = props

const onSubmit = evt => {
evt.preventDefault()
submit()
}

const onChange = evt => {
    const {name, value, checked, type} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name , valueToUse)
}

return (
<form className='form container' onSubmit={onSubmit}>
<div className='form-submit'>
    <h2>Onboard here!</h2>
</div>
<div className='form-group inputs'>
    <button>submit</button>
    <label>
        <input 
        value={values.name}
        onChange={onChange}
        name='name'
        type='text'
        placeholder='enter your name here.'
        />
    </label>
    <label>
        <input 
        value={values.email}
        onChange={onChange}
        name='email'
        type='text'
        placeholder='enter your email here.'
        />
    </label>
    <label>
        <input 
        value={values.password}
        onChange={onChange}
        name="password"
        type="text"
        placeholder='enter your desired password here.'
        />
    </label>
    <label>Terms of Service
        <input 
        type="checkbox"
        name="TOS"
        checked={values.terms}
        onChange={onChange}
        />
    </label>
</div>
</form>
)
}