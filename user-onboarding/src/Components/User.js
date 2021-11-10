import React from 'react';

function User ({ details }) {
    if (!details) {
        return <h3>Working on fetching the data...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Serice: {details.termsOfService}</p>
        </div>
    )
}

export default User