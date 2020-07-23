import React from 'react'; 

export default function Form(props) {

    const {
        values,
        submit,
        inputChange,
        checkboxChange, 
        disabled, 
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onCheckboxChange = event => {
        const { name, checked } = event.target
        checkboxChange(name, checked)
    }

    const onInputChange = event => {
        const { name, value } = event.target
        inputChange(name, value)
    }

    return(
        <form className='form-wrapper' onSubmit={onSubmit}>

            <div className='errors'>
    <div>{errors.name}</div>
    <div>{errors.email}</div>
            </div>
        <div className='form-group input'>
            <label> Name:
                <input
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'
                placeholder='Enter Your Name'
                maxLength='25'
                />
            </label>
            <label>Email
                <input 
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'
                />
            </label>
            <label>Terms of Service:
                <input 
                type='checkbox'
                name='read'
                checked={values.tOs.read === true}
                onChange={onCheckboxChange}
                />
            </label>
            <button disabled={disabled}>Submit</button>
            </div> 
        </form>
    )
}