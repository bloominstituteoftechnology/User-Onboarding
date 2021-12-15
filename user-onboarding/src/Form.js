import React from 'react'



export default function Form (props) {
    const { change } = props;
    const { username, email, password, tos, checked } = props;
    const onChange = e => {
        const { name, value, checked, type } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
        
    }
    const onSubmit = e => {
        e.preventDefault();
        onSubmit();
    }

    return(
    <div className='form'>
    <form onSubmit={onSubmit}> 
    <label htmlFor='username'>Name:</label>
        <input 
        type='text'
        id='username' 
        name='username'
        placeholder='John Doe'
        value={username}
        onChange={onChange}/>
            <br/>
    <label htmlFor='email'>Email:</label>
        <input 
        type='email' 
        name='email' 
        id='email'
        placeholder='JohnDoe1234@gmail.com'
        value={email}/>
            <br/>
    <label htmlFor='password'>Password:</label>
        <input 
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        value={password}
        />
            <br/>
    <label htmlFor='terms'>Terms of Service</label>
        <input 
        type='checkbox'
        name='tof'
        id='terms'
        checked={checked}
        value={tos}/>
            <br/>
    <input
     type='submit' 
     value='Create a friend!'
     />
    </form>
    </div>
    )
}