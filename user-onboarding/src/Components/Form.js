import React from 'react';

const Form = (props) => {
    const { change, submit } = props;
    const { username, email, password, checked } = props.value;

    const onChange = (e) => {
        const { name, value, checked, type } = e.target;
        const newVal = type === 'checkbox' ? checked: value;
        change(name, newVal);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }

    
    return(
        <div>
        <h1>my cool form!</h1>
        <form onSubmit={onSubmit}>
            <label>Name:
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
            <label>Email:
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
            <label>Password:
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
            <label>Terms of Service:
                <input
                    type='checkbox'
                    name='tos'
                    checked={checked}
                    onChange={onChange}
                />
            <input type='submit' value='Create a friend!' />
            </label>
        </form>
        </div>
    )
}

export default Form;