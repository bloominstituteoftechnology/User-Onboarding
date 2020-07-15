import React from 'react';

const Form = (props => {
    const {
        values,
        onInputChange,
        onSubmit,
        disabled,
        errors,
        onCheckboxChange,
    } = props
    return (
        <form className = 'form container' onSubmit = {onSubmit}>
            <div className = 'form submit'>
                <h3>Onboard Member Here</h3>
                <button disabled = {disabled} className = 'submit'>Submit</button>
            </div>

            <div className ='error'>
                <div>{error.first_name}</div>
                <div>{error.last_name}</div>
                <div>{error.password}</div>
                <div>{error.email}</div>
                <div>{errors.termsOfService}</div>
            </div>
            <div className = 'form inputs'>
                <h2>User Info</h2>
                <label>First Name :
                    <input
                        type = 'text'
                        placeholder = 'Type Name Here'
                        maxLength = '30'
                        name = 'first_name'
                        value = {values.first_name}
                        onChange = {onInputChange}
                        />

                </label>
                <label>Last Name : 
                    <input
                        type = 'text'
                        placeholder = 'Type Name Here'
                        maxLength = '30'
                        name = 'last_name'
                        value = {values.last_name}
                        onChange = {onInputChange}
                        />
                    
                </label>
                <label> Password : 
                    <input 
                        type = 'password'
                        name = 'password'
                        maxLength = '30'
                        minLength = '5'
                        placeholder = 'Type Password Here'
                        value = {value.password}
                        onChange = {onInputChange}
                        />
                </label>
                <label>
                    <input
                        type = 'email'
                        placeholder = 'Type Email Here'
                        maxLength = '30'
                        name = 'email'
                        value = {value.email}
                        onChange = {onInputChange}
                        />

                </label>
                <label> Agree To Terms of Service 
                    <input
                        type = 'checkbox'
                        name = 'termsOfService'
                        checked = {value.termsOfService}
                        onChange = {onCheckboxChange}
                        />

                </label>


                
            </div>
        </form>
    )
    }
)
export default Form