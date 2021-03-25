import React from 'react'


export default function Form(props) {
    const { values, update, submit, disabled, errors } = props

    const onChange = evt => {
    
       const {name, value, type, checked} = evt.target

        const valueToUse = type === 'checkbox' ? checked : value;

       update(name, valueToUse)

    }

    const onSubmit = evt => {

        evt.preventDefault()
        submit()
    }

    return (
        <form className = 'form container' onSubmit={onSubmit}>
            <div className = 'formInputs'>
                <div>

                <label>Name
                    <input
                        name='name'
                        type = 'text' 
                        value = {values.name}
                        onChange={onChange}
                        placeholder='Type first name'
                        maxLength = '30'
                        />
                </label>
                </div>
 
                <div>
                 <label>email
                    <input name = 'email' 
                    type = 'email'
                    value = {values.email}
                    onChange = {onChange}
                    placeholder = 'name@email.com'/>
                 </label>
                </div>

                <div>
                    <label>Password

                    <input
                    name='password'
                    type = 'text' 
                    value = {values.password}
                    onChange={onChange}
                    placeholder='Password'
                    maxLength = '30'
                    />

                    </label>
                </div>

                <div>        
                     <label>Agree to Terms of Service?</label>
                    <input type='checkbox'
                    name='termsOfService'
                    checked={values.termsOfService}
                    onChange={onChange}
                    />   
                </div>


                <div className = 'submit'>
                    <button disabled={disabled}>Submit</button>
                </div>
                <div className='errors'>
                     {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                        <div>{errors.name}</div>
                        <div>{errors.email}</div>
                        <div>{errors.password}</div>
                        <div>{errors.termsOfService}</div>
        </div>
            </div>
        </form>


    )


}
