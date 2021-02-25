import React from 'react'
import './Form.css'

function Form(props) {  
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

      const onSubmit = (e) => {
        (e).preventDefault()
        submit()
      }

    const onChange = (e) => {
        const {name,value,type,checked} = (e).target
        {/* ////////// FOR CHECKBOX TO WORK ////////// */}
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }
    
    return (
      <form className='form container' onSubmit={onSubmit}>

        <div className = 'form-submit'>
          <button disabled={disabled}>submit</button>

          <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          
        </div>
        </div>

          <div className='form-group inputs'>
              {/* ////////// TEXT INPUTS ////////// */}
                <label>name&nbsp;
                <input
                    value={values.name}
                    onChange={onChange}
                    name='first_name'
                    type='text'
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

                <label>password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                    />
                </label>
                {/* ////////// CHECKBOXES ////////// */}
                <label>Term of Service
                    <input 
                        type='checkbox'
                        name='term_of_Service'
                        onChange={onChange}
                        checked={values.term_of_Service}
                    />
                </label>
          </div>
      </form>
    );
  }
  
  export default Form;
  