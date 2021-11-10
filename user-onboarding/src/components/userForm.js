import React from "react";

const onChange = (evt) => {
  const { name, value, checked, type } = evt.target;
  const valueToUse = type === "checkbox" ? checked : value;
};

function userForm(props) {
  const { values, submit, change, disabled, errors } = props;

  return (
    <form className='form-container'>
      <div className='form-inputs'>
        <div className='name'>
          <div className='errors'>
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
          </div>
          <label>
            First Name:
            <input
              type='text'
              name='firstName'
              value={values.firstName}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    </form>
  );
}

export default userForm;
