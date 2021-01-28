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
        const { name, value, type, checked } = evt.target
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse)
      }



    return(
        <div>
            <form onSubmit={onSubmit}>
                <h2> ADD A USER </h2>
                <button disabled={disabled} className="submit"> Submit </button>

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
                    onChange={onChange}
                    name='name'
                    type='text'/>
                </label>
                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email'/>
                </label>
                <label>Password
                    <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'/>
                </label>
                <label>Terms of Service
                    <input 
                    name="terms"
                    type="checkbox"
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>

            </form>
        </div>
    )
}
