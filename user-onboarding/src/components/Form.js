import React from 'react'

export default function Form(props) {
    const {
        values,
        change, 
        submit
    } = props

    const onSubmit = evt => {
        evt.preventDefault();
    
        submit();
    }
    const onChange = evt => {
    const { name, value, type, checked} = evt.target;
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}


return (

<form className="form container" onSubmit={onSubmit}> 
        <div className='form-group submit'>
        <h2>Add a User</h2>
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
     <label>Terms of Service
        <input
        type="checkbox"
        name="terms"
        checked={values.terms}
        onChange={onChange}
        /> 
    </label> 
    </div>
</form> 

)
}