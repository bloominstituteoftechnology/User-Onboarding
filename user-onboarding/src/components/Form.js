import React from 'react'

export default function Form(props) {

  const { change, submit, errors } = props;
  const { username, email, password, tos } = props.values;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue);
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
      <div>
        <p>{errors.username}</p>
        <p>{errors.email}</p>
        <p>{errors.password}</p>
        <p>{errors.tos}</p>
      
        <form onSubmit={onSubmit}>
          <label>Username: 
                <input
                  type="text"
                  name="username"
                  placeholder="Wasss yer name"
                  value={username}
                  onChange={onChange}
                />
          </label>

          <label>Email: 
              <input
                  name="email"
                  type="email"
                  placeholder="Wass yer hhmail"
                  maxLength='30'
                  value={email}
                  onChange={onChange}
              />
          </label>

          <label>password: 
              <input
                  name="password"
                  type="password"
                  placeholder="hhhm password pls"
                  maxLength='30'
                  value={password}
                  onChange={onChange}
              />
          </label>

          <label>Terms of Service
            <input
              type='checkbox'
              name='tos'
              checked={tos}
              onChange={onChange}            
            />
          </label>

          <input type='submit' value='Become a Member!' />
        </form>
      </div>    
  )
}
