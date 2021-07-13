import React from 'react';

export default function Mate({ details }) {
    if (!details) {
        return <h3>Getting Details</h3>
    }
    return (
        <div classname ="info">
            <p>{details.name}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            
           
        </div>

    )
}

