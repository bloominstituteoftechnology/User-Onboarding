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

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue)
      }

    return (
        <form onSubmit = {onSubmit}>
        
            <div>
                <label>Name
                <input
                    value={values.username}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                </label>
            </div>

            <div>
                <label>Email
                <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='text'
                />
                </label>
            </div>

            <div>
                <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
                </label>
            </div>


            <div>
                <label>Sell my data to Facebook
                <input
                    type='checkbox'
                    name='tos'
                    onChange={onChange}
                    checked={values.tos}
                />
                </label>
            </div>


            <button id='submitBtn' disabled={disabled}>submit</button>

            <div>
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.tos}</div>
        </div>

      </form>
    )
}