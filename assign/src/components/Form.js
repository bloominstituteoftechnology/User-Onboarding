import React from "react";

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
      /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
      const { name, value, checked, type } = evt.target;
      const valueToUse = type === 'checkbox' ? checked : value;
      change(name, valueToUse);
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>Add a Friend</h2>   

            {/* 🔥 DISABLE THE BUTTON */}
            <button disabled = {disabled}>submit</button>
            
             <p> {console.log('disabled in Form:', disabled)} </p>

            <div className='errors'>
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              <div>{errors.firstname}</div>
              <div>{errors.lastname} </div>
              <div>{errors.email}</div>
              <div>{errors.role}</div>
              <div>{errors.civil}</div>
            </div>
          </div>

          <div className='form-group inputs'>
            <h4>General information</h4>
            {/* <label> Name:  */}
                  <label> First Name:
                    <input
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Enter your firstname here"
                    />
                  </label>
                  <label> Last Name:
                    <input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Enter your lasttname here"
                    />
                  </label>
            {/* </label> */}

            <label>Password:
            <input
                type="password"
                name="password"
                value={values.password}
                onChange={onChange}
                placeholder="Enter an password ya chump"
              />
            </label>

            <label>Email:
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                placeholder="Enter an email ya chump"
              />
            </label>

            <label>Role:          
              <select value={values.role} name="role" onChange={onChange}>
                <option value="">-- Select a role --</option>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Designer">UI Designer</option>
                <option value="Team Leader">Team Leader</option>
              </select>
            </label>

            {/* <label>Married: */}
                <label>Married:
                  <input
                    type="radio"
                    name="civil"
                    value="married"
                    onChange={onChange}
                    checked={values.civil === "married"}
                  />
                </label>

                <label>Single:
                  <input
                    type="radio"
                    name="civil"
                    value="single"
                    onChange={onChange}
                    checked={values.civil === "single"}
                  />
                </label>                
            {/* </label>             */}
          </div>

          <div className='form-group checkboxes'>
            <h4>TOS</h4>
            {/* ////////// CHECKBOXES ////////// */}
            <label>Full
              <input
                type="checkbox"
                name="full"
                onChange={onChange}
                checked={values.full}
              />
            </label>

            <label>Half
              <input
                type="checkbox"
                name="half"
                onChange={onChange}
                checked={values.half}
              />
            </label>

            <label>Contract
              <input
                type="checkbox"
                name="constract"
                onChange={onChange}
                checked={values.constract}
              />
            </label>
          </div>

        </form>
      )

    
}