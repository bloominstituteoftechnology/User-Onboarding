import React from 'react'

export default function UserForm(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = evt =>{
    evt.preventDefault()
    submit()
  }
  
  const onChange = evt => {
    const { name, value, type, checked} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }
  
  
  return (
    <form className='form container' /*onSubmit={onSubmit}*/>
      <div className='form-group submit'>
        
        <div className='errors'>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Please Fill Out User Form Below</h4>
          
          <label>
            Name&nbsp;
            <input 
              value={values.name}
              onChange={onChange}
              name='name'
              type='text'
            />
          </label>
          
          <label>
            Password
            <input 
              value={values.password}
              onChange={onChange}
              name='password'
              type='text'
            />
          </label>
          
          <label>
            Email
            <input 
              value={values.email}
              onChange={onChange}
              name='email'
              type='text'
            />
          </label>
      </div>
      <div className='tos-checkbox'>
        <h4>Do you agree to the Terms of Service?</h4>
        <label>Yes
          <input 
            type='radio'
            name='tos'
            value={true}
            checked={values.tos === true}
            onChange={onChange}
          />
        </label>
        <label>No
        <input 
            type='radio'
            name='tos'
            value={false}
            checked={values.tos === false}
            onChange={onChange}
          />
        </label>
      </div>
      <button disabled={disabled}>submit</button>
    </form>





  )


}

