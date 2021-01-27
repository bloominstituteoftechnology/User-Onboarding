import React from 'react'

export default function Form(props) {
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



    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2> ADD A USER </h2>
                <button disabled={disabled}> Submit </button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.checked}</div>
                </div>

                <h4>General information</h4>
                
                <label>Name
                    <input
                    value={values.name}
                    onChange={change}
                    name='name'
                    type='text'/>
                </label>
                <label>Email
                    <input
                    value={values.email}
                    onChange={change}
                    name='email'
                    type='email'/>
                </label>

            </form>
        </div>
    )
}
