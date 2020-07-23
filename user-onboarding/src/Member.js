// creating a component to display current members 
import React from 'react'; 

export default function Member({details}) {

    return (
        <div className='member-details'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
        </div>
    )
}