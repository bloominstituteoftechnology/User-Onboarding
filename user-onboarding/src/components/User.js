import React from 'react'

export default function User({details}) {
    if (!details) {
        return <h3>Working fetching your user&apos;s details...</h3>
    }
    
    return (
        <div>
            <h2>Name: {details.firstName} {details.lastName}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}
