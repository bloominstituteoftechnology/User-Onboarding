import React from 'react'


export default function Form(props) {

const { disabled, values, change, submit, errors } = props

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
        <form className="form container" onSubmit={onSubmit}>
           <div className="form-group inputs">
                <label>Name
                    <input 
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                    name="email"
                    type="text"
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                    name="password"
                    type="text"
                    value={values.password}
                    onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                    name="terms"
                    type="checkbox"
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
            </div> 
            <div>
                <button disabled={disabled}>submit</button>
            </div>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.terms}</div>
            </div>
        </form>
    )
}