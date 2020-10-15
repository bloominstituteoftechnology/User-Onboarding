import React from 'react';
import '../App.css';

export default function User(props) {
    console.log(props)
    const {id, name, email, password, remove} = props;
    return (
        <div className='user'>
            <h4>New User: {name}</h4>
            <p>{email}</p>
            <p>{password}</p>
            <button onClick={remove(id)}>Delete User</button>
        </div>
    )
};