import React from "react";

export default function Userform(props) {
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
       const {  name, value, checked, type } = evt.target
       const valueToUse = type === 'checkbox' ? checked : value;
       change(name, valueToUse) 
    }

    return (
      <form className="form container" onSubmit={onSubmit}>
          <div className="form-group submit">
              <h2>Add a User</h2>
              <button disabled={disabled}>submit</button>
              <div className="errors">
                  <div>{errors.username}</div>
                  <div>{errors.name}</div>
                  <div>{errors.email}</div>
                  <div>{errors.password}</div>
                  <div>{errors.termsOfService}</div>
              </div>
          </div>

          <div className="form-group inputs">
              <h4>General information</h4>
              <label>
                  <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                  />
              </label>

              <label>Email
                  <input
                    value={values.email}
                    onChange={onChange}
                    name='username'
                    type='text'
                  />
              </label>

              <label>
                  <input
                  value={values.password}
                  onChange={onChange}
                  name='password'
                  type='text'
                  />
              </label>

              <label>
                  <input
                    type='checkbox'
                    name='terms of service'
                    checked={values.termsOfService}
                    onChange={onChange}
                  />
              </label>

          </div>
      </form>  
    )
}