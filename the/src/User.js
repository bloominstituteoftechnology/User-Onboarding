import React from 'react'



export default function User({ details }) {
    if (!details) {
        return <h3>Fetching member........</h3>
    }
return (
    <div>
        <h2>{details.name}</h2>
        <p>{details.email}</p>
{
    !!details.Terms && !!details.Terms.length &&
    <div>
        Terms:
        <ul>
            {details.Terms.map((check, name) => <li key = {name}>{check}</li>)}
        </ul>
    </div>
}


    </div>
)





}