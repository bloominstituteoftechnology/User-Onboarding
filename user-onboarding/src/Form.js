import React from 'react'       

function User({ details }) {
    if (!details) {
        return <h3>Loading</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.username}</h2>
            <p>Name: {details.name}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: {details.termsOfService} </p>
            <button>Submit User</button>
        </div>
    )
};

export default User