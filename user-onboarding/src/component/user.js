import React from 'react'


export default function user({ details }) {
    if(!details) {
        return <h3>Working on fetching your user&apos;s detaiils...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.username}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms Of Service: {details.termsOfService}</p>
{
    !!details.username && !!details.username.length &&
    <div>
        New Users:
        <ul>
            {details.username.map((like, idx) => <li key={idx}>{like}</li>)}
        </ul>
        </div>
}
</div>
    )
}