import React from 'react';
import '../App.css';

export default function User(props) {
    return (
        <div className='user'>
            <h4>New User: {props.userOBJ.name}</h4>
            <p>{props.userOBJ.email}</p>
            <p>{props.userOBJ.password}</p>
        </div>
    )
};