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
              <h2>Submit a Form</h2>
              <button disabled={disabled}>submit</button>
              <div className="errors">
                  <div>{errors.username}</div>
                  <div>{errors.name}</div>
                  <div>{errors.email}</div>
                  <div>{errors.password}</div>
                  <div>{errors.termsOfService}</div>
              </div>
          </div>
      </form>  
    )
}