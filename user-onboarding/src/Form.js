import React from 'react'

const Form = props => {
const {values,submit, change, disabled, errors} = props

const onChange = e => {
    const { name, value, checked, type } = e.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}

const onSubmit = e => {
    e.preventDefault()  
    submit()
}

    return(
        <>
        <h2>Form</h2>
        <form onSubmit={onSubmit}>
            <div className='red'>{errors.first_name}</div>
            <div className='red'>{errors.last_name}</div>
            <div className='red'>{errors.email}</div>
            <div className='red'>{errors.password}</div>
            <div className='red'>{errors.tos}</div>
            <label>
                First Name<br></br>
                <input 
                type='text'
                name='first_name'
                value={values.first_name}
                placeholder="First Name"
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Last Name<br></br>
                <input 
                type='text'
                name='last_name'
                value={values.last_name}
                placeholder="Last Name"
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Email<br></br>
                <input 
                type='email'
                name='email'
                value={values.email}
                placeholder='Email Address'
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
               Password<br></br>
                <input
                type='password'
                name='password'
                value={values.password}
                placeholder='Password'
                onChange={onChange}
                />
            </label>
            <br></br>
            <label>
                Do you agree to the <em>Terms of Service</em><br></br>
                <input 
                type='checkbox'
                name='tos'
                checked={values.tos}
                onChange={onChange}
                />
            </label>
            <br></br>
            <label> Select Carrer of choice
                <br></br>
            <select name='career' value={values.career} onChange={onChange}>
            <option value = ''>--Please Select a Career--</option>
            <option value = 'Cop'>Cop</option>
            <option value='Fireman'>Fireman</option>
            <option value='marine'>MarineCorps</option>
            </select>
            </label>
            <button disabled={disabled}>Submit</button>
        </form>
        </>
    )


}

export default Form