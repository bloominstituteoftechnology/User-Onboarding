import React from 'react'

export default function UserForm({ details }) {
    if (!details) {
        return <h3>Working getting your friend details</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.username}</h2>
            <p>Role: {details.role}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms of Service: {details.terms}</p>
        </div>
    )
}