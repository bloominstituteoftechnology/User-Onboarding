import React from 'react';

export default function User({ details }) {
   if(!details) {
       return <h3>Grabbing User details...don't go anywhere!</h3>
   }
    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: ********(add toggle to show password?)</p>
            <p>Terms of Service: You agree to give away all your data and let it be sold to a third party. You will then be bombarded with calls, texts, emails, and even advertising to obtain more information and money from you.</p>

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
