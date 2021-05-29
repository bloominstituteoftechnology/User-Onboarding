import React from 'react';

function Friend ({ details }) {
    return (
        <div>
            <h2>{details.name}</h2>
            <p>Email:{details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}
export default Friend