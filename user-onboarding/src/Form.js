import React from 'react';

export default function Form (props) {
    const {change, submit} = props;
    const {username, email, password, tos} = props.value;
    const onChange = e => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
}
const onSubmit = e => {
    e.preventDefault();
    onSubmit();
}

return (
<div className='form'>
  <form onSubmit={onSubmit}>
    <label htmlFor='username'>Name:</label>
      <input
        type='text'
        id='username'
        name='username'
        placeholder='John Doe'
        value={props.username}
        onChange={onChange}
        />
      <br/> 
    <label htmlFor='password'>Password:</label>
      <input
        type='password'
        id='password'
        name='password'
        placeholder='Password'
        value={props.password}
        />
      <br/>
    <label htmlFor='email'>Email:</label>
      <input
        type='email'
        id='email'
        name='email'
        placeholder='JohnDoe1234@gmail.com'
        value={props.email}
        />
      <br/>
    <label htmlFor='terms'>Terms of Service</label>
      <input
        type='checkbox'
        id='terms'
        name='tos'
        checked={checked}
        value={props.terms}
        />
      <br/>
      <input
      type='submit'
      value='Create a Friend!'
      />
  </form>
</div>
  )
}