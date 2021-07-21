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

    return (
        <form className='form-container' onSubmit={onSubmit}>
           <div className ='form-submit'>
            <button disabled={disabled}>submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.tos}</div>
            </div>
           </div> 
        
            <div className= 'inputs'>
                <label htmlFor='name'>
                    <input
                        id= 'name'
                        value= {values.name}
                        name= 'name'
                        type= 'text'
                        onChange= {onChange}
                    />
                </label>
                <label htmlFor= 'email'>
                    <input
                        id= 'email'
                        value= {values.email}
                        name= 'email'
                        type= 'text'
                        onChange= {onChange}
                    />
                </label>
            </div>
        </form>
    )
}