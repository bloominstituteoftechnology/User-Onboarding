import React from 'react';
import '../App.css';

export default function User(props) {
    const { name, email, password} = props;
    return (
        <div className='user'>
            <h4>New User: {name}</h4>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )
};