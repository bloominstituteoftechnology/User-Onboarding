import React from 'react'

function User( {details} ){
    if(!details) {
        return <h3>Working fetching user details...</h3>
    }

    return(
        <div className='user-container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
        </div>
    )
}

export default User