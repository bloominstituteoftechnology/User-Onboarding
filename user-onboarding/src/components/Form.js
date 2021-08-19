import React from 'react'

export default function Form(props){
    const {value, update, submit, disabled, errors} = props

    const onChange = evt => {
        const {name, value, type, checked }= evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        update(name,valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return(
        <form onSubmit={onSubmit}>
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
        <div>
            <label htmlFor='name'>Name: 
                <input 
                    id='name' 
                    type='text' 
                    name='name' 
                    onChange={onChange} 
                    value={value.name}
                />
            </label>
            <label htmlFor='email'>Email: 
                <input 
                    id='email' 
                    type='email' 
                    name='email' 
                    onChange={onChange} 
                    value={value.email}
                />
            </label>
            <label htmlFor='password'>Password: 
                <input 
                    id='password' 
                    type='password' 
                    name='password' 
                    onChange={onChange} 
                    value={value.password}
                />
            </label>
            <label htmlFor='tos'>Terms Of Service: 
                <input 
                    type='checkbox' 
                    name='tos' 
                    onChange={onChange} 
                    checked={value.tos}
                />
            </label>

            
        <div className='submit'>
          <button id='submitBtn' disabled={disabled}>submit</button>
        </div>
    </div>
    </form>
    )
}