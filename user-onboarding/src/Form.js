import React from 'react'

export default function Form(props){
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
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }


    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add a User</h2>

                {/* 🔥 DISABLE THE BUTTON */}
                <button id ='submitBtn' disabled={disabled}>submit</button>

                <div className='errors'>
                {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.role}</div>
                <div>{errors.civil}</div>
                </div>
            </div> 
            <div className = 'form-group inputs'>
                <h4>User information</h4>
                {/* ////////// TEXT INPUTS ////////// */}
                <label>Name
                    <input 
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
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
                {/* ////////// CHECKBOXES ////////// */}
                <label>Do you agree?
                <input 
                    type = 'checkbox'
                    name = 'termsOfService'
                    onChange = {onChange}
                    checked = {values.termsOfService}
                />
                </label>
    
            </div>


        </form>
    )

}