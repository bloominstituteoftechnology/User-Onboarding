import React from 'react';

export default function User(props){
    if (!props.user) {
        return <h3> Working on results! </h3>
    }

    return(
        <div className='user-container'>
            <h3> Welcome to the academy, {props.user.name}</h3>
            <p>Email: {props.user.email}</p>
            <p>Password: {props.user.password}</p>
            <p>{props.user.serviceTerms === true ? `accepted`:`not accepted`}</p>

        </div>
    )
}
