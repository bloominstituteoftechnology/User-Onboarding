import React from 'react'

function User({ info }) {
    if (!info) {
        return <h3>Searching for users information...</h3>
    }

    return (
        <div className='user'>
            <h3>{info.first_name} {info.last_name}</h3>
            <p>Email: {info.email}</p>


        </div>
    )
}

export default User;