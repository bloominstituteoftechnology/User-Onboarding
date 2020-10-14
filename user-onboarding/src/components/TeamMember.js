import React from 'react'

export default function TeamMember({ details }) {
    if(!details) {
        return <h3>Fetching team member details...</h3>
    }
    
    return (
        <div className="team-member">
            <h2>{details.name}</h2>
            <h3>General Info</h3>
            <p>Username: {details.username}</p>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <h3>Team Info</h3>
            <p>Department: {details.department}</p>
            <p>Tea,: {details.team}</p>
            <p>Supervisor: {details.supervisor}</p>
            <p>Location: {details.location}</p>
            <p>{details.gum} work weekends for Trident Layers</p>
        </div>
    )
}