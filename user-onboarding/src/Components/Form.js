import React from 'react'

export default function Form(props) {
    const {
        values, 
        submit,
        change,
        disabled,
        errors,
    } = props
    

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }



    const onChange = event => {
        const {name, value, checked, type} = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
            change(name, valueToUse)
    }
    


    return (

        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add A New User</h2>
                <button id='button' disabled={disabled}>SUBMIT</button>

                <div className='errors'>
                    <div> {errors.fname} </div> 
                    <div> {errors.lname} </div>
                    <div> {errors.email} </div>
                    <div> {errors.password} </div>
                </div>
            </div>

            <div className='form-group input'>
                <h4>General Information:</h4>
                <label>First Name: 
                    <input 
                    value={values.fname}
                    onChange={onChange}
                    name='fname'
                    type='text'
                    />
                </label>
                    
                <label>Last Name: 
                <input 
                    value={values.lname}
                    onChange={onChange}
                    name='lname'
                    type='text'
                    />
                </label>

                <label>Email: 
                <input 
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                    />
                </label>

                <label>Password: 
                <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                <div className='form-group checkboxes'>
                    <label>Terms of service: 
                        <input 
                            onChange={onChange}
                            checked={values.terms}
                            name='terms'
                            type='checkbox'
                        />
                    </label>
                </div>
            </div>

        </form>
    )
}