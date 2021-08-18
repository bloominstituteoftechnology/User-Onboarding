import React from 'react'

function User({ details }) {
    if(!details) {
        return <h3>Working on fetching details...</h3>
    }

    return (
        <div className='user container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>
            <p>Terms Agreed: {details.termsOfService}</p>

            {
                !!details.termsOfService && !!details.termsOfService.length &&
                <div>
                    Terms Of Service: 
                </div>
            }
        </div>
    )
}

export default User
