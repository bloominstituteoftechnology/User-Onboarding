import React from "react";

export default function Form(props) {
    const {
      values,
      submit,
      change,
      disabled,
      errors,
    } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        change(name, value);
      }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    

    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group submit'>
            <h2>Add a Friend</h2>   

            {/* 🔥 DISABLE THE BUTTON */}
              <button >submit</button>

            <div className=''>
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
              {/* <div>{errors.username}</div>
              <div>{errors.email}</div>
              <div>{errors.role}</div>
              <div>{errors.civil}</div> */}
            </div>
          </div>

          <div className='form-group inputs'>
            <h4>General information</h4>
            <label> Name: 
                  <label> 
                    <input
                      type="text"
                      name="firstname"
                      value={values.firstname}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Enter your firstname here"
                    />
                  </label>
                  <label> 
                    <input
                      type="text"
                      name="lastname"
                      value={values.lastname}
                      onChange={onChange}
                      maxLength="30"
                      placeholder="Enter your lasttname here"
                    />
                  </label>
            </label>

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
                <option value="frontend">Front End</option>
                <option value="backend">Back End</option>
                <option value="designer">UI Designer</option>
                <option value="teamleader">Team Leader</option>
              </select>
            </label>

            <label>Married:
                <label>Yes
                  <input
                    type="radio"
                    name="civil"
                    value="married"
                    onChange={onChange}
                    checked={values.civil === "married"}
                  />
                </label>

                <label>No
                  <input
                    type="radio"
                    name="civil"
                    value="single"
                    onChange={onChange}
                    checked={values.civil === "single"}
                  />
                </label>                
            </label>
            
          </div>
        </form>
      )

    
}