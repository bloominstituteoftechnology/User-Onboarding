import React from 'react'

const User = ({ details }) => {
    return (
        <div className='user-list container'>
            <h3>Name: {details.name}</h3>
            <p>Email: {details.email}</p>
            <p>Password: {details.password ? '*******' : 'error. no password.'}</p>
        </div>
    )
}

export default User