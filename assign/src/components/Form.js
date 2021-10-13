import React from "react";

export default function Form(props) {
    const { values, update, submit, errorText } = props

    const onChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
      }
    
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
      }

    return (
        <form className='form container' onSubmit={onSubmit}>
      <h2 className="error">{errorText}</h2>
      <div className='form-group inputs'>
        <label>Username
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={onChange}
            maxLength="30"
            placeholder="Enter a username ya chump"
          />
        </label>

        <label>Email
         <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Enter an email ya chump"
          />
        </label>

        <label>Role          
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a role --</option>
            <option value="Front EndDesigner">Front End Designer</option>
            <option value="Back End Designer">Back End Designer</option>
            <option value="UI Designer">UI Designer</option>
            <option value="Team Leader">Team Leader</option>
          </select>
        </label>
        <div className='submit'>
          <button>submit</button>
        </div>
      </div>
    </form>
      )

    
}