import React from 'react'

const EmployeeForm = ( props ) => {
    const { values, update, submit, disabled, errors} = props
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name, valueToUse)
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Add new employee</h2>
                <button disabled={disabled} onSubmit={onSubmit}>Submit</button>
                <br/>
                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.unionStatus}</div>
                </div>
            </div>

            <div className='form-group-inputs'>
                <h4>Employee information</h4>

                <label>
                    Username&nbsp;
                    <input
                        value={values.username}
                        onChange={onChange}
                        name='username'
                        type='text'
                    />
                </label>

                <br/>
                <label>
                    Email
                    <input
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>

                <br/>
                <label>
                    Role
                    <select onChange={onChange} value={values.role} name='role'>
                        <option value=''>--- Select an option ---</option>
                        <option value="front end developer">Front end developer</option>
                        <option value="back end developer">Back end developer</option>
                        <option value="marketing">Marketing</option>
                        <option value="project manager">Project manager</option>
                    </select>
                </label>

                <br/>
                {/* <label>
                    Union member
                    <input
                        type='radio'
                        name='union status'
                        value={'union member'}
                        checked={values.unionStatus === 'union member'}
                        onChange={onChange}
                    />
                </label>

                <br/>
                <label>
                    Non-union member
                    <input
                        type='radio'
                        name='union status'
                        value={"non-union member"}
                        checked={values.unionStatus === "non-union member"}
                        onChange={onChange}
                    />
                </label> */}
                <br/>

                <label>
                    I have read and understood the terms of agreement.
                        <input
                            type='checkbox'
                            name='read'
                            checked={values.read}
                            onChange={onChange}
                        />
                </label>
                <br/>

                <label>
                    I agree to the terms set out in this agreement.
                        <input
                            type='checkbox'
                            name='agreed'
                            checked={values.agreed}
                            onChange={onChange}
                        />
                </label>
            </div>
        </form>
    )
}
export default EmployeeForm
