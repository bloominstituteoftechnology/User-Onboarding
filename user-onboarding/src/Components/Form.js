import React from 'react';

const Form = (props) => {
    const { onChange } = props;
    const { username, email, password, checked } = props.value;

    const onChange = (e) => {
        const { name, value, checked, type } =e.target;
        const newVal = type === 'checkbox' ? checked: value;
        change(name, newVal)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        submit();
    }
    return(
        <h1>my cool form!</h1>
        <form>
            <label>Name:
                <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={onChange}
                />
            <label>Email:
                <input
                    type='text'
                    name='name'
                    value={email}
                    onChange={onChange}
                    />
            <label>Password:
                <input 
                    type='text'
                    
                />

                
            </label>
        </form>
    )
}