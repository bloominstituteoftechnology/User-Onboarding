import React from 'react'

export default function UserForm({ details }) {
    if (!details) {
        return <h3>Working on getting your customers details</h3>
    }

    return (
        <div className='customer-container'>
            <h2>Customer and Vehicle Information</h2>
            <p>First Name: {details.first_name}</p>
            <p>Last Name: {details.last_name}</p>
            <p>Year of Vehicle: {details.year}</p>
            <p>Make of Vehicle: {details.make}</p>
            <p>Model of Vehicle: {details.model}</p>
        </div>
    )
}