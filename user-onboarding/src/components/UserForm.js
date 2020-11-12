import React from 'react';

const UserForm = (props) => {
  const { values, change, submit, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const newValue = type === 'checkbox' ? checked : value;
    change(name, newValue);
  };

  return (
    <div>
      <form className='formContainer' onSubmit={onSubmit}>
        <div className='formTitle'>
          <h2>Add A User</h2>
        </div>
        <div className='formInputs'>
          <label>
            Name:
            <input
              type='text'
              name='name'
              onChange={onChange}
              value={values.name}
              placeholder='Enter Name'
            />
            {errors.name.length > 0 ? (
              <p className='error'> {errors.name} </p>
            ) : null}
          </label>

          <label>
            Email:
            <input
              type='email'
              name='email'
              onChange={onChange}
              value={values.email}
              placeholder='Enter Email'
            />
            {errors.email.length > 0 ? (
              <p className='error'> {errors.email} </p>
            ) : null}
          </label>

          <label>
            Password:
            <input
              type='password'
              name='password'
              onChange={onChange}
              value={values.password}
              placeholder='Create Password'
            />
            {errors.password.length > 0 ? (
              <p className='error'> {errors.password} </p>
            ) : null}
          </label>

          {/* dropdown menu */}
          <label>
            Role:
            <select name='role' onChange={onChange} value={values.role}>
              <option value=''>--Select Role--</option>
              <option value='Backend Developer'>Backend Developer</option>
              <option value='Frontend Developer'>Frontend Developer</option>
              <option value='Designer'>Designer</option>
              <option value='Project Manager'>Project Manager</option>
            </select>
            {errors.role.length > 0 ? (
              <p className='error'> {errors.role} </p>
            ) : null}
          </label>

          {/* radio button */}
          <div className='radioBtns'>
            <h4>Status:</h4>

            <label>
              Full-time
              <input
                type='radio'
                name='status'
                value='Full-time'
                checked={values.status === 'Full-time'}
                onChange={onChange}
              />
              {errors.status.length > 0 ? (
                <p className='error'> {errors.status} </p>
              ) : null}
            </label>

            <label>
              Part-time
              <input
                type='radio'
                name='status'
                value='Part-time'
                checked={values.status === 'Part-time'}
                onChange={onChange}
              />
              {errors.status.length > 0 ? (
                <p className='error'> {errors.status} </p>
              ) : null}
            </label>

            <label>
              Contractor
              <input
                type='radio'
                name='status'
                value='Contractor'
                checked={values.status === 'Contractor'}
                onChange={onChange}
              />
              {errors.status.length > 0 ? (
                <p className='error'> {errors.status} </p>
              ) : null}
            </label>
          </div>

          {/* checkbox */}
          <div className='termsCheckbox'>
            <h4>Do you accept the Terms of Service?</h4>
            <label>
              Accept
              <input
                type='checkbox'
                name='terms'
                checked={values.terms}
                onChange={onChange}
              />
              {errors.terms.length > 0 ? (
                <p className='error'> {errors.terms} </p>
              ) : null}
            </label>
          </div>
        </div>
        <button disabled={disabled}>submit</button>
      </form>
    </div>
  );
};

export default UserForm;
