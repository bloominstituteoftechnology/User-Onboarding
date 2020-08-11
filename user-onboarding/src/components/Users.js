import React from 'react';

export default function Users(props) {
    return (

        <div>
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <div>{props.user.password}</div>
        </div>
    )
};