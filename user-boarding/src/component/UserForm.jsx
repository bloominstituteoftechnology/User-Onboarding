import React from 'react'

export default function UserForm(props) {
  const {
    values,
    onSubmit,
    onInputChange,
    onCheckboxChange,
    disabled,
    errors,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled} >submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <span>{errors.imgUrl}</span>
          <span>{errors.first_name}</span>
          <span>{errors.last_name}</span>
          <span>{errors.email}</span>
          <span>{errors.password}</span>
          <span>{errors.termsOfService}</span>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}


        <label>Profile Image&nbsp;
          <input
            value={values.avatar}
            onChange={onInputChange}
            name='avatar'
            type='text'
          />
        </label>

        <label>First Name&nbsp;
          <input
            value={values.first_name}
            onChange={onInputChange}
            name='first_name'
            type='text'
          />
        </label>

        <label>Last Name&nbsp;
          <input
            value={values.last_name}
            onChange={onInputChange}
            name='last_name'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Password
          <input
            onChange={onInputChange}
            value={values.password}
            name='password'
            type='password'
          />
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Terms Of Service
          <input
            checked={values.termsOfService.termsOfService}
            onChange={onCheckboxChange}
            name='termsOfService'
            type='checkbox'
          />
        </label>

      </div>

      <div className='form-group checkboxes'>


        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}


        {/* <label>Coding
        <input
           type="checkbox"
           onChange={onCheckboxChange}
           name="coding"
           checked={values.hobbies.coding}
          />
        </label> */}
      </div>
    </form>
  )
}