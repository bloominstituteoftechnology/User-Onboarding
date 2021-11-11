import React from 'react';

const Form = (props) => {
    const { change, submit, errors } = props;
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
        <>
        <div>
            <h1>Welcome Aboard!</h1>
            <p>{errors.username}</p>
            <p>{errors.password}</p>
            <p>{errors.email}</p>
            <p>{errors.tos}</p>
        </div>
        <form onSubmit={onSubmit} >
            <label data-cy='username-label'>Name:
                <input
                    type='text'
                    name='username'
                    value={username}
                    onChange={onChange}
                />
                </label>
            <label data-cy='email'>Email:
                <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={onChange}
                    />
                </label>
            <label data-cy='password'>Password:
                <input 
                    type='password'
                    name='password'
                    value={password}
                    onChange={onChange}
                />
            </label>
            <label data-cy='tos'>Terms of Service:
                <input
                    type='checkbox'
                    name='tos'
                    checked={checked}
                    onChange={onChange}
                />
            </label>     

            <button>Submit</button>
        </form>
        </>
    )
}

export default Form