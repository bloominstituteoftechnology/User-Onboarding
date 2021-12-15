import React from 'react';

export default function User({ details }) {
   if(!details) {
       return <h3>Grabbing User details...don't go anywhere!</h3>
   }
    return (
        <div className='user container'>
            <h2>{details.first_name} {details.last_name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>

            {
                !!details.terms && !! details.terms.length && 
                <div>
                    <ul>
                        {details.terms.map((term, idx) => <li key={idx}>{term}</li>)}
                    </ul>
                </div> 
            }
            
        </div>
    )
}
