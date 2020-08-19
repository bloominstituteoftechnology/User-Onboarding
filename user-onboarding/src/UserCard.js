import React from 'react';


export default function User(props) {
    const {details} = props
    return(
        <div>
            <h3>Username: {details.first_name} {details.last_name}</h3>
            <p>Email: {details.email}</p>
        </div>
    );
}