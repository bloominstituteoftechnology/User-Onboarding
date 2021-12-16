import React from 'react'

export default function MemberForm(props) {
    const {
        values,
        submit,
        update,
        disabled,
        errors,
      } = props

  const onChange = evt => {
    // const name = evt.target.name;
    // const { value } = evt.target;
    // update(name, value);

    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    update(name, valueToUse)
  }

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>

        <label>Username
              <input
                name="username"
                type="text"
                placeholder="Wasss yer name"
                maxLength='30'
                value={values.username}
                onChange={onChange}
              />
        </label>

        <label>Email
            <input
                name="email"
                type="text"
                placeholder="Wass yer hhmail"
                maxLength='30'
                value={values.email}
                onChange={onChange}
            />
        </label>

        <label>password
            <input
                name="password"
                type="password"
                placeholder="hhhm password pls"
                maxLength='30'
                value={values.password}
                onChange={onChange}
            />
        </label>

        <label>Terms of Service
          <input
            type='radio'
            name='terms'
            onChange={onChange}
            checked={values.civil === 'agree'}
          />
        </label>

        <div className='submit'>
          <button>submit</button>
        </div>
        
      </div>
    </form>
  )
}
