import React from 'react';

export default function Form(props) {

  const { values, errors, update, submit, disabled } = props;

  const onChange = evt => {
    const { name, value, checked, type } = evt.target;
    update(name, type === 'checkbox' ? checked : value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group inputs'>
        <label>Name{errors.name.length > 0 ? ` - ${errors.name}` : errors.name}
          <input
            type='text'
            value={values.name}
            onChange={onChange}
            name='name'
            placeholder='Name'
            maxLength='32'
          />
        </label>
        <label>Email{errors.email.length > 0 ? ` - ${errors.email}` : errors.email}
          <input
            type='text'
            value={values.email}
            onChange={onChange}
            name='email'
            placeholder='Email'
            maxLength='32'
          />
        </label>
        <label>Password{errors.password.length > 0 ? ` - ${errors.password}` : errors.password}
          <input
            type='text'
            value={values.password}
            onChange={onChange}
            name='password'
            placeholder='Password'
            maxLength='32'
          />
        </label>
        <label>Role{errors.role.length > 0 ? ` - ${errors.role}` : errors.role}
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''>Select</option>
            <option value='Engineer'>Engineer</option>
            <option value='Developer'>Developer</option>
            <option value='Designer'>Designer</option>
          </select>
        </label>
        <label className='terms'>Terms of Service{errors.terms.length > 0 ? ` - ${errors.terms}` : errors.terms}
          <input
            type='checkbox'
            value={values.terms}
            onChange={onChange}
            name='terms'
            checked={values.terms}
          />
        </label>
        <div className='submit'>
          <button disabled={disabled}>Submit</button>
        </div>
      </div>
    </form>
  )

}
