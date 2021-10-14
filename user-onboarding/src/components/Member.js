import React from 'react'

function Member({ details }) {
    if (!details) {
        return <h3>Fetching member&apos;s details</h3>
    }

    return (
        <div className='user container'>
            <p>Full Name: {details.username}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Credit/Debit Card Number: {details.card}</p>
            <p>3 Numbers on the back: {details.num3}</p>
            <br></br>
        </div>
    )
}

export default Member