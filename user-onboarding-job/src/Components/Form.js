import React from 'react'



export default function Form(props) {

   const { change, submit, errors } = props;
   const { username, email, password, tos } = props.values;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const realValue = type === 'checkbox' ? checked : value;
        change(name, realValue);
    }
    
    return (
        <div>
             <h1>Enter your information Below</h1>
             <p>{errors.username}</p>
             <p>{errors.email}</p>
             <p>{errors.password}</p>
             <p>{errors.tos}</p>
            <form className='form container' onSubmit={onSubmit}>
                   
              
                <label>Name
                        <input
                            type='text'
                            name='username'
                            value={username}
                            onChange={onChange}
                        />
                </label>
                <label> Email
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                />
                    </label>
                <label> Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                />
                    </label>
                    <p>Please read our <a href='https://youtu.be/dQw4w9WgXcQ' target='_blank'> terms of service </a></p>
                <label> Check if you have read our terms of service.
                        <input
                            type='checkbox'
                            name='tos'
                            checked={tos}
                            onChange={onChange}
                        />
                </label>
                <input type='submit' value='Make A User' />

            </form>
        </div>

    )







}