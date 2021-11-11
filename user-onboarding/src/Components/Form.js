import React from 'react'

const Form = (props) => {
    const {change, submit} = props;
    const {username, email, password, checked} =props.value;

    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='username'
                        value={username}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onchange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type='checkbox'
                        name='tos'
                        checked={checked}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value="Create a Friend"/>
            </form>
        </div>
    )
}


export default Form;