import React from 'react'

export default function UserForm({ details }) {
    if (!details) {
        return <h3>Working getting your friend details</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.email}</h2>
            <p>First Name: {details.first_name}</p>
            <p>Last Name: {details.last_name}</p>
            <p>Avatar: <img src={details.avatar}></img></p>
        </div>
    )
}