import React from 'react'

function User ({details}) {
    if (!details) {
        return <h3>Working fetching your users details ... </h3>
    }


    return (
        <div className='user container'>
            <h2>{details.fname} {details.lname}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}

export default User;