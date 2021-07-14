import React from 'react'

export default function User(props) {
    const { user } = props

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
        </div>
    )
}