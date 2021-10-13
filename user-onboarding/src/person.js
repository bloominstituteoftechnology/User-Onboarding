import React from 'react';

function Person({ details }) {
    if (!details) {
        return <h3>Working on the details..</h3>
    }

    return (
        <div className='submit container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>

    )
}

export default Person