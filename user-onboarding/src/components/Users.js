import React from 'react'

export default function Users({details}) {
if (!details) {
    return <h3>Fetching your user</h3>
}

return (
    <div className = 'friend container'>
        <h2>{details.username}</h2>
        <p>Email {details.email}</p>
        <p>Password: {details.password}</p>
    </div>
)
}
